import { randomUUID } from 'crypto'
import { extname } from 'path'
import { readFile, unlink, writeFile } from 'fs/promises'
import { join } from 'path'
import pixelated from 'pixelated'
import type { PaletteKey, PixelatedFormat } from 'pixelated'

type WebFormat = PixelatedFormat

const mimeTypes: Record<WebFormat, string> = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  webp: 'image/webp',
  avif: 'image/avif',
  svg: 'image/svg+xml',
  ansi: 'text/plain'
}

const outExtensions: Record<WebFormat, string> = {
  png: '.png',
  jpeg: '.jpeg',
  jpg: '.jpg',
  webp: '.webp',
  avif: '.avif',
  svg: '.svg',
  ansi: '.txt'
}

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  if (!form) throw createError({ statusCode: 400, message: 'No form data received' })

  const fileField = form.find((f) => f.name === 'file')
  if (!fileField?.data?.length) throw createError({ statusCode: 400, message: 'No file provided' })

  const get = (name: string) => form.find((f) => f.name === name)?.data?.toString('utf8')

  const pixel = parseInt(get('pixel') ?? '20', 10)
  const format = (get('format') ?? 'png') as WebFormat
  const paletteKey = get('palette') || undefined
  const dither = get('dither') === 'true'
  const greyscale = get('greyscale') === 'true'
  const shape = (get('shape') ?? 'rect') as 'rect' | 'circle' | 'diamond'
  const gap = parseInt(get('gap') ?? '0', 10)
  const scale = parseFloat(get('scale') ?? '1')
  const background = get('background') || undefined
  const blurRaw = parseFloat(get('blur') ?? '0')
  const blur = blurRaw > 0 ? blurRaw : undefined

  const uuid = randomUUID()
  const inputExt = extname(fileField.filename ?? 'input.png') || '.png'
  const outExt = outExtensions[format] ?? '.png'
  const inputPath = join('/tmp', `pxl-in-${uuid}${inputExt}`)
  const outputPath = join('/tmp', `pxl-out-${uuid}${outExt}`)

  try {
    await writeFile(inputPath, fileField.data)

    await pixelated({
      input: inputPath,
      output: outputPath,
      pixel,
      format,
      palette: paletteKey as PaletteKey | undefined,
      dither,
      greyscale,
      blur,
      shape,
      gap,
      scale,
      background
    })

    const outputData = await readFile(outputPath)
    const baseName = (fileField.filename ?? 'image').replace(/\.[^.]+$/, '')
    const filename = `${baseName}_pixelated${outExt}`

    return {
      data: outputData.toString('base64'),
      filename,
      mimeType: mimeTypes[format] ?? 'image/png'
    }
  } finally {
    await unlink(inputPath).catch(() => {})
    await unlink(outputPath).catch(() => {})
  }
})
