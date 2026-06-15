<template>
  <div class="h-full relative">
    <div class="h-full border-2 border-dashed rounded-xl cursor-pointer transition-colors flex flex-col" :class="dragging ? 'border-violet-400 dark:border-violet-500 bg-violet-50 dark:bg-violet-950/20' : 'border-gray-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600'" @click="fileInput?.click()" @dragover.prevent="dragging = true" @dragleave="dragging = false" @drop.prevent="handleDrop">
      <div v-if="!file" class="flex flex-col items-center justify-center gap-2 pointer-events-none flex-1 p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300 dark:text-zinc-600">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p class="text-sm text-gray-400 dark:text-zinc-500">Drop or paste an image, or <span class="text-violet-500 dark:text-violet-400">click to browse</span></p>
      </div>
      <div v-else class="flex flex-col items-center flex-1 min-h-0 pointer-events-none p-4 gap-2">
        <img :src="previewUrl ?? undefined" class="flex-1 min-h-0 w-full object-contain rounded-lg" />
        <p class="text-sm font-medium text-gray-600 dark:text-zinc-300 shrink-0">{{ file.name }}</p>
      </div>
    </div>
    <input ref="fileInput" type="file" accept=".png,.jpg,.jpeg,.webp,.avif,image/png,image/jpeg,image/webp,image/avif" class="hidden" @change="handleFileChange" />
    <button v-if="file" class="absolute bottom-2.5 right-2.5 bg-violet-500 hover:bg-violet-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors" title="Randomize" @click.stop="randomize">
      <Dice5 :size="15" :stroke-width="2" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Dice5 } from 'lucide-vue-next'

import { usePixelate } from '@/composables/usePixelate'

const { file, previewUrl, dragging, handleDrop, handleFileChange, randomize } = usePixelate()
const fileInput = ref<HTMLInputElement | null>(null)
watch(file, (f) => {
  if (!f && fileInput.value) fileInput.value.value = ''
})
</script>
