<template>
  <header class="relative z-40 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-6 pb-4 shrink-0" style="padding-top: calc(1rem + env(safe-area-inset-top))">
    <div class="max-w-3xl lg:max-w-5xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/icon.svg" alt="Pixelated" class="w-6 h-6" />
        <span class="text-base font-semibold tracking-tight">Pixelated</span>
      </div>
      <div class="flex items-center gap-3">
        <button :aria-label="colorMode.preference === 'system' ? 'System mode' : colorMode.preference === 'light' ? 'Light mode' : 'Dark mode'" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" @click="cycleColorMode">
          <svg v-if="colorMode.preference === 'system'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <svg v-else-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <a href="https://www.npmjs.com/package/pixelated" target="_blank" rel="noopener" aria-label="npm" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <path d="M0 0v18h18V0H0zm14.5 14.5H9V5H5.5v9.5H3.5V3.5h11v11z" />
          </svg>
        </a>
        <a href="https://github.com/jayrdeaton/pixelated" target="_blank" rel="noopener" aria-label="GitHub" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.96.005 1.927.138 2.993.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const cycleColorMode = () => {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (colorMode.preference === 'system') colorMode.preference = systemIsDark ? 'light' : 'dark'
  else if (colorMode.preference === 'dark') colorMode.preference = systemIsDark ? 'system' : 'light'
  else colorMode.preference = systemIsDark ? 'dark' : 'system'
}
</script>
