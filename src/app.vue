<template>
  <div class="fixed inset-x-0 top-0 z-50 bg-gray-50 dark:bg-zinc-950" style="height: env(safe-area-inset-top)" aria-hidden="true" />
  <div class="fixed inset-x-0 bottom-0 z-50 bg-gray-50 dark:bg-zinc-950" style="height: env(safe-area-inset-bottom)" aria-hidden="true" />
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col" :class="{ 'transition-colors duration-200': mounted }">
    <AppHeader />

    <main class="flex-1 max-w-3xl lg:max-w-5xl mx-auto w-full px-6 pt-10 pb-14">
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Pixelate your images</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Upload an image, choose your settings, and download your pixelated image in seconds.</p>
      </div>

      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm dark:shadow-none mb-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-500 dark:text-zinc-400">Image</span>
          <button class="text-sm text-gray-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" @click="clearImage">Clear</button>
        </div>
        <div :class="showResult ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''">
          <ImageDropZone />
          <ResultPanel v-if="showResult" />
        </div>
      </div>

      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm dark:shadow-none mb-6">
        <div class="flex items-center justify-between mb-5">
          <span class="text-sm font-medium text-gray-500 dark:text-zinc-400">Settings</span>
          <button class="text-sm text-gray-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" @click="resetOptions">Clear</button>
        </div>
        <MoodPanel />
        <PresetsPanel />
        <PixelControls />
      </div>

      <HistoryPanel />

      <div v-if="!isPwa" class="mt-12 pt-12 border-t border-gray-200 dark:border-zinc-800">
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="feature in features" :key="feature.title" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm dark:shadow-none">
            <h3 class="font-semibold mb-1.5">{{ feature.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <CliSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { createPixelateState, features, PIXELATE_KEY } from '@/composables/usePixelate'

const state = createPixelateState()
provide(PIXELATE_KEY, state)
const { clearImage, resetOptions, activeItem, processing, isPwa } = state
const showResult = computed(() => !!(activeItem.value || processing.value))

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>
