<template>
  <span class="relative group inline-flex items-center shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-400 transition-colors cursor-default">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 text-xs bg-gray-900 dark:bg-zinc-800 text-gray-100 rounded-lg px-2.5 py-2 leading-relaxed opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50 shadow-lg whitespace-normal text-left font-normal">
      {{ text }}
      <span class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-zinc-800" />
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
