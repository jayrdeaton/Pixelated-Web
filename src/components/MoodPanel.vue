<template>
  <div class="mb-5">
    <label class="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Mood<TooltipInfo text="Applies a brightness, contrast, saturation, and hue combination on top of the current preset. Stacks with Style. Click again to remove." /></label>
    <div class="flex flex-wrap gap-1.5">
      <button v-for="mood in moods" :key="mood.label" :class="activeMood === mood.label ? (moodActiveClass[mood.label] ?? 'bg-violet-500 text-white shadow-[3px_3px_0_rgba(0,0,0,0.25)]') : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 shadow-[2px_2px_0_rgba(0,0,0,0.12)]'" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-[box-shadow,transform,background-color,color] duration-75" @click="applyMood(mood)"><component :is="mood.icon" :size="11" class="shrink-0" />{{ mood.label }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { moodActiveClass, moods, usePixelate } from '@/composables/usePixelate'

const { activeMood, applyMood } = usePixelate()
</script>
