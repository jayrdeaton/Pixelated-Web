<template>
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
</template>

<script setup lang="ts">
import { usePixelate } from '@/composables/usePixelate'

const { history, activeItem, loadHistoryItem, clearHistory, downloadHistoryAnsi } = usePixelate()
</script>
