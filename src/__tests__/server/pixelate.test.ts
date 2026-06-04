/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile, unlink, writeFile } from 'fs/promises'
import pixelated from 'pixelated'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import handler from '../../server/api/pixelate.post'

vi.mock('pixelated', () => ({ default: vi.fn() }))
vi.mock('sharp', () => ({
  default: vi.fn((input: Buffer) => ({ rotate: vi.fn().mockReturnThis(), toBuffer: vi.fn().mockResolvedValue(input) }))
}))
vi.mock('fs/promises', () => ({
  readFile: vi.fn(),
  writeFile: vi.fn(),
  unlink: vi.fn()
}))

const readMultipartFormData = (globalThis as any).readMultipartFormData as ReturnType<typeof vi.fn>

const file = (filename = 'photo.png', data = Buffer.from('INPUT')) => ({ name: 'file', data, filename }) as any

const field = (name: string, value: string) => ({ name, data: Buffer.from(value) })

const mockEvent = {}

describe('POST /api/pixelate', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(pixelated).mockResolvedValue(undefined as any)
    vi.mocked(readFile).mockResolvedValue(Buffer.from('output-data') as any)
    vi.mocked(writeFile).mockResolvedValue(undefined)
    vi.mocked(unlink).mockResolvedValue(undefined)
  })

  it('throws 400 when form data is null', async () => {
    readMultipartFormData.mockResolvedValue(null)
    await expect((handler as any)(mockEvent)).rejects.toMatchObject({
      statusCode: 400,
      message: 'No form data received'
    })
  })

  it('throws 400 when file field is missing', async () => {
    readMultipartFormData.mockResolvedValue([field('pixel', '20')])
    await expect((handler as any)(mockEvent)).rejects.toMatchObject({
      statusCode: 400,
      message: 'No file provided'
    })
  })

  it('throws 400 when file data is empty', async () => {
    readMultipartFormData.mockResolvedValue([file('test.png', Buffer.alloc(0))])
    await expect((handler as any)(mockEvent)).rejects.toMatchObject({
      statusCode: 400,
      message: 'No file provided'
    })
  })

  it('returns base64-encoded output with correct mimeType and filename', async () => {
    vi.mocked(readFile).mockResolvedValue(Buffer.from('PNG_BYTES') as any)
    readMultipartFormData.mockResolvedValue([file('photo.png'), field('format', 'png')])

    const result = await (handler as any)(mockEvent)

    expect(result.data).toBe(Buffer.from('PNG_BYTES').toString('base64'))
    expect(result.mimeType).toBe('image/png')
    expect(result.filename).toBe('photo_pixelated.png')
  })

  it('returns text/plain mimeType and .txt filename for ansi format', async () => {
    readMultipartFormData.mockResolvedValue([file('art.png'), field('format', 'ansi')])

    const result = await (handler as any)(mockEvent)

    expect(result.mimeType).toBe('text/plain')
    expect(result.filename).toBe('art_pixelated.txt')
  })

  it('passes default parameters when none are provided', async () => {
    readMultipartFormData.mockResolvedValue([file()])

    await (handler as any)(mockEvent)

    expect(vi.mocked(pixelated)).toHaveBeenCalledWith(
      expect.objectContaining({
        pixel: 20,
        format: 'png',
        blur: undefined,
        dither: false,
        greyscale: false,
        shape: 'rect',
        gap: 0,
        scale: 1,
        palette: undefined
      })
    )
  })

  it('treats blur=0 as undefined (no blur)', async () => {
    readMultipartFormData.mockResolvedValue([file(), field('blur', '0')])

    await (handler as any)(mockEvent)

    expect(vi.mocked(pixelated)).toHaveBeenCalledWith(expect.objectContaining({ blur: undefined }))
  })

  it('passes blur when greater than 0', async () => {
    readMultipartFormData.mockResolvedValue([file(), field('blur', '2.5')])

    await (handler as any)(mockEvent)

    expect(vi.mocked(pixelated)).toHaveBeenCalledWith(expect.objectContaining({ blur: 2.5 }))
  })

  it('passes palette and dither when provided', async () => {
    readMultipartFormData.mockResolvedValue([file(), field('palette', 'gameboy'), field('dither', 'true')])

    await (handler as any)(mockEvent)

    expect(vi.mocked(pixelated)).toHaveBeenCalledWith(expect.objectContaining({ palette: 'gameboy', dither: true }))
  })

  it('cleans up temp files after successful processing', async () => {
    readMultipartFormData.mockResolvedValue([file()])

    await (handler as any)(mockEvent)

    expect(vi.mocked(unlink)).toHaveBeenCalledTimes(2)
  })

  it('cleans up temp files even when pixelated throws', async () => {
    vi.mocked(pixelated).mockRejectedValue(new Error('Processing failed'))
    readMultipartFormData.mockResolvedValue([file()])

    await expect((handler as any)(mockEvent)).rejects.toThrow('Processing failed')

    expect(vi.mocked(unlink)).toHaveBeenCalledTimes(2)
  })
})
