import { randomUUID } from 'crypto'
import { readFile, unlink, writeFile } from 'fs/promises'
import { extname, join } from 'path'
import type { PaletteKey, PixelatedFormat, PixelatedShape } from 'pixelated'
import pixelated from 'pixelated'
import sharp from 'sharp'

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
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
  const clampF = (v: number | undefined, min: number, max: number) => (v !== undefined ? clamp(v, min, max) : undefined)

  const pixelRaw = get('pixel') ?? '20'
  const pixel = pixelRaw === 'auto' ? 'auto' : clamp(parseInt(pixelRaw, 10), 1, 200)
  const autoPixelDensityRaw = getInt('autoPixelDensity')
  const autoPixelDensity = autoPixelDensityRaw !== undefined ? clamp(autoPixelDensityRaw, 1, 200) : undefined
  const format = (get('format') ?? 'png') as WebFormat
  const paletteKey = get('palette') || undefined
  const dither = get('dither') === 'true'
  const greyscale = get('greyscale') === 'true'
  const invert = get('invert') === 'true'
  const shape = (get('shape') ?? 'rect') as PixelatedShape
  const gap = clamp(parseInt(get('gap') ?? '0', 10), 0, 50)
  const scale = clamp(parseFloat(get('scale') ?? '1'), 0.1, 10)
  const background = get('background') || undefined
  const blurRaw = clamp(parseFloat(get('blur') ?? '0'), 0, 20)
  const blur = blurRaw >= 0.3 ? blurRaw : undefined
  const noiseRaw = clamp(parseFloat(get('noise') ?? '0'), 0, 100)
  const noise = noiseRaw > 0 ? noiseRaw : undefined
  const scanlines = clamp(parseInt(get('scanlines') ?? '0', 10), 0, 20)
  const colorCountRaw = getInt('colorCount')
  const colorCount = colorCountRaw !== undefined ? clamp(colorCountRaw, 0, 256) : undefined
  const brightness = clampF(getFloat('brightness'), 0.1, 3)
  const contrast = clampF(getFloat('contrast'), 0, 3)
  const saturation = clampF(getFloat('saturation'), 0, 3)
  const hue = clampF(getFloat('hue'), -180, 180)
  const vibrancyRaw = clampF(getFloat('vibrancy'), 0, 1)
  const vibrancy = vibrancyRaw && vibrancyRaw > 0 ? vibrancyRaw : undefined
  const remapRaw = clampF(getFloat('remap'), 0, 1)
  const remap = remapRaw && remapRaw > 0 ? remapRaw : undefined
  const seed = getInt('seed')

  const uuid = randomUUID()
  const inputExt = extname(fileField.filename ?? 'input.png') || '.png'
  const outExt = outExtensions[format] ?? '.png'
  const inputPath = join('/tmp', `pxl-in-${uuid}${inputExt}`)
  const outputPath = join('/tmp', `pxl-out-${uuid}${outExt}`)

  try {
    const orientedData = await sharp(fileField.data).rotate().toBuffer()
    await writeFile(inputPath, orientedData)

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
      vibrancy,
      remap,
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
  } catch (e) {
    if (e && typeof e === 'object' && 'statusCode' in e) throw e
    throw createError({ statusCode: 500, message: (e as Error).message ?? 'Processing failed' })
  } finally {
    await unlink(inputPath).catch(() => {})
    await unlink(outputPath).catch(() => {})
  }
})
