<template>
  <div v-show="showAdjustments" class="w-full flex flex-wrap gap-5 items-start">
    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Color</span>
    <div>
      <label for="brightness" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', brightness !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Brightness<TooltipInfo text="Scales overall brightness. 1 = no change, 2 = twice as bright, 0.5 = half as bright." /></label>
      <input id="brightness" v-model.number="brightness" type="number" min="0.1" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div>
      <label for="contrast" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', contrast !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Contrast<TooltipInfo text="Scales the difference between lights and darks. 1 = no change, >1 = more contrast, <1 = flatter." /></label>
      <input id="contrast" v-model.number="contrast" type="number" min="0" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div>
      <label for="saturation" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', saturation !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Saturation<TooltipInfo text="Scales color intensity. 0 = greyscale, 1 = no change, 2 = double saturation." /></label>
      <input id="saturation" v-model.number="saturation" type="number" min="0" max="3" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <label for="vibrancy" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', vibrancy > 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400', !palette ? 'cursor-not-allowed' : '']">Vibrancy<TooltipInfo text="Biases palette color matching toward more saturated colors. Requires a palette to be selected." /></label>
      <input id="vibrancy" v-model.number="vibrancy" type="number" min="0" max="1" step="0.1" :disabled="processing || !palette" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <label for="remap" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', remap > 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400', !palette ? 'cursor-not-allowed' : '']">Remap<TooltipInfo text="Pre-shifts each pixel's color toward the nearest palette color before pixelating. Higher values = stronger snap. Requires a palette." /></label>
      <input id="remap" v-model.number="remap" type="number" min="0" max="1" step="0.1" :disabled="processing || !palette" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div>
      <label for="hue" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', hue !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Hue <span class="font-normal text-gray-400 dark:text-zinc-500">(°)</span><TooltipInfo text="Rotates all colors around the hue wheel in degrees. 180 = complementary colors, 0 = no change." /></label>
      <input id="hue" v-model.number="hue" type="number" min="-180" max="180" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div>
      <label for="color-count" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', colorCount !== '' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Max colors<TooltipInfo text="Reduces the output to at most N distinct colors via quantization. Leave blank for no limit." /></label>
      <input id="color-count" v-model="colorCount" type="number" min="0" max="256" placeholder="All" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" @change="handleColorCountChange" />
    </div>
    <div>
      <label for="greyscale" :class="['flex items-center gap-1 text-sm font-medium mb-1.5 cursor-pointer', greyscale ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Greyscale<TooltipInfo text="Removes all color, converting the image to shades of grey." /></label>
      <input id="greyscale" v-model="greyscale" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50 cursor-pointer" />
    </div>
    <div>
      <label for="invert" :class="['flex items-center gap-1 text-sm font-medium mb-1.5 cursor-pointer', invert ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Invert<TooltipInfo text="Flips every color to its opposite, like a photo negative." /></label>
      <input id="invert" v-model="invert" type="checkbox" :disabled="processing" class="w-4 h-4 accent-violet-500 disabled:opacity-50 cursor-pointer" />
    </div>

    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Effects</span>
    <div>
      <label for="blur" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', blur !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Blur <span class="font-normal text-gray-400 dark:text-zinc-500">(σ)</span><TooltipInfo text="Gaussian blur applied before pixelation. Softens detail so pixels blend more smoothly. Higher sigma = blurrier." /></label>
      <input id="blur" v-model.number="blur" type="number" min="0" max="20" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div>
      <label for="noise" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', noise !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Noise<TooltipInfo text="Randomly shifts each pixel's color, creating a gritty or organic texture. 0 = none." /></label>
      <input id="noise" v-model.number="noise" type="number" min="0" max="100" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="noise === 0 ? 'opacity-40' : ''">
      <label for="seed" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', seed !== '' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Seed<TooltipInfo text="Makes noise reproducible. The same seed produces the same pattern every time. Leave blank for random." /></label>
      <input id="seed" v-model="seed" type="number" placeholder="Random" :disabled="processing || noise === 0" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <label for="dither" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', dither ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400', !palette ? 'cursor-not-allowed' : 'cursor-pointer']">Dither<TooltipInfo text="Floyd-Steinberg dithering spreads color quantization error to neighboring pixels for smoother gradients. Requires a palette." /></label>
      <input id="dither" v-model="dither" type="checkbox" :disabled="processing || !palette" class="w-4 h-4 accent-violet-500 disabled:opacity-50" :class="!palette ? 'cursor-not-allowed' : 'cursor-pointer'" />
    </div>

    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Rendering</span>
    <div>
      <label for="scale" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', scale !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Scale <span class="font-normal text-gray-400 dark:text-zinc-500">(×)</span><TooltipInfo text="Multiplies the output image dimensions. 2 = double size, 0.5 = half size. Does not change pixel count." /></label>
      <input id="scale" v-model.number="scale" type="number" min="0.1" max="10" step="0.1" :disabled="processing" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="gap" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', gap !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Gap <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span><TooltipInfo text="Empty space between each pixel block, creating a grid-like separation effect." /></label>
      <input id="gap" v-model.number="gap" type="number" min="0" max="50" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="scanlines" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', scanlines !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Scanlines <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span><TooltipInfo text="Draws dark horizontal lines every N pixels to simulate a CRT monitor screen." /></label>
      <input id="scanlines" v-model.number="scanlines" type="number" min="0" max="20" :disabled="processing || isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePixelate } from '@/composables/usePixelate'

const { showAdjustments, processing, palette, isAnsi, brightness, contrast, saturation, vibrancy, remap, hue, colorCount, greyscale, invert, blur, noise, seed, dither, scale, gap, scanlines, handleColorCountChange } = usePixelate()
</script>
