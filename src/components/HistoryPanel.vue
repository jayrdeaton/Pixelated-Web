<template>
  <div v-if="history.length > 0" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm dark:shadow-none mb-6">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-sm font-medium text-gray-500 dark:text-zinc-400">History</h3>
      <button class="text-sm text-gray-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" @click="clearHistory">Clear</button>
    </div>
    <div class="flex gap-3 overflow-x-auto pb-2 px-3 pt-3 -mx-3 bg-gray-50 dark:bg-zinc-950 rounded-xl">
      <div v-for="(item, i) in history" :key="i" class="flex-shrink-0 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col items-center gap-2 w-36 shadow-sm dark:shadow-none cursor-pointer transition-all duration-150 hover:shadow-md hover:scale-[1.03] hover:border-violet-400 dark:hover:border-violet-500" @click="downloadItem(item)">
        <div class="w-28 h-28 flex items-center justify-center overflow-hidden rounded-lg cursor-zoom-in" @click.stop="onImageClick(item)">
          <img v-if="item.url" :src="item.url" class="max-w-full max-h-full object-contain" alt="" />
          <span v-else class="text-xs font-mono text-emerald-400">ANSI</span>
        </div>
        <p class="text-xs text-gray-400 dark:text-zinc-500 text-center leading-tight w-full line-clamp-2">{{ item.label }}</p>
        <span v-if="item.fileSize" class="text-xs text-emerald-500 mt-auto">↓ {{ formatBytes(item.fileSize) }} · {{ fileExt(item.filename) }}</span>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="lightboxItem?.url" class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm" @click="lightboxItem = null">
      <div class="rounded-xl shadow-2xl overflow-hidden" style="background-color: #2a2a2a" @click.stop>
        <img :src="lightboxItem.url" class="max-w-[90vw] max-h-[90vh] object-contain block" alt="Pixelated result" />
      </div>
      <button class="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none" @click="lightboxItem = null">✕</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { type HistoryItem, usePixelate } from '@/composables/usePixelate'

const { history, loadHistoryItem, clearHistory, downloadHistoryAnsi } = usePixelate()

const lightboxItem = ref<HistoryItem | null>(null)

function onImageClick(item: HistoryItem) {
  loadHistoryItem(item)
  if (item.url) lightboxItem.value = item
}

function downloadItem(item: HistoryItem) {
  if (item.url) {
    const a = document.createElement('a')
    a.href = item.url
    a.download = item.filename
    a.click()
  } else {
    downloadHistoryAnsi(item)
  }
}

function fileExt(filename: string): string {
  const ext = filename.split('.').pop()?.toUpperCase() ?? 'PNG'
  return ext === 'TXT' ? 'ANSI' : ext
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}
</script>
