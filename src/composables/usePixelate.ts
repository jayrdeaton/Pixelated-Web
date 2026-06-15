import { AnsiUp } from 'ansi_up'
import { Circle, Cloud, Code, Contrast, Diamond, Droplet, Droplets, Feather, Film, Flame, Gamepad2, Glasses, Hash, Hexagon, Joystick, LayoutGrid, Monitor, Moon, Palette, Smartphone, Snowflake, Sparkles, Square, Star, Sun, Terminal as TerminalIcon, Wand2, Zap } from 'lucide-vue-next'
import type { Component, InjectionKey } from 'vue'

export type PresetCategory = 'retro' | 'aesthetic' | 'effects'
export type ShapeValue = 'rect' | 'round-rect' | 'circle' | 'ring' | 'diamond' | 'triangle' | 'hexagon' | 'pentagon' | 'star' | 'cross' | 'x' | 'asterisk' | 'hash' | 'heart' | 'crescent' | 'leaf' | 'pacman' | 'bowtie' | 'arrow' | 'flower' | 'bacon'

export type PresetDef = {
  label: string
  category: PresetCategory
  icon?: Component
  pixel?: number
  pixelAuto?: boolean
  shape?: ShapeValue
  palette?: string
  dither?: boolean
  greyscale?: boolean
  invert?: boolean
  gap?: number
  contrast?: number
  brightness?: number
  saturation?: number
  hue?: number
  vibrancy?: number
  remap?: number
  noise?: number
  colorCount?: number
  scanlines?: number
  blur?: number
}

export type MoodDef = {
  label: string
  icon: Component
  brightness?: number
  contrast?: number
  saturation?: number
  hue?: number
}

export type HistoryItem = {
  url: string | null
  ansiText: string | null
  filename: string
  label: string
  fileSize: number | null
}

export const presets: PresetDef[] = [
  // Retro (main)
  { label: 'Game Boy', category: 'retro', icon: Smartphone, pixelAuto: true, shape: 'rect', palette: 'gb', greyscale: true, dither: true },
  { label: 'Game Boy Color', category: 'retro', icon: Smartphone, pixelAuto: true, shape: 'rect', palette: 'gbc' },
  { label: 'NES', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'nes' },
  { label: 'SNES', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'snes' },
  { label: 'N64', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'n64' },
  { label: 'Genesis', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'genesis' },
  { label: 'Atari', category: 'retro', icon: Joystick, pixelAuto: true, shape: 'rect', palette: 'atari' },
  { label: 'C64', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'c64' },
  { label: 'PICO-8', category: 'retro', icon: Code, pixelAuto: true, shape: 'rect', palette: 'pico8' },
  { label: 'CGA', category: 'retro', icon: Monitor, pixelAuto: true, shape: 'rect', palette: 'cga' },
  // Retro (extended)
  { label: 'Game Boy Pocket', category: 'retro', icon: Smartphone, pixelAuto: true, shape: 'rect', palette: 'gbp', greyscale: true, dither: true },
  { label: 'Game Boy Advance', category: 'retro', icon: Smartphone, pixelAuto: true, shape: 'rect', palette: 'gba' },
  { label: 'Virtual Boy', category: 'retro', icon: Glasses, pixelAuto: true, shape: 'rect', palette: 'vb', greyscale: true },
  { label: 'Master System', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'sms' },
  { label: 'Game Gear', category: 'retro', icon: Smartphone, pixelAuto: true, shape: 'rect', palette: 'gg' },
  { label: 'TurboGrafx-16', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'tg16' },
  { label: 'Neo Geo', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'neogeo' },
  { label: 'PS1', category: 'retro', icon: Gamepad2, pixelAuto: true, shape: 'rect', palette: 'ps1' },
  { label: 'MSX', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'msx' },
  { label: 'ZX Spectrum', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'zxspectrum' },
  { label: 'Amstrad', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'amstrad' },
  { label: 'Amiga', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'amiga' },
  { label: 'Apple II', category: 'retro', icon: TerminalIcon, pixelAuto: true, shape: 'rect', palette: 'apple2' },
  { label: 'EGA', category: 'retro', icon: Monitor, pixelAuto: true, shape: 'rect', palette: 'ega' },
  // Aesthetic
  { label: 'Amber', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'amber', greyscale: true },
  { label: 'Dracula', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'dracula' },
  { label: 'Forest', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'forest' },
  { label: 'Lava', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'lava' },
  { label: 'Mono', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'mono', greyscale: true },
  { label: 'Neon', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'neon' },
  { label: 'Noir', category: 'aesthetic', pixelAuto: true, shape: 'rect', greyscale: true, contrast: 1.3, brightness: 0.85 },
  { label: 'Nord', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'nord' },
  { label: 'Ocean', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'ocean' },
  { label: 'Pastel', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'pastel', gap: 1 },
  { label: 'Rainbow', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'rainbow' },
  { label: 'Sakura', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'sakura', gap: 1 },
  { label: 'Sepia', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'sepia' },
  { label: 'Sunset', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'sunset' },
  { label: 'Terminal', category: 'aesthetic', pixel: 4, shape: 'rect', palette: 'terminal', scanlines: 1 },
  { label: 'Vaporwave', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'vaporwave', gap: 1 },
  // Effects
  { label: 'Bacon', category: 'effects', icon: Flame, pixelAuto: true, shape: 'bacon', gap: 2, palette: 'lava' },
  { label: 'Cartoon', category: 'effects', icon: Wand2, pixelAuto: true, saturation: 2.5, colorCount: 6, contrast: 1.4 },
  { label: 'Cross-Stitch', category: 'effects', icon: Hash, pixel: 12, shape: 'cross', gap: 2 },
  { label: 'Diamond', category: 'effects', icon: Diamond, pixelAuto: true, shape: 'diamond', gap: 2 },
  { label: 'Glitch', category: 'effects', icon: Zap, pixelAuto: true, shape: 'rect', noise: 25, contrast: 1.1 },
  { label: 'Halftone', category: 'effects', icon: Circle, pixelAuto: true, shape: 'circle', gap: 2 },
  { label: 'Honeycomb', category: 'effects', icon: Hexagon, pixelAuto: true, shape: 'hexagon', gap: 2 },
  { label: 'Mosaic', category: 'effects', icon: LayoutGrid, pixel: 20, shape: 'round-rect', gap: 3 },
  { label: 'Pixel Art', category: 'effects', icon: Square, pixel: 16, shape: 'rect' },
  { label: 'Posterize', category: 'effects', icon: Palette, pixelAuto: true, palette: 'nes', saturation: 1.5, remap: 0.8, contrast: 1.1 },
  { label: 'Retro CRT', category: 'effects', icon: Monitor, pixel: 4, shape: 'rect', palette: 'nes', scanlines: 2, contrast: 1.2 },
  { label: 'Watercolor', category: 'effects', icon: Droplet, pixelAuto: true, shape: 'rect', palette: 'pastel', blur: 2 }
]

export const moods: MoodDef[] = [
  { label: 'Cinematic', icon: Film, contrast: 1.3, saturation: 0.85, brightness: 0.9 },
  { label: 'Cool', icon: Snowflake, hue: 15, saturation: 1.05 },
  { label: 'Dark', icon: Moon, brightness: 0.7, contrast: 1.2 },
  { label: 'Dreamy', icon: Star, brightness: 1.15, contrast: 0.8, saturation: 0.8 },
  { label: 'Faded', icon: Cloud, saturation: 0.5, brightness: 1.05, contrast: 0.85 },
  { label: 'High Contrast', icon: Contrast, contrast: 1.6, brightness: 0.95 },
  { label: 'Muted', icon: Feather, saturation: 0.7, contrast: 0.9 },
  { label: 'Vivid', icon: Sparkles, saturation: 1.4, contrast: 1.15 },
  { label: 'Warm', icon: Sun, hue: -15, saturation: 1.1 },
  { label: 'Washed', icon: Droplets, brightness: 1.2, contrast: 0.7, saturation: 0.5 }
]

export const presetCategories: { key: PresetCategory; label: string }[] = [
  { key: 'retro', label: 'Retro' },
  { key: 'aesthetic', label: 'Aesthetic' },
  { key: 'effects', label: 'Effects' }
]

export const mainRetroLabels = new Set(['Game Boy', 'Game Boy Color', 'NES', 'SNES', 'N64', 'Genesis', 'Atari', 'C64', 'PICO-8', 'CGA'])

export const categoryStyle: Record<PresetCategory, { active: string; inactive: string; tabActive: string }> = {
  retro: {
    active: 'bg-amber-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
    inactive: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:text-amber-800 dark:hover:text-amber-400 shadow-[2px_2px_0_rgba(0,0,0,0.12)]',
    tabActive: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'
  },
  aesthetic: {
    active: 'bg-fuchsia-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
    inactive: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 hover:text-fuchsia-700 dark:hover:text-fuchsia-400 shadow-[2px_2px_0_rgba(0,0,0,0.12)]',
    tabActive: 'bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-700 dark:text-fuchsia-400'
  },
  effects: {
    active: 'bg-teal-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
    inactive: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-teal-50 dark:hover:bg-teal-950/20 hover:text-teal-700 dark:hover:text-teal-400 shadow-[2px_2px_0_rgba(0,0,0,0.12)]',
    tabActive: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400'
  }
}

export const moodActiveClass: Record<string, string> = {
  Vivid: 'bg-pink-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Faded: 'bg-slate-400 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'High Contrast': 'bg-red-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Muted: 'bg-purple-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Dark: 'bg-indigo-700 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Warm: 'bg-orange-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Cool: 'bg-cyan-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Cinematic: 'bg-rose-700 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Dreamy: 'bg-pink-300 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  Washed: 'bg-sky-300 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]'
}

export const features = [
  {
    title: 'Shapes & effects',
    description: 'Twenty-one pixel shapes — rect, circle, star, heart, hexagon, flower, bacon, and more. Fine-tune with gap, jitter, wave, pulse, size variance, and brightness size.'
  },
  {
    title: 'Color tools',
    description: 'Palettes, dithering, greyscale, invert, brightness, contrast, saturation, hue, vibrancy, remap, noise, and color quantization.'
  },
  {
    title: 'CLI + library',
    description: 'Use from the terminal or import pixelated directly in your Node.js project. PNG, JPEG, WebP, AVIF, SVG, and ANSI output.'
  }
]

export function createPixelateState() {
  const file = ref<File | null>(null)
  const previewUrl = ref<string | null>(null)
  const dragging = ref(false)

  const pixelSize = ref(20)
  const pixelAuto = ref(false)
  const autoPixelDensity = ref(50)
  const format = ref<'png' | 'jpeg' | 'webp' | 'avif' | 'svg' | 'ansi'>('png')
  const palette = ref('')
  const dither = ref(false)
  const greyscale = ref(false)
  const invert = ref(false)
  const blur = ref(0)
  const brightness = ref(1)
  const contrast = ref(1)
  const saturation = ref(1)
  const hue = ref(0)
  const vibrancy = ref(0)
  const remap = ref(0)
  const noise = ref(0)
  const colorCount = ref('')
  const shape = ref<ShapeValue>('rect')
  const gap = ref(0)
  const scale = ref(1)
  const scanlines = ref(0)
  const seed = ref('')
  const background = ref('')
  const jitter = ref(0)
  const sizeVariance = ref(0)
  const pulse = ref(0)
  const wave = ref(0)
  const brightnessSize = ref(0)
  const alt = ref(false)
  const offset = ref(false)

  const processing = ref(false)
  const abortController = ref<AbortController | null>(null)
  const isPwa = ref(false)
  const error = ref<string | null>(null)
  const autoUpdate = ref(true)

  const activePreset = ref('')
  const presetCategory = ref<PresetCategory>('retro')
  const showAllRetro = ref(false)

  const filteredPresets = computed(() => {
    const all = presets.filter((p) => p.category === presetCategory.value)
    if (presetCategory.value === 'retro' && !showAllRetro.value) {
      return all.filter((p) => mainRetroLabels.has(p.label))
    }
    return all
  })

  const activeMood = ref('')

  const isAnsi = computed(() => format.value === 'ansi')
  const hasBackground = computed(() => format.value !== 'jpeg' && format.value !== 'ansi')

  const autoPixelResolved = ref<number | null>(null)
  watch([pixelAuto, previewUrl, autoPixelDensity], () => {
    if (!pixelAuto.value || !previewUrl.value) {
      autoPixelResolved.value = null
      return
    }
    const img = new Image()
    img.onload = () => {
      autoPixelResolved.value = Math.max(1, Math.round(Math.min(img.naturalWidth, img.naturalHeight) / autoPixelDensity.value))
    }
    img.src = previewUrl.value
  })

  const showAdjustments = ref(false)
  const activeAdjustmentCount = computed(() => {
    let n = 0
    if (dither.value) n++
    if (greyscale.value) n++
    if (invert.value) n++
    if (scale.value !== 1) n++
    if (gap.value > 0) n++
    if (blur.value > 0) n++
    if (brightness.value !== 1) n++
    if (contrast.value !== 1) n++
    if (saturation.value !== 1) n++
    if (hue.value !== 0) n++
    if (vibrancy.value > 0) n++
    if (remap.value > 0) n++
    if (noise.value > 0) n++
    if (colorCount.value !== '') n++
    if (scanlines.value > 0) n++
    if (jitter.value > 0) n++
    if (sizeVariance.value > 0) n++
    if (pulse.value > 0) n++
    if (wave.value > 0) n++
    if (brightnessSize.value > 0) n++
    return n
  })

  const { data: palettesData } = useFetch<Record<string, string[]>>('/api/palettes', { server: false })

  const presetGradients = computed(() => {
    const result: Record<string, string> = {}
    if (!palettesData.value) return result
    for (const p of presets) {
      if (!p.palette) continue
      const colors = palettesData.value[p.palette]
      if (!colors?.length) continue
      const max = 10
      const sampled = colors.length <= max ? colors : Array.from({ length: max }, (_, i) => colors[Math.floor((i * colors.length) / max)])
      result[p.label] = `linear-gradient(to right, ${sampled.join(', ')})`
    }
    return result
  })

  const history = ref<HistoryItem[]>([])
  const activeItem = ref<HistoryItem | null>(null)

  const ansiUp = new AnsiUp()
  const ansiHtml = computed(() => (activeItem.value?.ansiText ? ansiUp.ansi_to_html(activeItem.value.ansiText) : ''))

  const ansiPreEl = ref<HTMLElement | null>(null)
  const ansiContainerEl = ref<HTMLElement | null>(null)
  const ansiScale = ref(1)

  watch(
    () => activeItem.value?.ansiText,
    async () => {
      ansiScale.value = 1
      if (!activeItem.value?.ansiText) return
      await nextTick()
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
      if (!ansiContainerEl.value || !ansiPreEl.value) return
      const available = ansiContainerEl.value.clientWidth - 32
      if (available <= 0) return
      const natural = ansiPreEl.value.scrollWidth
      if (natural > available) ansiScale.value = available / natural
    }
  )

  const ansiCopied = ref(false)
  const copyAnsi = async () => {
    if (!activeItem.value?.ansiText) return
    await navigator.clipboard.writeText(activeItem.value.ansiText)
    ansiCopied.value = true
    setTimeout(() => (ansiCopied.value = false), 2000)
  }

  const downloadAnsi = () => {
    if (!activeItem.value?.ansiText) return
    const blob = new Blob([activeItem.value.ansiText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = activeItem.value.filename
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadHistoryAnsi = (item: HistoryItem) => {
    if (!item.ansiText) return
    const blob = new Blob([item.ansiText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = item.filename
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearHistory = () => {
    for (const item of history.value) {
      if (item.url) URL.revokeObjectURL(item.url)
    }
    history.value = []
    activeItem.value = null
  }

  const clearImage = () => {
    activeItem.value = null
    error.value = null
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
    file.value = null
  }

  const clearAll = () => {
    clearHistory()
    resetOptions()
    clearImage()
  }

  const resetOptions = () => {
    activePreset.value = ''
    activeMood.value = ''
    pixelSize.value = 20
    pixelAuto.value = false
    autoPixelDensity.value = 50
    showAdjustments.value = false
    format.value = 'png'
    palette.value = ''
    dither.value = false
    greyscale.value = false
    invert.value = false
    blur.value = 0
    brightness.value = 1
    contrast.value = 1
    saturation.value = 1
    hue.value = 0
    vibrancy.value = 0
    remap.value = 0
    noise.value = 0
    colorCount.value = ''
    shape.value = 'rect'
    gap.value = 0
    scale.value = 1
    scanlines.value = 0
    seed.value = ''
    background.value = ''
    jitter.value = 0
    sizeVariance.value = 0
    pulse.value = 0
    wave.value = 0
    brightnessSize.value = 0
    alt.value = false
    offset.value = false
  }

  let autoProcessTimer: ReturnType<typeof setTimeout> | null = null
  const triggerAutoProcess = () => {
    if (!file.value) return
    if (!autoUpdate.value) return
    if (autoProcessTimer) clearTimeout(autoProcessTimer)
    autoProcessTimer = setTimeout(() => {
      autoProcessTimer = null
      process()
    }, 350)
  }

  watch([pixelSize, pixelAuto, autoPixelDensity, format, palette, dither, greyscale, invert, blur, brightness, contrast, saturation, hue, vibrancy, remap, noise, colorCount, shape, gap, scale, scanlines, seed, background, jitter, sizeVariance, pulse, wave, brightnessSize, alt, offset], () => {
    triggerAutoProcess()
  })

  const applyMood = (mood: MoodDef) => {
    if (activeMood.value === mood.label) {
      activeMood.value = ''
      brightness.value = 1
      contrast.value = 1
      saturation.value = 1
      hue.value = 0
      triggerAutoProcess()
      return
    }
    activeMood.value = mood.label
    brightness.value = mood.brightness ?? 1
    contrast.value = mood.contrast ?? 1
    saturation.value = mood.saturation ?? 1
    hue.value = mood.hue ?? 0
    triggerAutoProcess()
  }

  const applyPreset = (preset: PresetDef) => {
    const prevMood = activeMood.value ? moods.find((m) => m.label === activeMood.value) : null
    const prevShowAdj = showAdjustments.value
    if (activePreset.value === preset.label) {
      resetOptions()
      showAdjustments.value = prevShowAdj
      if (prevMood) {
        activeMood.value = prevMood.label
        brightness.value = prevMood.brightness ?? 1
        contrast.value = prevMood.contrast ?? 1
        saturation.value = prevMood.saturation ?? 1
        hue.value = prevMood.hue ?? 0
      }
      triggerAutoProcess()
      return
    }
    const prevAutoPixelDensity = autoPixelDensity.value
    resetOptions()
    autoPixelDensity.value = prevAutoPixelDensity
    showAdjustments.value = prevShowAdj
    activePreset.value = preset.label
    if (preset.pixel !== undefined) pixelSize.value = preset.pixel
    if (preset.pixelAuto !== undefined) pixelAuto.value = preset.pixelAuto
    if (preset.shape !== undefined) shape.value = preset.shape
    if (preset.palette !== undefined) palette.value = preset.palette
    if (preset.dither !== undefined) dither.value = preset.dither
    if (preset.greyscale !== undefined) greyscale.value = preset.greyscale
    if (preset.invert !== undefined) invert.value = preset.invert
    if (preset.gap !== undefined) gap.value = preset.gap
    if (preset.contrast !== undefined) contrast.value = preset.contrast
    if (preset.brightness !== undefined) brightness.value = preset.brightness
    if (preset.saturation !== undefined) saturation.value = preset.saturation
    if (preset.hue !== undefined) hue.value = preset.hue
    if (preset.vibrancy !== undefined) vibrancy.value = preset.vibrancy
    if (preset.remap !== undefined) remap.value = preset.remap
    if (preset.noise !== undefined) noise.value = preset.noise
    if (preset.scanlines !== undefined) scanlines.value = preset.scanlines
    if (preset.blur !== undefined) blur.value = preset.blur
    if (prevMood) {
      activeMood.value = prevMood.label
      brightness.value = prevMood.brightness ?? 1
      contrast.value = prevMood.contrast ?? 1
      saturation.value = prevMood.saturation ?? 1
      hue.value = prevMood.hue ?? 0
    }
    triggerAutoProcess()
  }

  const setFile = (f: File) => {
    clearHistory()
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    file.value = f
    previewUrl.value = URL.createObjectURL(f)
    error.value = null
    process()
  }

  const handleDrop = (e: DragEvent) => {
    dragging.value = false
    const f = e.dataTransfer?.files[0]
    if (f) setFile(f)
  }

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const f = target.files?.[0]
    if (f) setFile(f)
  }

  const handleColorCountChange = () => {
    if (colorCount.value !== '' && Number(colorCount.value) <= 0) colorCount.value = ''
  }

  watch(seed, (newVal, oldVal) => {
    if (newVal !== '' && Number(newVal) < 0) {
      seed.value = ''
    } else if (oldVal === '' && newVal !== '' && Number(newVal) > 0) {
      seed.value = '0'
    }
  })

  const process = async () => {
    if (!file.value) return

    abortController.value?.abort()
    const controller = new AbortController()
    abortController.value = controller

    processing.value = true
    error.value = null

    const form = new FormData()
    form.append('file', file.value)
    form.append('pixel', pixelAuto.value ? 'auto' : String(pixelSize.value))
    if (pixelAuto.value && autoPixelDensity.value !== 50) form.append('autoPixelDensity', String(autoPixelDensity.value))
    form.append('format', format.value)
    if (palette.value) form.append('palette', palette.value)
    form.append('dither', String(dither.value))
    form.append('greyscale', String(greyscale.value))
    if (invert.value) form.append('invert', 'true')
    if (blur.value > 0) form.append('blur', String(blur.value))
    if (brightness.value !== 1) form.append('brightness', String(brightness.value))
    if (contrast.value !== 1) form.append('contrast', String(contrast.value))
    if (saturation.value !== 1) form.append('saturation', String(saturation.value))
    if (hue.value !== 0) form.append('hue', String(hue.value))
    if (vibrancy.value > 0) form.append('vibrancy', String(vibrancy.value))
    if (remap.value > 0) form.append('remap', String(remap.value))
    if (noise.value > 0) form.append('noise', String(noise.value))
    if (colorCount.value !== '') form.append('colorCount', colorCount.value)
    form.append('shape', shape.value)
    form.append('gap', String(gap.value))
    form.append('scale', String(scale.value))
    if (scanlines.value > 0) form.append('scanlines', String(scanlines.value))
    if (seed.value !== '') form.append('seed', seed.value)
    if (background.value && hasBackground.value) form.append('background', background.value)
    if (jitter.value > 0) form.append('jitter', String(jitter.value))
    if (sizeVariance.value > 0) form.append('sizeVariance', String(sizeVariance.value))
    if (pulse.value > 0) form.append('pulse', String(pulse.value))
    if (wave.value > 0) form.append('wave', String(wave.value))
    if (brightnessSize.value > 0) form.append('brightnessSize', String(brightnessSize.value))
    if (alt.value) form.append('alt', 'true')
    if (offset.value) form.append('offset', 'true')

    try {
      const res = await fetch('/api/pixelate', { method: 'POST', body: form, signal: controller.signal })

      if (!res.ok) {
        if (controller.signal.aborted) return
        const data = (await res.json().catch(() => ({ message: 'Pixelation failed' }))) as { message?: string }
        error.value = data.message ?? 'Pixelation failed'
        return
      }

      const data = (await res.json()) as { data: string; filename: string; mimeType: string }

      if (controller.signal.aborted) return

      const resolvedPixel = pixelAuto.value ? (autoPixelResolved.value ?? pixelSize.value) : pixelSize.value
      const shapeLabel = shape.value.charAt(0).toUpperCase() + shape.value.slice(1)
      const label = `${activeMood.value ? activeMood.value + ' · ' : ''}${activePreset.value ? activePreset.value + ' · ' : ''}${resolvedPixel}px · ${shapeLabel}`
      let url: string | null = null
      let ansi: string | null = null

      let fileSize: number | null = null
      if (data.mimeType === 'text/plain') {
        ansi = atob(data.data)
        fileSize = ansi.length
      } else {
        const byteStr = atob(data.data)
        const bytes = new Uint8Array(byteStr.length)
        for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
        fileSize = bytes.length
        url = URL.createObjectURL(new Blob([bytes], { type: data.mimeType }))
      }

      if (url) {
        await new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = url
        })
      }
      if (controller.signal.aborted) return
      const item: HistoryItem = { url, ansiText: ansi, filename: data.filename, label, fileSize }
      history.value.unshift(item)
      activeItem.value = item
    } catch (err) {
      if ((err as Error)?.name !== 'AbortError') {
        error.value = err instanceof Error ? err.message : 'Pixelation failed'
      }
    } finally {
      if (abortController.value === controller) {
        processing.value = false
        abortController.value = null
      }
    }
  }

  const handlePaste = (e: ClipboardEvent) => {
    const item = Array.from(e.clipboardData?.items ?? []).find((i) => i.type.startsWith('image/'))
    if (!item) return
    const f = item.getAsFile()
    if (f) setFile(f)
  }

  onMounted(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    isPwa.value = window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true
    document.addEventListener('paste', handlePaste)
    const splash = document.getElementById('splash')
    if (splash) {
      splash.style.opacity = '0'
      setTimeout(() => splash.remove(), 250)
    }
  })

  onUnmounted(() => {
    document.removeEventListener('paste', handlePaste)
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    for (const item of history.value) {
      if (item.url) URL.revokeObjectURL(item.url)
    }
  })

  const randomize = () => {
    const randomPreset = presets[Math.floor(Math.random() * presets.length)]
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    applyPreset(randomPreset)
    applyMood(randomMood)
    presetCategory.value = randomPreset.category
  }

  return {
    file,
    previewUrl,
    dragging,
    setFile,
    handleDrop,
    handleFileChange,
    pixelSize,
    pixelAuto,
    autoPixelDensity,
    autoPixelResolved,
    format,
    palette,
    dither,
    greyscale,
    invert,
    blur,
    brightness,
    contrast,
    saturation,
    hue,
    vibrancy,
    remap,
    noise,
    colorCount,
    shape,
    gap,
    scale,
    scanlines,
    seed,
    background,
    jitter,
    sizeVariance,
    pulse,
    wave,
    brightnessSize,
    alt,
    offset,
    isAnsi,
    hasBackground,
    activeAdjustmentCount,
    showAdjustments,
    processing,
    isPwa,
    error,
    autoUpdate,
    presetCategory,
    showAllRetro,
    filteredPresets,
    activePreset,
    presetGradients,
    activeMood,
    applyPreset,
    applyMood,
    resetOptions,
    process,
    handleColorCountChange,
    history,
    activeItem,
    clearImage,
    clearHistory,
    clearAll,
    randomize,
    loadHistoryItem: (item: HistoryItem) => {
      activeItem.value = item
    },
    downloadHistoryAnsi,
    ansiHtml,
    ansiScale,
    ansiPreEl,
    ansiContainerEl,
    ansiCopied,
    copyAnsi,
    downloadAnsi
  }
}

export type PixelateState = ReturnType<typeof createPixelateState>
export const PIXELATE_KEY: InjectionKey<PixelateState> = Symbol('pixelate')

export function usePixelate(): PixelateState {
  return inject(PIXELATE_KEY)!
}
