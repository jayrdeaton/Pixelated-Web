<template>
  <div class="space-y-4">
    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">npm install -g pixelated</div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">pixelated &lt;input&gt; [options]</div>
      </div>
    </div>
    <div>
      <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Options</p>
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
        <p class="text-gray-400 dark:text-zinc-600 select-none"># Pixel &amp; Shape</p>
        <p><span class="text-violet-500 dark:text-violet-400">--alt</span> Alternate shape orientation on a checkerboard</p>
        <p><span class="text-violet-500 dark:text-violet-400">--offset</span> Offset every other row by half a block width</p>
        <p><span class="text-violet-500 dark:text-violet-400">-p, --pixel</span> <span class="text-gray-400 dark:text-zinc-500">n|nxn|auto</span> Pixel block size (default: 20)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--pixel-density</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Divisor for auto pixel size (default: 50)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-S, --shape</span> <span class="text-gray-400 dark:text-zinc-500 break-all">rect|round-rect|circle|ring|frame|diamond|triangle|hexagon|pentagon|star|cross|x|asterisk|hash|heart|crescent|drop|pacman|bowtie|arrow|flower|bacon|wave|meander|zigzag|chain</span> Pixel shape (default: rect)</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Color</p>
        <p><span class="text-violet-500 dark:text-violet-400">--aggregate</span> <span class="text-gray-400 dark:text-zinc-500">mean|median</span> Per-block color aggregation (default: mean)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-r, --brightness</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Brightness multiplier (default: 1)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-c, --colors</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Quantize output to n colors</p>
        <p><span class="text-violet-500 dark:text-violet-400">-C, --contrast</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Contrast multiplier (default: 1)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-g, --greyscale</span> Convert to greyscale</p>
        <p><span class="text-violet-500 dark:text-violet-400">--hue</span> <span class="text-gray-400 dark:text-zinc-500">°</span> Hue rotation in degrees (default: 0)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-i, --invert</span> Invert colors</p>
        <p><span class="text-violet-500 dark:text-violet-400">-a, --saturation</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Saturation multiplier (default: 1)</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Palette</p>
        <p><span class="text-violet-500 dark:text-violet-400">-d, --dither</span> Floyd-Steinberg dithering (requires --palette)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-P, --palette</span> <span class="text-gray-400 dark:text-zinc-500">gb|nes|pico8|dracula|nord|…</span> Snap colors to a palette</p>
        <p><span class="text-violet-500 dark:text-violet-400">--remap</span> <span class="text-gray-400 dark:text-zinc-500">0-1</span> Pre-shift pixels toward palette colors before pixelating (requires --palette)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--vibrancy</span> <span class="text-gray-400 dark:text-zinc-500">0-1</span> Bias palette toward saturated colors (requires --palette)</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Effects</p>
        <p><span class="text-violet-500 dark:text-violet-400">-B, --blur</span> <span class="text-gray-400 dark:text-zinc-500">σ</span> Pre-pixelation blur sigma</p>
        <p><span class="text-violet-500 dark:text-violet-400">--noise</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Random color noise amount</p>
        <p><span class="text-violet-500 dark:text-violet-400">--seed</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Seed for deterministic noise</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Modifiers</p>
        <p><span class="text-violet-500 dark:text-violet-400">--brightness-size</span> <span class="text-gray-400 dark:text-zinc-500">0-1</span> Scale pixel size by brightness</p>
        <p><span class="text-violet-500 dark:text-violet-400">--jitter</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Random positional offset per pixel (0-20)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--pulse</span> <span class="text-gray-400 dark:text-zinc-500">0-1</span> Radial size scaling from image center</p>
        <p><span class="text-violet-500 dark:text-violet-400">--size-variance</span> <span class="text-gray-400 dark:text-zinc-500">0-1</span> Random size variation per pixel shape</p>
        <p><span class="text-violet-500 dark:text-violet-400">--wave</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Sine wave position distortion (0-20)</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Rendering</p>
        <p><span class="text-violet-500 dark:text-violet-400">-G, --gap</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Gap between pixels in px (default: 0)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-s, --scale</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Output scale multiplier (default: 1)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--scanlines</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Scanline gap height in px</p>

        <p class="text-gray-400 dark:text-zinc-600 select-none mt-3"># Output</p>
        <p><span class="text-violet-500 dark:text-violet-400">-b, --background</span> <span class="text-gray-400 dark:text-zinc-500">#rrggbb</span> Background fill color</p>
        <p><span class="text-violet-500 dark:text-violet-400">-f, --format</span> <span class="text-gray-400 dark:text-zinc-500">png|jpeg|webp|avif|svg|ansi</span> Output format (default: png)</p>
        <p><span class="text-violet-500 dark:text-violet-400">-o, --output</span> <span class="text-gray-400 dark:text-zinc-500">path</span> Output file path</p>
      </div>
    </div>
  </div>
</template>
