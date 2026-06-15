<template>
  <div v-show="showAdjustments" class="w-full flex flex-wrap gap-5 items-start">
    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Color</span>
    <div>
      <label for="brightness" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', brightness !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Brightness<TooltipInfo text="Scales overall brightness. 1 = no change, 2 = twice as bright, 0.5 = half as bright." /></label>
      <input id="brightness" v-model.lazy.number="brightness" type="number" min="0.1" max="3" step="0.1" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <label for="contrast" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', contrast !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Contrast<TooltipInfo text="Scales the difference between lights and darks. 1 = no change, >1 = more contrast, <1 = flatter." /></label>
      <input id="contrast" v-model.lazy.number="contrast" type="number" min="0" max="3" step="0.1" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <label for="saturation" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', saturation !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Saturation<TooltipInfo text="Scales color intensity. 0 = greyscale, 1 = no change, 2 = double saturation." /></label>
      <input id="saturation" v-model.lazy.number="saturation" type="number" min="0" max="3" step="0.1" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <label for="vibrancy" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', vibrancy > 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400', !palette ? 'cursor-not-allowed' : '']">Vibrancy<TooltipInfo text="Biases palette color matching toward more saturated colors. Requires a palette to be selected." /></label>
      <input id="vibrancy" v-model.lazy.number="vibrancy" type="number" min="0" max="1" step="0.1" :disabled="!palette" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <label for="remap" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', remap > 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400', !palette ? 'cursor-not-allowed' : '']">Remap<TooltipInfo text="Pre-shifts each pixel's color toward the nearest palette color before pixelating. Higher values = stronger snap. Requires a palette." /></label>
      <input id="remap" v-model.lazy.number="remap" type="number" min="0" max="1" step="0.1" :disabled="!palette" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <label for="hue" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', hue !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Hue <span class="font-normal text-gray-400 dark:text-zinc-500">(°)</span><TooltipInfo text="Rotates all colors around the hue wheel in degrees. 180 = complementary colors, 0 = no change." /></label>
      <input id="hue" v-model.lazy.number="hue" type="number" min="-180" max="180" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <label for="color-count" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', colorCount !== '' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Max colors<TooltipInfo text="Reduces the output to at most N distinct colors via quantization. Leave blank for no limit." /></label>
      <input id="color-count" v-model.lazy="colorCount" type="number" min="0" max="256" placeholder="All" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-violet-500" @change="handleColorCountChange" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <span :class="['flex items-center gap-1 text-sm font-medium mb-1.5', greyscale ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Greyscale<TooltipInfo text="Removes all color, converting the image to shades of grey." /></span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input v-model="greyscale" type="checkbox" class="sr-only" />
        <div :class="greyscale ? 'bg-violet-500' : 'bg-gray-300 dark:bg-zinc-600'" class="w-8 h-4 rounded-full transition-colors" />
        <div :class="greyscale ? 'translate-x-4' : 'translate-x-0.5'" class="absolute top-0.5 left-0 w-3 h-3 bg-white rounded-full shadow transition-transform" />
      </label>
    </div>
    <div>
      <span :class="['flex items-center gap-1 text-sm font-medium mb-1.5', invert ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Invert<TooltipInfo text="Flips every color to its opposite, like a photo negative." /></span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input v-model="invert" type="checkbox" class="sr-only" />
        <div :class="invert ? 'bg-violet-500' : 'bg-gray-300 dark:bg-zinc-600'" class="w-8 h-4 rounded-full transition-colors" />
        <div :class="invert ? 'translate-x-4' : 'translate-x-0.5'" class="absolute top-0.5 left-0 w-3 h-3 bg-white rounded-full shadow transition-transform" />
      </label>
    </div>

    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Effects</span>
    <div>
      <label for="blur" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', blur !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Blur <span class="font-normal text-gray-400 dark:text-zinc-500">(σ)</span><TooltipInfo text="Gaussian blur applied before pixelation. Softens detail so pixels blend more smoothly. Higher sigma = blurrier." /></label>
      <input id="blur" v-model.lazy.number="blur" type="number" min="0" max="20" step="0.1" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div>
      <label for="noise" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', noise !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Noise<TooltipInfo text="Randomly shifts each pixel's color, creating a gritty or organic texture. 0 = none." /></label>
      <input id="noise" v-model.lazy.number="noise" type="number" min="0" max="100" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="noise === 0 ? 'opacity-40' : ''">
      <label for="seed" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', seed !== '' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Seed<TooltipInfo text="Makes noise reproducible. The same seed produces the same pattern every time. Leave blank for random." /></label>
      <input id="seed" v-model.lazy="seed" type="number" placeholder="Random" :disabled="noise === 0" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 placeholder-gray-400 dark:placeholder-zinc-600 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="!palette ? 'opacity-40' : ''">
      <span :class="['flex items-center gap-1 text-sm font-medium mb-1.5', dither ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Dither<TooltipInfo text="Floyd-Steinberg dithering spreads color quantization error to neighboring pixels for smoother gradients. Requires a palette." /></span>
      <label class="relative inline-flex items-center" :class="!palette ? 'cursor-not-allowed' : 'cursor-pointer'">
        <input v-model="dither" type="checkbox" :disabled="!palette" class="sr-only" />
        <div :class="dither ? 'bg-violet-500' : 'bg-gray-300 dark:bg-zinc-600'" class="w-8 h-4 rounded-full transition-colors" />
        <div :class="dither ? 'translate-x-4' : 'translate-x-0.5'" class="absolute top-0.5 left-0 w-3 h-3 bg-white rounded-full shadow transition-transform" />
      </label>
    </div>

    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Modifiers</span>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="jitter" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', jitter !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Jitter<TooltipInfo text="Randomly offsets each pixel's position, creating an organic scattered look." /></label>
      <input id="jitter" v-model.lazy.number="jitter" type="number" min="0" max="20" step="0.5" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="size-variance" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', sizeVariance !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Size Variance<TooltipInfo text="Randomly varies the size of each pixel shape. 0 = uniform, 1 = max variation." /></label>
      <input id="size-variance" v-model.lazy.number="sizeVariance" type="number" min="0" max="1" step="0.05" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="pulse" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', pulse !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Pulse<TooltipInfo text="Scales pixel size based on a radial gradient from the center, creating a pulsing effect." /></label>
      <input id="pulse" v-model.lazy.number="pulse" type="number" min="0" max="1" step="0.05" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="wave" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', wave !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Wave<TooltipInfo text="Applies a sine wave distortion to pixel positions." /></label>
      <input id="wave" v-model.lazy.number="wave" type="number" min="0" max="20" step="0.5" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="brightness-size" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', brightnessSize !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Brightness Size<TooltipInfo text="Scales each pixel's size based on its brightness — brighter pixels appear larger." /></label>
      <input id="brightness-size" v-model.lazy.number="brightnessSize" type="number" min="0" max="1" step="0.05" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>

    <span class="basis-full text-sm font-medium text-gray-500 dark:text-zinc-400 -mb-2">Rendering</span>
    <div>
      <label for="scale" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', scale !== 1 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Scale <span class="font-normal text-gray-400 dark:text-zinc-500">(×)</span><TooltipInfo text="Multiplies the output image dimensions. 2 = double size, 0.5 = half size. Does not change pixel count." /></label>
      <input id="scale" v-model.lazy.number="scale" type="number" min="0.1" max="10" step="0.1" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="gap" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', gap !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Gap <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span><TooltipInfo text="Empty space between each pixel block, creating a grid-like separation effect." /></label>
      <input id="gap" v-model.lazy.number="gap" type="number" min="0" max="50" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
    <div :class="isAnsi ? 'opacity-40' : ''">
      <label for="scanlines" :class="['flex items-center gap-1 text-sm font-medium mb-1.5', scanlines !== 0 ? 'text-violet-500 dark:text-violet-400' : 'text-gray-500 dark:text-zinc-400']">Scanlines <span class="font-normal text-gray-400 dark:text-zinc-500">(px)</span><TooltipInfo text="Draws dark horizontal lines every N pixels to simulate a CRT monitor screen." /></label>
      <input id="scanlines" v-model.lazy.number="scanlines" type="number" min="0" max="20" :disabled="isAnsi" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" @keydown.enter.prevent="($event.target as HTMLInputElement).blur()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePixelate } from '@/composables/usePixelate'

const { showAdjustments, palette, isAnsi, brightness, contrast, saturation, vibrancy, remap, hue, colorCount, greyscale, invert, blur, noise, seed, dither, scale, gap, scanlines, jitter, sizeVariance, pulse, wave, brightnessSize, handleColorCountChange } = usePixelate()
</script>
