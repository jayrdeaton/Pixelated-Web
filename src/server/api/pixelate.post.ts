import { randomUUID } from 'crypto'
import { readFile, unlink, writeFile } from 'fs/promises'
import { extname } from 'path'
import { join } from 'path'
import type { PaletteKey, PixelatedFormat, PixelatedShape } from 'pixelated'
import pixelated from 'pixelated'

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
  const getFloat = (name: string) => {
    const v = get(name)
    return v !== undefined ? parseFloat(v) : undefined
  }
  const getInt = (name: string) => {
    const v = get(name)
    return v !== undefined ? parseInt(v, 10) : undefined
  }

  const pixelRaw = get('pixel') ?? '20'
  const pixel = pixelRaw === 'auto' ? 'auto' : parseInt(pixelRaw, 10)
  const autoPixelDensity = getInt('autoPixelDensity')
  const format = (get('format') ?? 'png') as WebFormat
  const paletteKey = get('palette') || undefined
  const dither = get('dither') === 'true'
  const greyscale = get('greyscale') === 'true'
  const invert = get('invert') === 'true'
  const shape = (get('shape') ?? 'rect') as PixelatedShape
  const gap = parseInt(get('gap') ?? '0', 10)
  const scale = parseFloat(get('scale') ?? '1')
  const background = get('background') || undefined
  const blurRaw = parseFloat(get('blur') ?? '0')
  const blur = blurRaw > 0 ? blurRaw : undefined
  const noiseRaw = parseFloat(get('noise') ?? '0')
  const noise = noiseRaw > 0 ? noiseRaw : undefined
  const scanlines = parseInt(get('scanlines') ?? '0', 10)
  const colorCount = getInt('colorCount')
  const brightness = getFloat('brightness')
  const contrast = getFloat('contrast')
  const saturation = getFloat('saturation')
  const hue = getFloat('hue')
  const seed = getInt('seed')

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
      autoPixelDensity,
      format,
      palette: paletteKey as PaletteKey | undefined,
      dither,
      greyscale,
      invert,
      blur,
      shape,
      gap,
      scale,
      background,
      noise,
      scanlines,
      colorCount,
      brightness,
      contrast,
      saturation,
      hue,
      seed
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
