# Pixelated Web

The companion website for the [`pixelated`](https://www.npmjs.com/package/pixelated) npm package — pixelate images in the browser with a full set of controls.

Built with Nuxt 4, Tailwind CSS, and deployed to Vercel.

## Features

- Drag-and-drop, click-to-browse, or paste (Ctrl/Cmd+V) to upload
- All `pixelated` options exposed: pixel size, format, shape, gap, scale, palette, dither, noise, scanlines, background, seed
- Auto pixel size with optional density divisor
- Adjustments panel (invert, brightness, contrast, saturation, hue)
- ANSI output rendered inline; all other formats shown as images
- Preview history strip with per-result download and settings label
- Dark mode via system preference or manual toggle
- Images processed server-side and deleted immediately — nothing is stored

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm test` | Run tests |
| `npm run lint` | Lint |
| `npm run typecheck` | Type-check |
| `npm run validate` | Typecheck + lint + test + build |

## Deployment

Deployments are triggered by pushing a version tag:

```bash
npm run release:patch   # patch bump → tag → deploy
npm run release:minor
npm run release:major
```

The deploy workflow runs tests, builds via Vercel CLI, and promotes to production. CI runs on every push and pull request to `main`.

Required repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

## Project structure

```
src/
  app.vue                        # entire frontend (single-page)
  server/api/pixelate.post.ts    # multipart upload → pixelated() → base64 response
  __tests__/                     # Vitest tests
```

## License

MIT
