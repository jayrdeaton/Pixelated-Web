<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <!-- Splash screen (iOS PWA) -->
    <div id="splash" style="position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 9999; transition: opacity 0.25s">
      <img src="/icon-180.png" style="width: 80px; height: 80px; border-radius: 18px" alt="" />
    </div>

    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-zinc-800 px-6 pb-4 flex-shrink-0" style="padding-top: calc(1rem + env(safe-area-inset-top))">
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
              <p class="text-sm text-gray-400 dark:text-zinc-500">Drop or paste an image, or <span class="text-violet-500 dark:text-violet-400">click to browse</span></p>
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
            <div class="flex gap-1.5">
              <input id="pixel-size" v-model.number="pixelSize" type="number" min="1" max="200" :disabled="processing || pixelAuto" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
              <button :disabled="processing" :class="pixelAuto ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'" class="px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50" @click="pixelAuto = !pixelAuto">
                Auto<span v-if="pixelAuto && autoPixelResolved" class="ml-1 opacity-70 font-normal">({{ autoPixelResolved }}px)</span>
              </button>
              <input v-if="pixelAuto" v-model.number="autoPixelDensity" type="number" min="1" max="200" title="Density divisor" :disabled="processing" class="w-16 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
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
          <div :class="isAnsi ? 'opacity-40' : ''">
            <label for="shape" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Shape</label>
            <select id="shape" v-model="shape" :disabled="processing || isAnsi" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500 capitalize">
              <optgroup label="Basic">
                <option value="circle">Circle</option>
                <option value="rect">Rect</option>
                <option value="ring">Ring</option>
                <option value="round-rect">Round Rect</option>
              </optgroup>
              <optgroup label="Geometric">
                <option value="diamond">Diamond</option>
                <option value="hexagon">Hexagon</option>
                <option value="pentagon">Pentagon</option>
                <option value="pentagon-alt">Pentagon Alt</option>
                <option value="triangle">Triangle</option>
                <option value="triangle-alt">Triangle Alt</option>
              </optgroup>
              <optgroup label="Stars &amp; Symbols">
                <option value="asterisk">Asterisk</option>
                <option value="cross">Cross</option>
                <option value="cross-alt">Cross Alt</option>
                <option value="hash">Hash</option>
                <option value="heart">Heart</option>
                <option value="heart-alt">Heart Alt</option>
                <option value="star">Star</option>
                <option value="star-alt">Star Alt</option>
                <option value="x">X</option>
              </optgroup>
            </select>
          </div>

          <!-- Palette -->
          <div>
            <label for="palette" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Palette</label>
            <div class="flex items-start gap-2">
              <select id="palette" v-model="palette" :disabled="processing" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500">
                <option value="">None</option>
                <optgroup label="Retro">
                  <option v-for="key in retroPalettes" :key="key" :value="key">{{ paletteLabel(key) }}</option>
                </optgroup>
                <optgroup label="Aesthetic">
                  <option v-for="key in aestheticPalettes" :key="key" :value="key">{{ paletteLabel(key) }}</option>
                </optgroup>
              </select>
              <div v-if="selectedPaletteColors.length" class="flex flex-wrap gap-px pt-1.5 max-w-32">
                <div v-for="color in selectedPaletteColors" :key="color" class="w-3 h-3 rounded-sm" :style="{ backgroundColor: color }" :title="color" />
              </div>
            </div>
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

          <!-- Invert -->
          <div class="flex items-center pb-0.5">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input v-model="invert" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
              <span class="text-sm text-gray-700 dark:text-zinc-300">Invert</span>
            </label>
          </div>

          <!-- Adjustments toggle -->
          <div class="w-full flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-zinc-800">
            <button :disabled="processing" class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors" @click="showAdjustments = !showAdjustments">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" :class="showAdjustments ? 'rotate-180' : ''">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              Adjustments
            </button>
            <span v-if="activeAdjustmentCount > 0" class="text-xs bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded-full font-medium">{{ activeAdjustmentCount }}</span>
          </div>

          <!-- Adjustments panel -->
          <div v-show="showAdjustments" class="w-full flex flex-wrap gap-5 items-end">
            <div>
              <label for="scale" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Scale</label>
              <input id="scale" v-model.number="scale" type="number" min="0.1" max="10" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="isAnsi ? 'opacity-40' : ''">
              <label for="gap" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Gap <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span></label>
              <input id="gap" v-model.number="gap" type="number" min="0" max="50" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="blur" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Blur</label>
              <input id="blur" v-model.number="blur" type="number" min="0" max="20" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="brightness" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Brightness</label>
              <input id="brightness" v-model.number="brightness" type="number" min="0.1" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="contrast" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Contrast</label>
              <input id="contrast" v-model.number="contrast" type="number" min="0" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="saturation" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Saturation</label>
              <input id="saturation" v-model.number="saturation" type="number" min="0" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="hue" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Hue <span class="font-normal text-gray-400 dark:text-zinc-500">(°)</span></label>
              <input id="hue" v-model.number="hue" type="number" min="-180" max="180" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="noise" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Noise</label>
              <input id="noise" v-model.number="noise" type="number" min="0" max="100" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="noise === 0 ? 'opacity-40' : ''">
              <label for="seed" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Seed</label>
              <input id="seed" v-model="seed" type="number" min="0" placeholder="Random" :disabled="processing || noise === 0" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="color-count" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Colors</label>
              <input id="color-count" v-model="colorCount" type="number" min="1" max="256" placeholder="All" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="isAnsi ? 'opacity-40' : ''">
              <label for="scanlines" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Scanlines</label>
              <input id="scanlines" v-model.number="scanlines" type="number" min="0" max="20" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="!hasBackground ? 'opacity-40' : ''">
              <label class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Background</label>
              <div class="flex items-center gap-2">
                <input v-model="background" type="color" :disabled="processing || !hasBackground" class="w-8 h-8 rounded border border-gray-200 dark:border-zinc-700 disabled:opacity-50" :class="hasBackground ? 'cursor-pointer' : 'cursor-not-allowed'" />
                <button v-if="background && hasBackground" :disabled="processing" class="text-xs text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="background = ''">Clear</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button :disabled="!file || processing" class="w-full bg-violet-500 hover:bg-violet-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="process">
          {{ processing ? 'Pixelating…' : 'Pixelate' }}
        </button>
        <div v-if="file" class="flex justify-center gap-5 mt-3">
          <button :disabled="processing" class="text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors disabled:opacity-50 py-1" @click="resetOptions">Reset options</button>
          <button :disabled="processing" class="text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors disabled:opacity-50 py-1" @click="clearAll">Clear</button>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl p-5 mb-6 font-mono text-sm text-red-600 dark:text-red-400"><span class="text-red-400 dark:text-red-600 select-none">✗ </span>{{ error }}</div>

      <!-- Result (image) -->
      <div v-if="activeItem?.url" class="flex flex-col items-center gap-5 mb-6">
        <div class="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm dark:shadow-none flex justify-center">
          <img :src="activeItem.url" class="max-w-full max-h-96 rounded-lg object-contain" alt="Pixelated result" />
        </div>
        <a :href="activeItem.url" :download="activeItem.filename" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm transition-colors"> ↓ Download {{ activeItem.filename }} </a>
      </div>

      <!-- Result (ANSI) -->
      <div v-if="activeItem?.ansiText" class="flex flex-col items-center gap-5 mb-6">
        <div class="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-sm overflow-x-auto flex justify-center">
          <!-- eslint-disable-next-line vue/no-v-html -- safe: ansi-to-html output from server-processed image, not user text -->
          <pre class="text-xs font-mono leading-tight whitespace-pre inline-block" v-html="ansiHtml" />
        </div>
        <div class="flex gap-3">
          <button class="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold rounded-lg px-5 py-3 text-sm transition-colors" @click="copyAnsi">{{ ansiCopied ? '✓ Copied' : 'Copy' }}</button>
          <button class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm transition-colors" @click="downloadAnsi">↓ Download {{ activeItem.filename }}</button>
        </div>
      </div>

      <!-- History -->
      <div v-if="history.length > 0" class="w-full mb-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-medium text-gray-500 dark:text-zinc-400">History</h3>
          <button class="text-xs text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="clearHistory">Clear</button>
        </div>
        <div class="flex gap-3 overflow-x-auto pb-2">
          <div v-for="(item, i) in history" :key="i" class="flex-shrink-0 bg-white dark:bg-zinc-900 border rounded-xl p-3 flex flex-col items-center gap-2 w-36 shadow-sm dark:shadow-none cursor-pointer transition-colors" :class="activeItem === item ? 'border-violet-500' : 'border-gray-200 dark:border-zinc-800 hover:border-violet-400 dark:hover:border-violet-600'" @click="loadHistoryItem(item)">
            <div class="w-28 h-28 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 dark:bg-zinc-800">
              <img v-if="item.url" :src="item.url" class="max-w-full max-h-full object-contain" alt="" />
              <span v-else class="text-xs font-mono text-emerald-400">ANSI</span>
            </div>
            <p class="text-xs text-gray-400 dark:text-zinc-500 text-center leading-tight w-full truncate">{{ item.label }}</p>
            <a v-if="item.url" :href="item.url" :download="item.filename" class="text-xs text-violet-500 hover:text-violet-400 transition-colors" @click.stop>↓ Download</a>
            <button v-else class="text-xs text-violet-500 hover:text-violet-400 transition-colors" @click.stop="downloadHistoryAnsi(item)">↓ Download</button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div v-if="!isPwa" class="mt-24 pt-12 border-t border-gray-200 dark:border-zinc-800">
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
          <p><span class="text-violet-500 dark:text-violet-400">--pixel</span> <span class="text-gray-400 dark:text-zinc-500">n|nxn|auto</span> Pixel block size (default: 20)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--autoPixelDensity</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Divisor for auto pixel size (default: 50)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--format</span> <span class="text-gray-400 dark:text-zinc-500">png|jpeg|webp|avif|svg|ansi</span> Output format (default: png)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--palette</span> <span class="text-gray-400 dark:text-zinc-500">gb|nes|pico8|dracula|nord|…</span> Snap colors to a palette</p>
          <p><span class="text-violet-500 dark:text-violet-400">--dither</span> Floyd–Steinberg dithering (requires --palette)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--greyscale</span> Convert to greyscale</p>
          <p><span class="text-violet-500 dark:text-violet-400">--invert</span> Invert colors</p>
          <p><span class="text-violet-500 dark:text-violet-400">--blur</span> <span class="text-gray-400 dark:text-zinc-500">σ</span> Pre-pixelation blur sigma</p>
          <p><span class="text-violet-500 dark:text-violet-400">--brightness</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Brightness multiplier (default: 1)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--contrast</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Contrast multiplier (default: 1)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--saturation</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Saturation multiplier (default: 1)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--hue</span> <span class="text-gray-400 dark:text-zinc-500">°</span> Hue rotation in degrees (default: 0)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--noise</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Random color noise amount</p>
          <p><span class="text-violet-500 dark:text-violet-400">--colorCount</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Quantize output to n colors</p>
          <p><span class="text-violet-500 dark:text-violet-400">--shape</span> <span class="text-gray-400 dark:text-zinc-500 break-all">rect|round-rect|circle|ring|diamond|triangle|triangle-alt|hexagon|pentagon|pentagon-alt|star|star-alt|cross|cross-alt|x|asterisk|hash|heart|heart-alt</span> Pixel shape (default: rect)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--gap</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Gap between pixels in px (default: 0)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--scale</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Output scale multiplier (default: 1)</p>
          <p><span class="text-violet-500 dark:text-violet-400">--scanlines</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Scanline gap height in px</p>
          <p><span class="text-violet-500 dark:text-violet-400">--background</span> <span class="text-gray-400 dark:text-zinc-500">#rrggbb</span> Background fill color</p>
          <p><span class="text-violet-500 dark:text-violet-400">--seed</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Seed for deterministic noise</p>
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
    <footer class="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-400 dark:text-zinc-500 flex-shrink-0 space-y-1.5">
      <p>Images are processed server-side and deleted immediately — nothing is stored.</p>
      <p>Powered by <a href="https://infinitetoken.com" target="_blank" rel="noopener" class="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 underline underline-offset-2 transition-colors">Infinite Token</a></p>
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
const noise = ref(0)
const colorCount = ref('')
const shape = ref<'rect' | 'round-rect' | 'circle' | 'ring' | 'diamond' | 'triangle' | 'triangle-alt' | 'hexagon' | 'pentagon' | 'pentagon-alt' | 'star' | 'star-alt' | 'cross' | 'cross-alt' | 'x' | 'asterisk' | 'hash' | 'heart' | 'heart-alt'>('rect')
const gap = ref(0)
const scale = ref(1)
const scanlines = ref(0)
const seed = ref('')
const background = ref('')

const processing = ref(false)
const isPwa = ref(false)
const error = ref<string | null>(null)

const ansiUp = new AnsiUp()
const ansiHtml = computed(() => (activeItem.value?.ansiText ? ansiUp.ansi_to_html(activeItem.value.ansiText) : ''))
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
  if (scale.value !== 1) n++
  if (gap.value > 0) n++
  if (blur.value > 0) n++
  if (brightness.value !== 1) n++
  if (contrast.value !== 1) n++
  if (saturation.value !== 1) n++
  if (hue.value !== 0) n++
  if (noise.value > 0) n++
  if (colorCount.value !== '') n++
  if (scanlines.value > 0) n++
  if (background.value && hasBackground.value) n++
  return n
})

type HistoryItem = { url: string | null; ansiText: string | null; filename: string; label: string }
const history = ref<HistoryItem[]>([])
const activeItem = ref<HistoryItem | null>(null)

const clearHistory = () => {
  for (const item of history.value) {
    if (item.url) URL.revokeObjectURL(item.url)
  }
  history.value = []
  activeItem.value = null
}

const clearAll = () => {
  clearHistory()
  error.value = null
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = null
  file.value = null
  if (fileInput.value) fileInput.value.value = ''
}

const resetOptions = () => {
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
  noise.value = 0
  colorCount.value = ''
  shape.value = 'rect'
  gap.value = 0
  scale.value = 1
  scanlines.value = 0
  seed.value = ''
  background.value = ''
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

const { data: allPalettes } = useFetch<Record<string, string[]>>('/api/palettes')

const retroKeys = ['amiga', 'amstrad', 'apple2', 'atari', 'c64', 'cga', 'ega', 'gb', 'gba', 'gbc', 'gbp', 'gg', 'genesis', 'sms', 'msx', 'n64', 'neogeo', 'nes', 'pico8', 'ps1', 'snes', 'tg16', 'vb', 'zxspectrum']
const aestheticKeys = ['amber', 'dracula', 'forest', 'lava', 'mono', 'monokai', 'neon', 'nord', 'ocean', 'pastel', 'rainbow', 'sakura', 'sepia', 'solarized', 'sunset', 'terminal', 'vaporwave']

const retroPalettes = computed(() => retroKeys.filter((k) => allPalettes.value?.[k]))
const aestheticPalettes = computed(() => aestheticKeys.filter((k) => allPalettes.value?.[k]))
const selectedPaletteColors = computed(() => (palette.value && allPalettes.value ? (allPalettes.value[palette.value] ?? []) : []))

const paletteLabels: Record<string, string> = {
  gb: 'Game Boy',
  gbp: 'Game Boy Pocket',
  gbc: 'Game Boy Color',
  gba: 'Game Boy Advance',
  vb: 'Virtual Boy',
  nes: 'NES',
  snes: 'SNES',
  n64: 'N64',
  genesis: 'Genesis',
  gg: 'Game Gear',
  tg16: 'TurboGrafx-16',
  neogeo: 'Neo Geo',
  msx: 'MSX',
  atari: 'Atari',
  c64: 'C64',
  pico8: 'PICO-8',
  cga: 'CGA',
  ega: 'EGA',
  zxspectrum: 'ZX Spectrum',
  amstrad: 'Amstrad',
  amiga: 'Amiga',
  apple2: 'Apple II',
  ps1: 'PS1',
  sms: 'Master System',
  rainbow: 'Rainbow',
  mono: 'Mono',
  sepia: 'Sepia',
  neon: 'Neon',
  pastel: 'Pastel',
  amber: 'Amber',
  dracula: 'Dracula',
  nord: 'Nord',
  solarized: 'Solarized',
  monokai: 'Monokai',
  sunset: 'Sunset',
  forest: 'Forest',
  ocean: 'Ocean',
  lava: 'Lava',
  sakura: 'Sakura',
  vaporwave: 'Vaporwave',
  terminal: 'Terminal'
}
const paletteLabel = (key: string) => paletteLabels[key] ?? key

const features = [
  {
    title: 'Shapes & effects',
    description: 'Nineteen pixel shapes — rect, circle, star, heart, hexagon, and more. Add gaps, scanlines, and scale to any size.'
  },
  {
    title: 'Color tools',
    description: 'Palettes, dithering, greyscale, invert, brightness, contrast, saturation, hue, noise, and color quantization.'
  },
  {
    title: 'CLI + library',
    description: 'Use from the terminal or import pixelated directly in your Node.js project. PNG, JPEG, WebP, AVIF, SVG, and ANSI output.'
  }
]

const setFile = (f: File) => {
  clearHistory()
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
  if (noise.value > 0) form.append('noise', String(noise.value))
  if (colorCount.value !== '') form.append('colorCount', colorCount.value)
  form.append('shape', shape.value)
  form.append('gap', String(gap.value))
  form.append('scale', String(scale.value))
  if (scanlines.value > 0) form.append('scanlines', String(scanlines.value))
  if (seed.value !== '') form.append('seed', seed.value)
  if (background.value && hasBackground.value) form.append('background', background.value)

  try {
    const res = await fetch('/api/pixelate', { method: 'POST', body: form })

    if (!res.ok) {
      const data = (await res.json().catch(() => ({ message: 'Pixelation failed' }))) as { message?: string }
      error.value = data.message ?? 'Pixelation failed'
      return
    }

    const data = (await res.json()) as { data: string; filename: string; mimeType: string }

    const label = `${pixelSize.value}px · ${format.value.toUpperCase()}${palette.value ? ' · ' + palette.value : ''}`
    let url: string | null = null
    let ansi: string | null = null

    if (data.mimeType === 'text/plain') {
      ansi = atob(data.data)
    } else {
      const byteStr = atob(data.data)
      const bytes = new Uint8Array(byteStr.length)
      for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
      url = URL.createObjectURL(new Blob([bytes], { type: data.mimeType }))
    }

    const item: HistoryItem = { url, ansiText: ansi, filename: data.filename, label }
    history.value.unshift(item)
    activeItem.value = item
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Pixelation failed'
  } finally {
    processing.value = false
  }
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

const ansiCopied = ref(false)
const copyAnsi = async () => {
  if (!activeItem.value?.ansiText) return
  await navigator.clipboard.writeText(activeItem.value.ansiText)
  ansiCopied.value = true
  setTimeout(() => (ansiCopied.value = false), 2000)
}

const loadHistoryItem = (item: HistoryItem) => {
  activeItem.value = item
}

const handlePaste = (e: ClipboardEvent) => {
  const item = Array.from(e.clipboardData?.items ?? []).find((i) => i.type.startsWith('image/'))
  if (!item) return
  const f = item.getAsFile()
  if (f) setFile(f)
}

onMounted(() => {
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
</script>
