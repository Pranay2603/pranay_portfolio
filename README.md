# Pranay Gupta — Portfolio

Built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Structure

- `data/resume.ts` — all content (projects, experience, skills, links), sourced directly from the resume. Edit this file to update copy without touching components.
- `components/` — one component per section (Hero, Projects, Stack, etc).
- `components/RagDiagram.tsx` — the interactive pipeline diagram for the featured ResolveAI project.
- `app/globals.css` — design tokens (colors, etc) at the top as CSS variables.

## Notes

- Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via `next/font/google` — this requires internet access at build time.
- Update `metadataBase` in `app/layout.tsx` once you have a real domain, for correct Open Graph previews.
- The favicon at `app/favicon.ico` is the default placeholder — swap it for your own.
