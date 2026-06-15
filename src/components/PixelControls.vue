<template>
  <div class="flex flex-wrap gap-5 mb-6 items-start">
    <div class="w-full flex flex-col sm:flex-row gap-3 items-start sm:items-end">
      <!-- Pixel + Shape -->
      <div class="flex-1 min-w-0 space-y-1.5">
        <span class="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-zinc-400">Pixel<TooltipInfo text="Size of each pixel block and its shape. Auto computes size from image dimensions using a divisor. Higher divisor = smaller pixels." /></span>
        <div class="flex flex-wrap gap-3 items-center">
          <div class="inline-flex items-stretch bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shrink-0">
            <button :class="pixelAuto ? 'bg-violet-500 text-white' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200'" class="px-3 py-2 text-sm font-medium transition-colors shrink-0" @click="pixelAuto = !pixelAuto">
              Auto<span v-if="pixelAuto && autoPixelResolved" class="ml-1 opacity-70 font-normal">({{ autoPixelResolved }}px)</span>
            </button>
            <div class="w-px bg-gray-200 dark:bg-zinc-700 shrink-0" />
            <template v-if="pixelAuto">
              <span class="flex items-center pl-3 text-sm text-gray-400 dark:text-zinc-500 select-none">÷</span>
              <input v-model.lazy.number="autoPixelDensity" type="number" min="1" max="200" class="w-14 bg-transparent px-2 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
            </template>
            <input v-else id="pixel-size" v-model.lazy.number="pixelSize" type="number" min="1" max="200" class="w-16 bg-transparent px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
          </div>
          <ShapeIcon :shape="shape" :size="22" class="shrink-0 text-violet-500 dark:text-violet-400" />
          <select id="shape" v-model="shape" :disabled="isAnsi" :class="isAnsi ? 'opacity-40' : ''" class="flex-1 min-w-0 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500 capitalize">
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
              <option value="triangle">Triangle</option>
            </optgroup>
            <optgroup label="Stars &amp; Symbols">
              <option value="asterisk">Asterisk</option>
              <option value="cross">Cross</option>
              <option value="hash">Hash</option>
              <option value="heart">Heart</option>
              <option value="star">Star</option>
              <option value="x">X</option>
            </optgroup>
            <optgroup label="Organic">
              <option value="crescent">Crescent</option>
              <option value="flower">Flower</option>
              <option value="leaf">Leaf</option>
            </optgroup>
            <optgroup label="Fun">
              <option value="arrow">Arrow</option>
              <option value="bacon">Bacon</option>
              <option value="bowtie">Bowtie</option>
              <option value="pacman">Pacman</option>
            </optgroup>
          </select>
          <div class="inline-flex items-stretch bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shrink-0" :class="isAnsi ? 'opacity-40' : ''">
            <button :disabled="isAnsi" :class="alt ? 'bg-violet-500 text-white' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200'" class="px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed" title="Alternate shape orientation on a checkerboard — e.g. alternating up/down triangles, + and × crosses, or 4-direction pacman." @click="!isAnsi && (alt = !alt)">Alt</button>
            <div class="w-px bg-gray-200 dark:bg-zinc-700 shrink-0" />
            <button :disabled="isAnsi" :class="offset ? 'bg-violet-500 text-white' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200'" class="px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed" title="Offset every other row by half a block width — like hexagonal or brick tiling." @click="!isAnsi && (offset = !offset)">Offset</button>
          </div>
        </div>
      </div>
      <!-- Output -->
      <div class="shrink-0 space-y-1.5">
        <span class="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-zinc-400">Output<TooltipInfo text="Format determines the file type. Background fills transparent areas and gaps between shapes." /></span>
        <div class="flex gap-2 items-center">
          <select id="format" v-model="format" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500 uppercase">
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WebP</option>
            <option value="avif">AVIF</option>
            <option value="svg">SVG</option>
            <option value="ansi">ANSI</option>
          </select>
          <div class="flex items-center gap-1.5" :class="!hasBackground ? 'opacity-40' : ''">
            <input v-model="background" type="color" :disabled="!hasBackground" class="w-8 h-8 rounded border border-gray-200 dark:border-zinc-700 disabled:opacity-50" :class="hasBackground ? 'cursor-pointer' : 'cursor-not-allowed'" />
            <span class="text-xs text-gray-400 dark:text-zinc-500">bg</span>
            <button v-if="background && hasBackground" class="text-xs text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="background = ''">✕</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-zinc-800">
      <button class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors" @click="showAdjustments = !showAdjustments">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" :class="showAdjustments ? 'rotate-180' : ''">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        Adjustments
      </button>
      <span v-if="activeAdjustmentCount > 0" class="text-xs bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded-full font-medium">{{ activeAdjustmentCount }}</span>
    </div>

    <AdjustmentsPanel />
  </div>

  <div class="flex justify-center items-center gap-4 flex-wrap">
    <!-- Auto / Pixelate segmented control -->
    <div class="inline-flex items-stretch bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
      <button :class="autoUpdate ? 'bg-violet-500 text-white' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200'" class="px-3 py-2 text-sm font-medium transition-colors" @click="autoUpdate = !autoUpdate">Auto</button>
      <div class="w-px bg-gray-200 dark:bg-zinc-700 shrink-0" />
      <button :disabled="processing || !file" class="px-3 py-2 text-sm font-medium transition-colors disabled:opacity-50 bg-violet-500 text-white hover:bg-violet-600" @click="process">
        {{ processing ? 'Processing…' : 'Pixelate' }}
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { usePixelate } from '@/composables/usePixelate'

const { pixelSize, pixelAuto, autoPixelDensity, autoPixelResolved, shape, alt, offset, format, background, hasBackground, isAnsi, showAdjustments, activeAdjustmentCount, processing, autoUpdate, process, file } = usePixelate()
</script>
