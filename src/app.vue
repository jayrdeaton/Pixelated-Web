<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-zinc-800 px-6 py-4 flex-shrink-0">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/icon.svg" alt="Pixelated" class="w-6 h-6" />
          <span class="text-base font-semibold tracking-tight">Pixelated</span>
        </div>
        <div class="flex items-center gap-3">
          <button :aria-label="colorMode.preference === 'system' ? 'System mode' : colorMode.preference === 'light' ? 'Light mode' : 'Dark mode'" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" @click="cycleColorMode">
            <svg v-if="colorMode.preference === 'system'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <svg v-else-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="https://www.npmjs.com/package/pixelated" target="_blank" rel="noopener" aria-label="npm" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M0 0v18h18V0H0zm14.5 14.5H9V5H5.5v9.5H3.5V3.5h11v11z" />
            </svg>
          </a>
          <a href="https://github.com/jayrdeaton/pixelated" target="_blank" rel="noopener" aria-label="GitHub" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.96.005 1.927.138 2.993.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 max-w-3xl mx-auto w-full px-6 py-14">
      <!-- Hero -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Pixelate your images.</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Upload an image, choose your settings, and download your pixelated image in seconds.</p>
      </div>

      <!-- Upload + Options card -->
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 mb-6 shadow-sm dark:shadow-none">
        <!-- Drop zone -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Image</label>
          <div class="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors" :class="dragging ? 'border-violet-400 dark:border-violet-500 bg-violet-50 dark:bg-violet-950/20' : 'border-gray-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600'" @click="fileInput?.click()" @dragover.prevent="dragging = true" @dragleave="dragging = false" @drop.prevent="handleDrop">
            <div v-if="!file" class="flex flex-col items-center gap-2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300 dark:text-zinc-600">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p class="text-sm text-gray-400 dark:text-zinc-500">Drop an image here, or <span class="text-violet-500 dark:text-violet-400">click to browse</span></p>
            </div>
            <div v-else class="flex flex-col items-center gap-3 pointer-events-none">
              <img :src="previewUrl ?? undefined" class="max-h-40 max-w-full rounded-lg object-contain" />
              <p class="text-sm font-medium text-gray-600 dark:text-zinc-300">{{ file.name }}</p>
            </div>
          </div>
          <input ref="fileInput" type="file" accept=".png,.jpg,.jpeg,.webp,.avif,image/png,image/jpeg,image/webp,image/avif" class="hidden" @change="handleFileChange" />
        </div>

        <!-- Options -->
        <div class="flex flex-wrap gap-5 mb-6 items-end">
          <!-- Pixel size -->
          <div>
            <label for="pixel-size" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Pixel size</label>
            <input id="pixel-size" v-model.number="pixelSize" type="number" min="1" max="200" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
          </div>

          <!-- Format -->
          <div>
            <label for="format" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Format</label>
            <select id="format" v-model="format" :disabled="processing" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500 uppercase">
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WebP</option>
              <option value="avif">AVIF</option>
              <option value="svg">SVG</option>
              <option value="ansi">ANSI</option>
            </select>
          </div>

          <!-- Shape -->
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Shape</p>
            <div class="flex gap-1.5">
              <button v-for="s in ['rect', 'circle', 'diamond']" :key="s" :disabled="processing" :class="shape === s ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'" class="px-3 py-2 rounded-lg text-sm font-medium capitalize transition-colors disabled:opacity-50" @click="shape = s as 'rect' | 'circle' | 'diamond'">
                {{ s }}
              </button>
            </div>
          </div>

          <!-- Gap -->
          <div>
            <label for="gap" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Gap <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span></label>
            <input id="gap" v-model.number="gap" type="number" min="0" max="50" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
          </div>

          <!-- Scale -->
          <div>
            <label for="scale" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Scale</label>
            <input id="scale" v-model.number="scale" type="number" min="0.1" max="10" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
          </div>

          <!-- Blur -->
          <div>
            <label for="blur" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Blur <span class="font-normal text-gray-400 dark:text-zinc-500">(σ)</span></label>
            <input id="blur" v-model.number="blur" type="number" min="0" max="20" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
          </div>

          <!-- Palette -->
          <div>
            <label for="palette" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Palette</label>
            <select id="palette" v-model="palette" :disabled="processing" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500">
              <option value="">None</option>
              <option v-for="p in palettes" :key="p" :value="p">{{ p }}</option>
            </select>
          </div>

          <!-- Dither -->
          <div class="flex items-center pb-0.5" :class="!palette ? 'opacity-40' : ''">
            <label class="flex items-center gap-2 select-none" :class="!palette ? 'cursor-not-allowed' : 'cursor-pointer'">
              <input v-model="dither" type="checkbox" :disabled="processing || !palette" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
              <span class="text-sm text-gray-700 dark:text-zinc-300">Dither</span>
            </label>
          </div>

          <!-- Greyscale -->
          <div class="flex items-center pb-0.5">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input v-model="greyscale" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
              <span class="text-sm text-gray-700 dark:text-zinc-300">Greyscale</span>
            </label>
          </div>

          <!-- Background -->
          <div :class="format !== 'svg' ? 'opacity-40' : ''">
            <label class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Background <span class="font-normal text-gray-400 dark:text-zinc-500">(SVG)</span></label>
            <div class="flex items-center gap-2">
              <input v-model="background" type="color" :disabled="processing || format !== 'svg'" class="w-8 h-8 rounded border border-gray-200 dark:border-zinc-700 disabled:opacity-50" :class="format === 'svg' ? 'cursor-pointer' : 'cursor-not-allowed'" />
              <button v-if="background && format === 'svg'" :disabled="processing" class="text-xs text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="background = ''">Clear</button>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button :disabled="!file || processing" class="w-full bg-violet-500 hover:bg-violet-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="process">
          {{ processing ? 'Pixelating…' : 'Pixelate' }}
        </button>
      </div>

      <!-- Error -->
      <div v-if="error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl p-5 mb-6 font-mono text-sm text-red-600 dark:text-red-400"><span class="text-red-400 dark:text-red-600 select-none">✗ </span>{{ error }}</div>

      <!-- Result (image) -->
      <div v-if="resultUrl" class="flex flex-col items-center gap-5 mb-6">
        <div class="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm dark:shadow-none flex justify-center">
          <img :src="resultUrl" class="max-w-full max-h-96 rounded-lg object-contain" alt="Pixelated result" />
        </div>
        <a :href="resultUrl" :download="resultFilename" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm transition-colors"> ↓ Download {{ resultFilename }} </a>
      </div>

      <!-- Result (ANSI) -->
      <div v-if="ansiText" class="flex flex-col items-center gap-5 mb-6">
        <div class="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-sm overflow-x-auto flex justify-center">
          <!-- eslint-disable-next-line vue/no-v-html -- safe: ansi-to-html output from server-processed image, not user text -->
          <pre class="text-xs font-mono leading-tight whitespace-pre inline-block" v-html="ansiHtml" />
        </div>
        <button class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm transition-colors" @click="downloadAnsi">↓ Download {{ resultFilename }}</button>
      </div>

      <!-- Divider -->
      <div class="mt-24 pt-12 border-t border-gray-200 dark:border-zinc-800">
        <h2 class="text-2xl font-semibold mb-8 text-center">Also available as a CLI</h2>

        <!-- Install + Usage -->
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">npm install -g pixelated</div>
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">pixelated &lt;input&gt; [options]</div>
          </div>
        </div>

        <!-- Options reference -->
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mb-10 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
          <p><span class="text-violet-500 dark:text-violet-400">--pixel</span> <span class="text-gray-400 dark:text-zinc-500">n|nxn</span> Pixel block size (default: 20)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--format</span> <span class="text-gray-400 dark:text-zinc-500">png|jpeg|webp|avif|svg|ansi</span> Output format (default: png)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--palette</span> <span class="text-gray-400 dark:text-zinc-500">gameboy|nes|c64|pico8|…</span> Snap colors to a palette</p>
          <p><span class="text-violet-500 dark:text-violet-400">--dither</span> Floyd–Steinberg dithering (requires --palette)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--greyscale</span> Convert to greyscale</p>
          <p><span class="text-violet-500 dark:text-violet-400">--blur</span> <span class="text-gray-400 dark:text-zinc-500">σ</span> Pre-pixelation blur sigma</p>
          <p><span class="text-violet-500 dark:text-violet-400">--shape</span> <span class="text-gray-400 dark:text-zinc-500">rect|circle|diamond</span> Pixel shape (default: rect)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--gap</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Gap between pixels in px (default: 0)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--scale</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Output scale multiplier (default: 1)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--background</span> <span class="text-gray-400 dark:text-zinc-500">#rrggbb</span> Background fill color (SVG)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--output</span> <span class="text-gray-400 dark:text-zinc-500">path</span> Output file path</p>
        </div>

        <!-- Feature cards -->
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="feature in features" :key="feature.title" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm dark:shadow-none">
            <h3 class="font-semibold mb-1.5">{{ feature.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-400 dark:text-zinc-500 flex-shrink-0">
      Powered by
      <a href="https://infinitetoken.com" target="_blank" rel="noopener" class="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 underline underline-offset-2 ml-1 transition-colors">Infinite Token</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { AnsiUp } from 'ansi_up'

const colorMode = useColorMode()

const cycleColorMode = () => {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (colorMode.preference === 'system') colorMode.preference = systemIsDark ? 'light' : 'dark'
  else if (colorMode.preference === 'dark') colorMode.preference = systemIsDark ? 'system' : 'light'
  else colorMode.preference = systemIsDark ? 'dark' : 'system'
}

const fileInput = ref<HTMLInputElement | null>(null)
const file = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const dragging = ref(false)

const pixelSize = ref(20)
const format = ref<'png' | 'jpeg' | 'webp' | 'avif' | 'svg' | 'ansi'>('png')
const palette = ref('')
const dither = ref(false)
const greyscale = ref(false)
const blur = ref(0)
const shape = ref<'rect' | 'circle' | 'diamond'>('rect')
const gap = ref(0)
const scale = ref(1)
const background = ref('')

const processing = ref(false)
const error = ref<string | null>(null)
const resultUrl = ref<string | null>(null)
const resultFilename = ref('')
const ansiText = ref<string | null>(null)

const ansiUp = new AnsiUp()
const ansiHtml = computed(() => (ansiText.value ? ansiUp.ansi_to_html(ansiText.value) : ''))

const palettes = ['gameboy', 'nes', 'c64', 'pico8', 'cga', 'zxspectrum', 'rainbow', 'mono', 'sepia', 'neon', 'pastel']

const features = [
  {
    title: 'Built-in palettes',
    description: 'Snap colors to classic palettes — Game Boy, NES, PICO-8, C64, CGA, ZX Spectrum, and more.'
  },
  {
    title: 'SVG output',
    description: 'Export as scalable SVG with circle or diamond pixel shapes, gaps, and background fills.'
  },
  {
    title: 'CLI + library',
    description: 'Use from the terminal or import pixelated directly in your Node.js project.'
  }
]

const setFile = (f: File) => {
  if (resultUrl.value) {
    URL.revokeObjectURL(resultUrl.value)
    resultUrl.value = null
    resultFilename.value = ''
  }
  ansiText.value = null
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  file.value = f
  previewUrl.value = URL.createObjectURL(f)
  error.value = null
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

const process = async () => {
  if (!file.value || processing.value) return

  if (resultUrl.value) {
    URL.revokeObjectURL(resultUrl.value)
    resultUrl.value = null
  }
  ansiText.value = null

  processing.value = true
  error.value = null

  const form = new FormData()
  form.append('file', file.value)
  form.append('pixel', String(pixelSize.value))
  form.append('format', format.value)
  if (palette.value) form.append('palette', palette.value)
  form.append('dither', String(dither.value))
  form.append('greyscale', String(greyscale.value))
  if (blur.value > 0) form.append('blur', String(blur.value))
  form.append('shape', shape.value)
  form.append('gap', String(gap.value))
  form.append('scale', String(scale.value))
  if (background.value) form.append('background', background.value)

  try {
    const res = await fetch('/api/pixelate', { method: 'POST', body: form })

    if (!res.ok) {
      const data = (await res.json().catch(() => ({ message: 'Pixelation failed' }))) as { message?: string }
      error.value = data.message ?? 'Pixelation failed'
      return
    }

    const data = (await res.json()) as { data: string; filename: string; mimeType: string }

    resultFilename.value = data.filename

    if (data.mimeType === 'text/plain') {
      ansiText.value = atob(data.data)
    } else {
      const byteStr = atob(data.data)
      const bytes = new Uint8Array(byteStr.length)
      for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
      const blob = new Blob([bytes], { type: data.mimeType })
      resultUrl.value = URL.createObjectURL(blob)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Pixelation failed'
  } finally {
    processing.value = false
  }
}

const downloadAnsi = () => {
  if (!ansiText.value) return
  const blob = new Blob([ansiText.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = resultFilename.value
  a.click()
  URL.revokeObjectURL(url)
}

onUnmounted(() => {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  if (resultUrl.value) URL.revokeObjectURL(resultUrl.value)
})
</script>
