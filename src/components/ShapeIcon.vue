<template>
  <!-- eslint-disable-next-line vue/no-v-html -- markup is built entirely from numeric geometry by renderShapeIconMarkup, never from user input -->
  <svg :width="size" :height="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" v-html="markup" />
</template>

<script setup lang="ts">
import type { PixelatedShape } from 'pixelated/shapes'
import { renderShapeIconMarkup } from 'pixelated/shapes'

const props = withDefaults(defineProps<{ shape: PixelatedShape; size?: number }>(), { size: 16 })

const markup = computed(() => renderShapeIconMarkup(props.shape, { size: 24 }))
</script>
