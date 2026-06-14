<template>
  <div ref="rootEl" class="md:sticky md:top-6 flex flex-col gap-4">
    <div v-if="error" class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl p-5 font-mono text-sm text-red-600 dark:text-red-400 flex items-start justify-between gap-4">
      <span><span class="text-red-400 dark:text-red-600 select-none">✗ </span>{{ error }}</span>
      <button class="shrink-0 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 transition-colors font-sans font-medium" @click="process">Try again</button>
    </div>

    <div v-if="activeItem?.url || (processing && format !== 'ansi')" class="flex flex-col items-center gap-4">
      <div class="relative w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm dark:shadow-none flex justify-center min-h-32 items-center">
        <img v-if="activeItem?.url" :src="activeItem.url" class="max-w-full max-h-96 rounded-lg object-contain transition-opacity" :class="processing ? 'opacity-30' : ''" alt="Pixelated result" />
        <div v-if="processing" class="absolute inset-0 flex items-center justify-center">
          <div class="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
      <a v-if="activeItem?.url" :href="activeItem.url" :download="activeItem.filename" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm shadow-[4px_4px_0_rgba(0,0,0,0.25)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[box-shadow,transform,background-color] duration-75"> ↓ Download {{ activeItem.filename }} </a>
    </div>

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

    <div v-if="!activeItem && !error && !processing" class="hidden md:flex border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl min-h-48 items-center justify-center">
      <p class="text-sm text-gray-300 dark:text-zinc-600 text-center px-6">{{ file ? 'Choose a preset or press Pixelate' : 'Upload an image to get started' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePixelate } from '@/composables/usePixelate'

const { activeItem, processing, format, error, file, ansiHtml, ansiScale, ansiPreEl, ansiContainerEl, ansiCopied, copyAnsi, downloadAnsi, process } = usePixelate()

const rootEl = ref<HTMLElement | null>(null)

watch(activeItem, async () => {
  if (window.innerWidth < 768) {
    await nextTick()
    rootEl.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
})
</script>
