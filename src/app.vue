<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <div id="splash" style="position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 9999; transition: opacity 0.25s">
      <img src="/icon-180.png" style="width: 80px; height: 80px; border-radius: 18px" alt="" />
    </div>

    <AppHeader />

    <main class="flex-1 max-w-3xl lg:max-w-5xl mx-auto w-full px-6 py-14">
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Pixelate your images.</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Upload an image, choose your settings, and download your pixelated image in seconds.</p>
      </div>

      <div class="md:grid md:grid-cols-2 md:gap-6 md:items-start mb-6">
        <div class="mb-6 md:mb-0">
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm dark:shadow-none">
            <ImageDropZone />
            <PresetsPanel />
            <MoodPanel />
            <PixelControls />
          </div>
        </div>
        <ResultPanel />
      </div>

      <HistoryPanel />
      <CliSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { createPixelateState, PIXELATE_KEY } from '@/composables/usePixelate'

provide(PIXELATE_KEY, createPixelateState())
</script>
