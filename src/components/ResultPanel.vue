<template>
  <div class="flex flex-col gap-4 h-full">
    <div v-if="error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl p-5 font-mono text-sm text-red-600 dark:text-red-400 flex items-start justify-between gap-4">
      <span><span class="text-red-400 dark:text-red-600 select-none">✗ </span>{{ error }}</span>
      <button class="shrink-0 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 transition-colors font-sans font-medium" @click="process">Try again</button>
    </div>

    <div v-if="activeItem?.url || (processing && format !== 'ansi')" class="flex flex-col flex-1">
      <div
        class="relative w-full flex-1 border-2 border-dashed rounded-xl p-4 flex flex-col min-h-32 transition-colors"
        :class="[
          activeItem?.url && !processing ? 'border-emerald-400 dark:border-emerald-600 cursor-zoom-in' : 'border-emerald-300 dark:border-emerald-800',
        ]"
        @click="activeItem?.url && !processing && (lightboxOpen = true)"
      >
        <img v-if="activeItem?.url" :src="activeItem.url" class="flex-1 min-h-0 w-full object-contain transition-opacity" :class="processing ? 'opacity-30' : ''" alt="Pixelated result" />
        <div v-if="processing" class="absolute inset-0 flex items-center justify-center">
          <div class="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <a
          v-if="activeItem?.url && !processing"
          :href="activeItem.url"
          :download="activeItem.filename"
          class="absolute bottom-2.5 right-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors text-sm font-bold leading-none"
          title="Download"
          @click.stop
        >↓</a>
      </div>
    </div>

    <div v-if="activeItem?.ansiText || (processing && format === 'ansi')" class="flex flex-col gap-3">
      <div class="relative w-full">
        <div ref="ansiContainerEl" class="w-full bg-zinc-950 border-2 border-dashed border-emerald-600 rounded-xl p-4 overflow-auto max-h-96 min-h-32 transition-opacity" :class="processing ? 'opacity-30' : ''">
          <!-- eslint-disable-next-line vue/no-v-html -- safe: ansi-to-html output from server-processed image, not user text -->
          <pre v-if="activeItem?.ansiText" ref="ansiPreEl" :style="{ zoom: ansiScale }" class="text-xs font-mono leading-none whitespace-pre inline-block" v-html="ansiHtml" />
        </div>
        <div v-if="processing" class="absolute inset-0 flex items-center justify-center">
          <div class="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <div v-if="activeItem?.ansiText" class="absolute bottom-2.5 right-2.5 flex gap-1.5">
          <button class="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors text-xs font-bold" @click="copyAnsi">{{ ansiCopied ? '✓' : 'C' }}</button>
          <button class="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors text-sm font-bold" @click="downloadAnsi">↓</button>
        </div>
      </div>
    </div>

    <div v-if="!activeItem && !error" class="flex flex-1 border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-xl p-8 items-center justify-center text-center">
      <p class="text-sm text-gray-400 dark:text-zinc-500">Pixelating...</p>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      @click="lightboxOpen = false"
      @keydown.escape="lightboxOpen = false"
    >
      <div
        class="rounded-xl shadow-2xl overflow-hidden"
        style="background-color: #2a2a2a;"
        @click.stop
      >
        <img
          :src="activeItem?.url"
          class="max-w-[90vw] max-h-[90vh] object-contain block"
          alt="Pixelated result"
        />
      </div>
      <button
        class="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
        @click="lightboxOpen = false"
      >✕</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePixelate } from '@/composables/usePixelate'

const { activeItem, processing, format, error, file, ansiHtml, ansiScale, ansiPreEl, ansiContainerEl, ansiCopied, copyAnsi, downloadAnsi, process } = usePixelate()

const lightboxOpen = ref(false)
</script>
