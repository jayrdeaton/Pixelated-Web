<template>
  <div ref="rootEl" class="relative">
    <button type="button" :disabled="disabled" class="w-full flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'" @click="!disabled && (open = !open)">
      <ShapeIcon :shape="modelValue" :size="16" class="shrink-0 text-violet-500 dark:text-violet-400" />
      <span class="flex-1 min-w-0 text-left truncate">{{ currentLabel }}</span>
      <ChevronDown :size="14" class="shrink-0 text-gray-400 dark:text-zinc-500 transition-transform" :class="open ? 'rotate-180' : ''" />
    </button>

    <div v-if="open" ref="panelEl" class="absolute left-0 z-50 mt-2 w-72 max-w-[calc(100vw-1rem)] max-h-80 overflow-y-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg p-3 space-y-3">
      <div v-for="group in SHAPE_GROUPS" :key="group.label">
        <p class="text-xs font-medium text-gray-400 dark:text-zinc-500 mb-1.5">{{ group.label }}</p>
        <div class="grid grid-cols-4 gap-1.5">
          <button v-for="s in group.shapes" :key="s.value" type="button" :class="modelValue === s.value ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'" class="flex flex-col items-center gap-1 rounded-lg py-2 px-1 text-[10px] leading-tight text-center font-medium transition-colors" @click="select(s.value)">
            <ShapeIcon :shape="s.value" :size="18" />
            {{ s.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

import type { ShapeValue } from '@/composables/usePixelate'

defineProps<{ disabled?: boolean }>()

const modelValue = defineModel<ShapeValue>({ required: true })

const SHAPE_GROUPS: { label: string; shapes: { value: ShapeValue; label: string }[] }[] = [
  {
    label: 'Basic',
    shapes: [
      { value: 'circle', label: 'Circle' },
      { value: 'frame', label: 'Frame' },
      { value: 'rect', label: 'Rect' },
      { value: 'ring', label: 'Ring' },
      { value: 'round-rect', label: 'Round Rect' }
    ]
  },
  {
    label: 'Geometric',
    shapes: [
      { value: 'diamond', label: 'Diamond' },
      { value: 'hexagon', label: 'Hexagon' },
      { value: 'pentagon', label: 'Pentagon' },
      { value: 'triangle', label: 'Triangle' }
    ]
  },
  {
    label: 'Stars & Symbols',
    shapes: [
      { value: 'asterisk', label: 'Asterisk' },
      { value: 'cross', label: 'Cross' },
      { value: 'hash', label: 'Hash' },
      { value: 'heart', label: 'Heart' },
      { value: 'star', label: 'Star' },
      { value: 'x', label: 'X' }
    ]
  },
  {
    label: 'Organic',
    shapes: [
      { value: 'crescent', label: 'Crescent' },
      { value: 'drop', label: 'Drop' },
      { value: 'flower', label: 'Flower' }
    ]
  },
  {
    label: 'Fun',
    shapes: [
      { value: 'arrow', label: 'Arrow' },
      { value: 'bacon', label: 'Bacon' },
      { value: 'bowtie', label: 'Bowtie' },
      { value: 'chain', label: 'Chain' },
      { value: 'meander', label: 'Meander' },
      { value: 'pacman', label: 'Pacman' },
      { value: 'wave', label: 'Wave' },
      { value: 'zigzag', label: 'Zigzag' }
    ]
  }
]

const currentLabel = computed(() => SHAPE_GROUPS.flatMap((g) => g.shapes).find((s) => s.value === modelValue.value)?.label ?? modelValue.value)

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)
const panelEl = ref<HTMLElement | null>(null)

watch(open, async (isOpen) => {
  if (!isOpen) return
  await nextTick()
  if (!panelEl.value) return
  panelEl.value.style.transform = ''
  const rect = panelEl.value.getBoundingClientRect()
  const overflowRight = rect.right - (window.innerWidth - 8)
  if (overflowRight > 0) panelEl.value.style.transform = `translateX(-${overflowRight}px)`
})

const select = (value: ShapeValue) => {
  modelValue.value = value
  open.value = false
}

const handleClickOutside = (e: MouseEvent) => {
  if (rootEl.value && !rootEl.value.contains(e.target as Node)) open.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>
