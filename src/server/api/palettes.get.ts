export default defineEventHandler(async () => {
  try {
    const { palettes } = await import('pixelated')
    return palettes
  } catch (e) {
    throw createError({ statusCode: 500, message: `palettes import failed: ${(e as Error).message}` })
  }
})
