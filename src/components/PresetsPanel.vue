<template>
  <div class="mb-5">
    <div class="flex items-center gap-3 mb-2">
      <label class="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-zinc-400">Style<TooltipInfo text="Presets that configure pixel size, shape, palette, and effects all at once. Retro = game console palettes, Aesthetic = color moods, Effects = shape and texture effects." /></label>
      <div class="flex gap-1">
        <button v-for="cat in presetCategories" :key="cat.key" :class="presetCategory === cat.key ? categoryStyle[cat.key].tabActive : 'text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300'" class="text-xs font-medium px-2 py-0.5 rounded transition-colors" @click="presetCategory = cat.key">
          {{ cat.label }}
        </button>
      </div>
      <button v-if="presetCategory === 'retro'" class="ml-auto text-xs font-medium text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="showAllRetro = !showAllRetro">
        {{ showAllRetro ? '− less' : '+ more' }}
      </button>
    </div>
    <div class="flex flex-wrap gap-1.5">
      <button v-for="preset in filteredPresets" :key="preset.label" :class="activePreset === preset.label ? (presetGradients[preset.label] ? 'text-white shadow-[3px_3px_0_rgba(0,0,0,0.35)] [text-shadow:0_1px_3px_rgba(0,0,0,0.65)]' : categoryStyle[presetCategory].active) : categoryStyle[presetCategory].inactive" :style="activePreset === preset.label && presetGradients[preset.label] ? { background: presetGradients[preset.label] } : undefined" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-[box-shadow,transform,color] duration-75" @click="applyPreset(preset)"><component :is="preset.icon" v-if="preset.icon" :size="11" class="shrink-0" />{{ preset.label }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categoryStyle, presetCategories, usePixelate } from '@/composables/usePixelate'

const { presetCategory, showAllRetro, filteredPresets, activePreset, presetGradients, applyPreset } = usePixelate()
</script>
