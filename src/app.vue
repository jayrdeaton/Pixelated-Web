<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <!-- Splash screen (iOS PWA) -->
    <div id="splash" style="position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 9999; transition: opacity 0.25s">
      <img src="/icon-180.png" style="width: 80px; height: 80px; border-radius: 18px" alt="" />
    </div>

    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-zinc-800 px-6 pb-4 flex-shrink-0" style="padding-top: calc(1rem + env(safe-area-inset-top))">
      <div class="max-w-3xl lg:max-w-5xl mx-auto flex items-center justify-between">
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
    <main class="flex-1 max-w-3xl lg:max-w-5xl mx-auto w-full px-6 py-14">
      <!-- Hero -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Pixelate your images.</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Upload an image, choose your settings, and download your pixelated image in seconds.</p>
      </div>

      <!-- Two-column layout: settings left, result right on md+ -->
      <div class="md:grid md:grid-cols-2 md:gap-6 md:items-start mb-6">

        <!-- Left: settings -->
        <div class="mb-6 md:mb-0">

        <!-- Upload + Options card -->
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm dark:shadow-none">
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

        <!-- Presets -->
        <div class="mb-5">
          <div class="flex items-center gap-3 mb-2">
            <label class="text-sm font-medium text-gray-500 dark:text-zinc-400">Style</label>
            <div class="flex gap-1">
              <button v-for="cat in presetCategories" :key="cat.key" :class="presetCategory === cat.key ? categoryStyle[cat.key].tabActive : 'text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300'" class="text-xs font-medium px-2 py-0.5 rounded transition-colors" @click="presetCategory = cat.key">
                {{ cat.label }}
              </button>
            </div>
            <button v-if="presetCategory === 'retro'" class="ml-auto text-xs font-medium text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="showAllRetro = !showAllRetro">
              {{ showAllRetro ? '− less' : '+ more' }}
            </button>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <button v-for="preset in filteredPresets" :key="preset.label" :class="activePreset === preset.label ? (presetGradients[preset.label] ? 'text-white shadow-[3px_3px_0_rgba(0,0,0,0.35)] [text-shadow:0_1px_3px_rgba(0,0,0,0.65)]' : categoryStyle[presetCategory].active) : categoryStyle[presetCategory].inactive" :style="activePreset === preset.label && presetGradients[preset.label] ? { background: presetGradients[preset.label] } : undefined" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-[box-shadow,transform,color] duration-75" @click="applyPreset(preset)">
              <component v-if="preset.icon" :is="preset.icon" :size="11" class="shrink-0" />{{ preset.label }}
            </button>
          </div>
        </div>

        <!-- Mood -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Mood</label>
          <div class="flex flex-wrap gap-1.5">
            <button v-for="mood in moods" :key="mood.label" :class="activeMood === mood.label ? (moodActiveClass[mood.label] ?? 'bg-violet-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]') : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 shadow-[2px_2px_0_rgba(0,0,0,0.12)]'" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-[box-shadow,transform,background-color,color] duration-75" @click="applyMood(mood)">
              <component :is="mood.icon" :size="11" class="shrink-0" />{{ mood.label }}
            </button>
          </div>
        </div>

        <!-- Options -->
        <div class="flex flex-wrap gap-5 mb-6 items-start">
          <!-- Pixel + Format -->
          <div class="w-full">
            <div class="flex items-center mb-1.5">
              <span class="text-sm font-medium text-gray-500 dark:text-zinc-400">Pixel</span>
              <span class="text-sm font-medium text-gray-500 dark:text-zinc-400 ml-auto">Output</span>
            </div>
            <div class="flex gap-3 items-start">
              <div class="inline-flex items-stretch bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <button :disabled="processing" :class="pixelAuto ? 'bg-violet-500 text-white' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200'" class="px-3 py-2 text-sm font-medium transition-colors disabled:opacity-50 shrink-0" @click="pixelAuto = !pixelAuto">
                  Auto<span v-if="pixelAuto && autoPixelResolved" class="ml-1 opacity-70 font-normal">({{ autoPixelResolved }}px)</span>
                </button>
                <div class="w-px bg-gray-200 dark:bg-zinc-700 shrink-0" />
                <template v-if="pixelAuto">
                  <span class="flex items-center pl-3 text-sm text-gray-400 dark:text-zinc-500 select-none">÷</span>
                  <input v-model.number="autoPixelDensity" type="number" min="1" max="200" :disabled="processing" class="w-14 bg-transparent px-2 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none" />
                </template>
                <input v-else id="pixel-size" v-model.number="pixelSize" type="number" min="1" max="200" :disabled="processing" class="w-16 bg-transparent px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none" />
              </div>
              <select id="shape" v-model="shape" :disabled="processing || isAnsi" :class="isAnsi ? 'opacity-40' : ''" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500 capitalize">
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
              <div class="ml-auto flex gap-2 items-start">
                <select id="format" v-model="format" :disabled="processing" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500 uppercase">
                  <option value="png">PNG</option>
                  <option value="jpeg">JPEG</option>
                  <option value="webp">WebP</option>
                  <option value="avif">AVIF</option>
                  <option value="svg">SVG</option>
                  <option value="ansi">ANSI</option>
                </select>
                <div class="flex items-center gap-1.5" :class="!hasBackground ? 'opacity-40' : ''">
                  <input v-model="background" type="color" :disabled="processing || !hasBackground" class="w-8 h-8 rounded border border-gray-200 dark:border-zinc-700 disabled:opacity-50" :class="hasBackground ? 'cursor-pointer' : 'cursor-not-allowed'" />
                  <span class="text-xs text-gray-400 dark:text-zinc-500">bg</span>
                  <button v-if="background && hasBackground" :disabled="processing" class="text-xs text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="background = ''">✕</button>
                </div>
              </div>
            </div>
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
            <!-- Color -->
            <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Color</span>
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
              <label for="color-count" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Max colors</label>
              <input id="color-count" v-model="colorCount" type="number" min="1" max="256" placeholder="All" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="greyscale" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Greyscale</span>
              </label>
            </div>
            <div class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="invert" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Invert</span>
              </label>
            </div>

            <!-- Effects -->
            <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Effects</span>
            <div>
              <label for="blur" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Blur</label>
              <input id="blur" v-model.number="blur" type="number" min="0" max="20" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label for="noise" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Noise</label>
              <input id="noise" v-model.number="noise" type="number" min="0" max="100" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="noise === 0 ? 'opacity-40' : ''">
              <label for="seed" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Seed</label>
              <input id="seed" v-model="seed" type="number" min="0" placeholder="Random" :disabled="processing || noise === 0" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div class="flex items-center pb-0.5" :class="!palette ? 'opacity-40' : ''">
              <label class="flex items-center gap-2 select-none" :class="!palette ? 'cursor-not-allowed' : 'cursor-pointer'">
                <input v-model="dither" type="checkbox" :disabled="processing || !palette" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Dither</span>
              </label>
            </div>

            <!-- Rendering -->
            <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Rendering</span>
            <div>
              <label for="scale" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Scale</label>
              <input id="scale" v-model.number="scale" type="number" min="0.1" max="10" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="isAnsi ? 'opacity-40' : ''">
              <label for="gap" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Gap <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span></label>
              <input id="gap" v-model.number="gap" type="number" min="0" max="50" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
            <div :class="isAnsi ? 'opacity-40' : ''">
              <label for="scanlines" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Scanlines</label>
              <input id="scanlines" v-model.number="scanlines" type="number" min="0" max="20" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button :disabled="!file || processing" class="w-full bg-violet-500 hover:bg-violet-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm shadow-[4px_4px_0_rgba(0,0,0,0.25)] disabled:shadow-none active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[box-shadow,transform,background-color] duration-75" @click="process">
          {{ processing ? 'Pixelating…' : 'Pixelate' }}
        </button>
        <div class="flex justify-center gap-5 mt-3">
          <button :disabled="processing" class="text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors disabled:opacity-50 py-1" @click="resetOptions">Reset</button>
        </div>
      </div>

        </div><!-- end left col -->

        <!-- Right: result -->
        <div ref="resultEl" class="md:sticky md:top-6 flex flex-col gap-4">

      <!-- Error -->
      <div v-if="error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl p-5 font-mono text-sm text-red-600 dark:text-red-400"><span class="text-red-400 dark:text-red-600 select-none">✗ </span>{{ error }}</div>

      <!-- Result (image) -->
      <div v-if="activeItem?.url || (processing && format !== 'ansi')" class="flex flex-col items-center gap-4">
        <div class="relative w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm dark:shadow-none flex justify-center min-h-32 items-center">
          <img v-if="activeItem?.url" :src="activeItem.url" class="max-w-full max-h-96 rounded-lg object-contain transition-opacity" :class="processing ? 'opacity-30' : ''" alt="Pixelated result" />
          <div v-if="processing" class="absolute inset-0 flex items-center justify-center">
            <div class="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
        <a v-if="activeItem?.url" :href="activeItem.url" :download="activeItem.filename" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm shadow-[4px_4px_0_rgba(0,0,0,0.25)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[box-shadow,transform,background-color] duration-75"> ↓ Download {{ activeItem.filename }} </a>
      </div>

      <!-- Result (ANSI) -->
      <div v-if="activeItem?.ansiText || (processing && format === 'ansi')" class="flex flex-col items-center gap-4">
        <div class="relative w-full">
          <div ref="ansiContainerEl" class="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-sm overflow-auto max-h-96 min-h-32 transition-opacity" :class="processing ? 'opacity-30' : ''">
            <!-- eslint-disable-next-line vue/no-v-html -- safe: ansi-to-html output from server-processed image, not user text -->
            <pre v-if="activeItem?.ansiText" ref="ansiPreEl" :style="{ zoom: ansiScale }" class="text-xs font-mono leading-none whitespace-pre inline-block" v-html="ansiHtml" />
          </div>
          <div v-if="processing" class="absolute inset-0 flex items-center justify-center">
            <div class="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
        <div v-if="activeItem?.ansiText" class="flex gap-3">
          <button class="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold rounded-lg px-5 py-3 text-sm shadow-[4px_4px_0_rgba(0,0,0,0.25)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[box-shadow,transform,background-color] duration-75" @click="copyAnsi">{{ ansiCopied ? '✓ Copied' : 'Copy' }}</button>
          <button class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm shadow-[4px_4px_0_rgba(0,0,0,0.25)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[box-shadow,transform,background-color] duration-75" @click="downloadAnsi">↓ Download {{ activeItem.filename }}</button>
        </div>
      </div>

      <!-- Placeholder (md+ only) -->
      <div v-if="!activeItem && !error && !processing" class="hidden md:flex border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl min-h-48 items-center justify-center">
        <p class="text-sm text-gray-300 dark:text-zinc-600 text-center px-6">{{ file ? 'Choose a preset or press Pixelate' : 'Upload an image to get started' }}</p>
      </div>

        </div><!-- end right col -->
      </div><!-- end grid -->

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
import type { Component } from 'vue'
import { Sparkles, Cloud, Contrast, Feather, Moon, Sun, Snowflake, Film, Star, Droplets, Square, Circle, LayoutGrid, Hash, Hexagon, Diamond, Droplet, Zap, Monitor, Gamepad2, Smartphone, Joystick, Glasses, Terminal as TerminalIcon, Code } from 'lucide-vue-next'

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
const abortController = ref<AbortController | null>(null)
const isPwa = ref(false)
const error = ref<string | null>(null)

const activePreset = ref('')

type PresetCategory = 'retro' | 'aesthetic' | 'effects'

type PresetDef = {
  label: string
  category: PresetCategory
  icon?: Component
  pixel?: number
  pixelAuto?: boolean
  autoPixelDensity?: number
  shape?: typeof shape.value
  palette?: string
  dither?: boolean
  greyscale?: boolean
  invert?: boolean
  gap?: number
  contrast?: number
  brightness?: number
  saturation?: number
  hue?: number
  noise?: number
  scanlines?: number
  blur?: number
}

const presets: PresetDef[] = [
  // Retro (main)
  { label: 'Game Boy', category: 'retro', icon: Smartphone, pixelAuto: true, autoPixelDensity: 20, shape: 'rect', palette: 'gb', greyscale: true, dither: true },
  { label: 'Game Boy Color', category: 'retro', icon: Smartphone, pixelAuto: true, autoPixelDensity: 22, shape: 'rect', palette: 'gbc' },
  { label: 'NES', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 30, shape: 'rect', palette: 'nes' },
  { label: 'SNES', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 35, shape: 'rect', palette: 'snes' },
  { label: 'N64', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 40, shape: 'rect', palette: 'n64' },
  { label: 'Genesis', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 38, shape: 'rect', palette: 'genesis' },
  { label: 'Atari', category: 'retro', icon: Joystick, pixelAuto: true, autoPixelDensity: 18, shape: 'rect', palette: 'atari' },
  { label: 'C64', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 28, shape: 'rect', palette: 'c64' },
  { label: 'PICO-8', category: 'retro', icon: Code, pixelAuto: true, autoPixelDensity: 16, shape: 'rect', palette: 'pico8' },
  { label: 'CGA', category: 'retro', icon: Monitor, pixelAuto: true, autoPixelDensity: 32, shape: 'rect', palette: 'cga' },
  // Retro (extended)
  { label: 'Game Boy Pocket', category: 'retro', icon: Smartphone, pixelAuto: true, autoPixelDensity: 20, shape: 'rect', palette: 'gbp', greyscale: true, dither: true },
  { label: 'Game Boy Advance', category: 'retro', icon: Smartphone, pixelAuto: true, autoPixelDensity: 24, shape: 'rect', palette: 'gba' },
  { label: 'Virtual Boy', category: 'retro', icon: Glasses, pixelAuto: true, autoPixelDensity: 38, shape: 'rect', palette: 'vb', greyscale: true },
  { label: 'Master System', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 30, shape: 'rect', palette: 'sms' },
  { label: 'Game Gear', category: 'retro', icon: Smartphone, pixelAuto: true, autoPixelDensity: 20, shape: 'rect', palette: 'gg' },
  { label: 'TurboGrafx-16', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 35, shape: 'rect', palette: 'tg16' },
  { label: 'Neo Geo', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 38, shape: 'rect', palette: 'neogeo' },
  { label: 'PS1', category: 'retro', icon: Gamepad2, pixelAuto: true, autoPixelDensity: 40, shape: 'rect', palette: 'ps1' },
  { label: 'MSX', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 28, shape: 'rect', palette: 'msx' },
  { label: 'ZX Spectrum', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 28, shape: 'rect', palette: 'zxspectrum' },
  { label: 'Amstrad', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 30, shape: 'rect', palette: 'amstrad' },
  { label: 'Amiga', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 36, shape: 'rect', palette: 'amiga' },
  { label: 'Apple II', category: 'retro', icon: TerminalIcon, pixelAuto: true, autoPixelDensity: 26, shape: 'rect', palette: 'apple2' },
  { label: 'EGA', category: 'retro', icon: Monitor, pixelAuto: true, autoPixelDensity: 32, shape: 'rect', palette: 'ega' },
  // Aesthetic
  { label: 'Vaporwave', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'vaporwave', gap: 1 },
  { label: 'Noir', category: 'aesthetic', pixelAuto: true, shape: 'rect', greyscale: true, contrast: 1.3, brightness: 0.85 },
  { label: 'Sepia', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'sepia' },
  { label: 'Neon', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'neon' },
  { label: 'Pastel', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'pastel', gap: 1 },
  { label: 'Ocean', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'ocean' },
  { label: 'Sunset', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'sunset' },
  { label: 'Dracula', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'dracula' },
  { label: 'Nord', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'nord' },
  { label: 'Terminal', category: 'aesthetic', pixel: 4, shape: 'rect', palette: 'terminal', scanlines: 1 },
  { label: 'Amber', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'amber', greyscale: true },
  { label: 'Forest', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'forest' },
  { label: 'Lava', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'lava' },
  { label: 'Sakura', category: 'aesthetic', pixelAuto: true, shape: 'circle', palette: 'sakura', gap: 1 },
  { label: 'Rainbow', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'rainbow' },
  { label: 'Mono', category: 'aesthetic', pixelAuto: true, shape: 'rect', palette: 'mono', greyscale: true },
  // Effects
  { label: 'Pixel Art', category: 'effects', icon: Square, pixel: 16, shape: 'rect' },
  { label: 'Halftone', category: 'effects', icon: Circle, pixelAuto: true, shape: 'circle', gap: 2 },
  { label: 'Mosaic', category: 'effects', icon: LayoutGrid, pixel: 20, shape: 'round-rect', gap: 3 },
  { label: 'Cross-Stitch', category: 'effects', icon: Hash, pixel: 12, shape: 'cross-alt', gap: 2 },
  { label: 'Honeycomb', category: 'effects', icon: Hexagon, pixelAuto: true, shape: 'hexagon', gap: 2 },
  { label: 'Diamond', category: 'effects', icon: Diamond, pixelAuto: true, shape: 'diamond', gap: 2 },
  { label: 'Watercolor', category: 'effects', icon: Droplet, pixelAuto: true, shape: 'rect', palette: 'pastel', blur: 2 },
  { label: 'Glitch', category: 'effects', icon: Zap, pixelAuto: true, shape: 'rect', noise: 25, contrast: 1.1 },
  { label: 'Retro CRT', category: 'effects', icon: Monitor, pixel: 4, shape: 'rect', palette: 'nes', scanlines: 2, contrast: 1.2 },
]

const presetCategories: { key: PresetCategory; label: string }[] = [
  { key: 'retro', label: 'Retro' },
  { key: 'aesthetic', label: 'Aesthetic' },
  { key: 'effects', label: 'Effects' },
]
const presetCategory = ref<PresetCategory>('retro')
const showAllRetro = ref(false)

const mainRetroLabels = new Set(['Game Boy', 'Game Boy Color', 'NES', 'SNES', 'N64', 'Genesis', 'Atari', 'C64', 'PICO-8', 'CGA'])

const filteredPresets = computed(() => {
  const all = presets.filter((p) => p.category === presetCategory.value)
  if (presetCategory.value === 'retro' && !showAllRetro.value) {
    return all.filter((p) => mainRetroLabels.has(p.label))
  }
  return all
})

type MoodDef = {
  label: string
  icon: Component
  brightness?: number
  contrast?: number
  saturation?: number
  hue?: number
}

const moods: MoodDef[] = [
  { label: 'Vivid', icon: Sparkles, saturation: 1.4, contrast: 1.15 },
  { label: 'Faded', icon: Cloud, saturation: 0.5, brightness: 1.05, contrast: 0.85 },
  { label: 'High Contrast', icon: Contrast, contrast: 1.6, brightness: 0.95 },
  { label: 'Muted', icon: Feather, saturation: 0.7, contrast: 0.9 },
  { label: 'Dark', icon: Moon, brightness: 0.7, contrast: 1.2 },
  { label: 'Warm', icon: Sun, hue: -15, saturation: 1.1 },
  { label: 'Cool', icon: Snowflake, hue: 15, saturation: 1.05 },
  { label: 'Cinematic', icon: Film, contrast: 1.3, saturation: 0.85, brightness: 0.9 },
  { label: 'Dreamy', icon: Star, brightness: 1.15, contrast: 0.8, saturation: 0.8 },
  { label: 'Washed', icon: Droplets, brightness: 1.2, contrast: 0.7, saturation: 0.5 },
]

const activeMood = ref('')

const categoryStyle: Record<PresetCategory, { active: string; inactive: string; tabActive: string }> = {
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

const moodActiveClass: Record<string, string> = {
  'Vivid': 'bg-pink-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Faded': 'bg-slate-400 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'High Contrast': 'bg-red-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Muted': 'bg-purple-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Dark': 'bg-indigo-700 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Warm': 'bg-orange-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Cool': 'bg-cyan-400 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Cinematic': 'bg-rose-700 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Dreamy': 'bg-pink-300 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]',
  'Washed': 'bg-sky-300 text-zinc-900 shadow-[3px_3px_0_rgba(0,0,0,0.25)]'
}

let autoProcessTimer: ReturnType<typeof setTimeout> | null = null
const triggerAutoProcess = () => {
  if (!file.value) return
  if (autoProcessTimer) clearTimeout(autoProcessTimer)
  autoProcessTimer = setTimeout(() => {
    autoProcessTimer = null
    process()
  }, 350)
}

watch(
  [pixelSize, pixelAuto, autoPixelDensity, format, palette, dither, greyscale, invert, blur, brightness, contrast, saturation, hue, noise, colorCount, shape, gap, scale, scanlines, seed, background],
  () => { triggerAutoProcess() }
)

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
  const prevMood = activeMood.value ? moods.find(m => m.label === activeMood.value) : null
  const prevShowAdj = showAdjustments.value
  resetOptions()
  showAdjustments.value = prevShowAdj
  activePreset.value = preset.label
  if (preset.pixel !== undefined) pixelSize.value = preset.pixel
  if (preset.pixelAuto !== undefined) pixelAuto.value = preset.pixelAuto
  if (preset.autoPixelDensity !== undefined) autoPixelDensity.value = preset.autoPixelDensity
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

type HistoryItem = { url: string | null; ansiText: string | null; filename: string; label: string }
const history = ref<HistoryItem[]>([])
const activeItem = ref<HistoryItem | null>(null)

const ansiUp = new AnsiUp()
const ansiHtml = computed(() => (activeItem.value?.ansiText ? ansiUp.ansi_to_html(activeItem.value.ansiText) : ''))

const ansiPreEl = ref<HTMLElement | null>(null)
const ansiContainerEl = ref<HTMLElement | null>(null)
const resultEl = ref<HTMLElement | null>(null)
const ansiScale = ref(1)

watch(() => activeItem.value?.ansiText, async () => {
  ansiScale.value = 1
  if (!activeItem.value?.ansiText) return
  await nextTick()
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
  if (!ansiContainerEl.value || !ansiPreEl.value) return
  const available = ansiContainerEl.value.clientWidth - 32
  if (available <= 0) return
  const natural = ansiPreEl.value.scrollWidth
  if (natural > available) ansiScale.value = available / natural
})
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
  if (noise.value > 0) n++
  if (colorCount.value !== '') n++
  if (scanlines.value > 0) n++
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
  triggerAutoProcess()
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
  if (noise.value > 0) form.append('noise', String(noise.value))
  if (colorCount.value !== '') form.append('colorCount', colorCount.value)
  form.append('shape', shape.value)
  form.append('gap', String(gap.value))
  form.append('scale', String(scale.value))
  if (scanlines.value > 0) form.append('scanlines', String(scanlines.value))
  if (seed.value !== '') form.append('seed', seed.value)
  if (background.value && hasBackground.value) form.append('background', background.value)

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

    const label = `${activePreset.value ? activePreset.value + ' · ' : ''}${activeMood.value ? activeMood.value + ' · ' : ''}${pixelAuto.value ? 'auto' : pixelSize.value + 'px'} · ${format.value.toUpperCase()}`
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

    if (window.innerWidth < 768) {
      await nextTick()
      resultEl.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
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
