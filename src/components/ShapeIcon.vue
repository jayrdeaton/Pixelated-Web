<template>
  <svg :width="size" :height="size" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle v-if="shape === 'circle'" cx="10" cy="10" r="8" fill="currentColor"/>
    <rect v-else-if="shape === 'rect'" x="2" y="2" width="16" height="16" fill="currentColor"/>
    <circle v-else-if="shape === 'ring'" cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect v-else-if="shape === 'round-rect'" x="2" y="2" width="16" height="16" rx="4" fill="currentColor"/>
    <polygon v-else-if="shape === 'diamond'" points="10,1 19,10 10,19 1,10" fill="currentColor"/>
    <polygon v-else-if="shape === 'hexagon'" points="10,1 17.8,5.5 17.8,14.5 10,19 2.2,14.5 2.2,5.5" fill="currentColor"/>
    <polygon v-else-if="shape === 'pentagon'" points="10,1 18.6,7.2 15.3,17.3 4.7,17.3 1.4,7.2" fill="currentColor"/>
    <polygon v-else-if="shape === 'triangle'" points="10,2 18.5,17.5 1.5,17.5" fill="currentColor"/>
    <g v-else-if="shape === 'asterisk'" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none">
      <line x1="10" y1="2" x2="10" y2="18"/>
      <line x1="2" y1="10" x2="18" y2="10"/>
      <line x1="3.6" y1="3.6" x2="16.4" y2="16.4"/>
      <line x1="16.4" y1="3.6" x2="3.6" y2="16.4"/>
    </g>
    <polygon v-else-if="shape === 'cross'" points="7,2 13,2 13,7 18,7 18,13 13,13 13,18 7,18 7,13 2,13 2,7 7,7" fill="currentColor"/>
    <g v-else-if="shape === 'hash'" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" fill="none">
      <line x1="7" y1="2" x2="7" y2="18"/>
      <line x1="13" y1="2" x2="13" y2="18"/>
      <line x1="2" y1="7" x2="18" y2="7"/>
      <line x1="2" y1="13" x2="18" y2="13"/>
    </g>
    <path v-else-if="shape === 'heart'" d="M10,17 C10,17 2,12 2,6.5 C2,4 4,2 6.5,2 C8,2 9.5,3 10,4 C10.5,3 12,2 13.5,2 C16,2 18,4 18,6.5 C18,12 10,17 10,17 Z" fill="currentColor"/>
    <polygon v-else-if="shape === 'star'" points="10,1 12.1,7.2 18.6,7.2 13.3,11.1 15.3,17.3 10,13.5 4.7,17.3 6.7,11.1 1.4,7.2 7.9,7.2" fill="currentColor"/>
    <g v-else-if="shape === 'x'" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
      <line x1="3" y1="3" x2="17" y2="17"/>
      <line x1="17" y1="3" x2="3" y2="17"/>
    </g>
    <g v-else-if="shape === 'crescent'" fill="currentColor" fill-rule="evenodd">
      <circle cx="10" cy="10" r="8"/>
      <circle cx="13" cy="10" r="5"/>
    </g>
    <path v-else-if="shape === 'leaf'" d="M10,2 A9,10 0 0,1 10,18 A9,10 0 0,0 10,2 Z" fill="currentColor"/>
    <path v-else-if="shape === 'pacman'" d="M10,10 L16.9,6 A8,8 0 1,0 16.9,14 Z" fill="currentColor"/>
    <g v-else-if="shape === 'bowtie'" fill="currentColor">
      <polygon points="2,2 18,2 10,10"/>
      <polygon points="2,18 18,18 10,10"/>
    </g>
    <polygon v-else-if="shape === 'arrow'" points="2,7 12,7 12,2 18,10 12,18 12,13 2,13" fill="currentColor"/>
    <g v-else-if="shape === 'flower'" fill="currentColor">
      <circle cx="10" cy="5" r="3.5"/>
      <circle cx="14.8" cy="8.5" r="3.5"/>
      <circle cx="12.9" cy="14" r="3.5"/>
      <circle cx="7.1" cy="14" r="3.5"/>
      <circle cx="5.2" cy="8.5" r="3.5"/>
      <circle cx="10" cy="10" r="3"/>
    </g>
    <g v-else-if="shape === 'bacon'" fill="currentColor">
      <path d="M2,2 Q6,0 10,2 Q14,5 18,2 L18,5 Q14,8 10,5 Q6,2 2,5 Z"/>
      <path d="M2,9 Q6,6 10,9 Q14,12 18,9 L18,12 Q14,15 10,12 Q6,9 2,12 Z"/>
      <path d="M2,15 Q6,12 10,15 Q14,18 18,15 L18,18 Q14,20 10,18 Q6,15 2,18 Z"/>
    </g>
    <rect v-else x="2" y="2" width="16" height="16" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ shape: string; size?: number }>(), { size: 16 })
</script>
