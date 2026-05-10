# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install deps
npm run dev        # next dev on 0.0.0.0:3000
npm run build      # next build
npm run start      # next start on 0.0.0.0:3000 (production)
npm run lint       # next lint
```

There is no test runner configured in this project.

## Environment

- `GEMINI_API_KEY` and `APP_URL` are injected at runtime by AI Studio (the deploy target — see [README.md](README.md) and [.env.example](.env.example)). Locally, set `GEMINI_API_KEY` in `.env.local`.
- `@google/genai` is a declared dependency but is not currently imported anywhere — the site is a static marketing site today. Don't remove the dep without checking with the user; it's the seam for planned AI features.

## Stack

- **Next.js 16** with the App Router (`app/` directory). React 19. TypeScript.
- **Tailwind CSS v4** with the CSS-first config — there is **no `tailwind.config.js`**. Theme tokens (fonts, brand colors) live in `@theme { ... }` inside [app/globals.css](app/globals.css), and shared component classes are defined in `@layer components` in the same file (e.g. `sleek-card`, `orange-gradient-text`, `light-ray`, `nav-link`).
- **Animations:** `motion` package (imported as `motion/react`), not `framer-motion`. Most section components are `"use client"` because of this.
- **Icons:** `lucide-react`.
- The `package.json` also lists `vite`, `@vitejs/plugin-react`, and `express`. These are leftovers from the AI Studio template and are not used by the Next.js build — don't be misled into switching tooling.

## Path alias

`tsconfig.json` maps `@/*` to the **project root**, so imports look like `@/src/components/sections/Hero` and `@/app/...`. Note this differs from the common Next.js convention of `@/*` pointing at `src/` — keep the `src/` segment in your import paths.

## Architecture

This is a single marketing site for Entrext.

- [app/page.tsx](app/page.tsx) is the home page and is essentially a composition of section components from [src/components/sections/](src/components/sections/) wrapped by `Navbar`, `Footer`, and a `GlowBackground` from [src/components/layout/](src/components/layout/). To rearrange or add a homepage section, edit this file.
- The other routes under `app/` (`apply/`, `blog/`, `ecosystem/`, `edge/`, `labs/`, `pro/`, `products/`) each contain a single `page.tsx` and are linked from [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx).
- [app/layout.tsx](app/layout.tsx) sets `<html>`/`<body>`, imports `globals.css`, and embeds JSON-LD structured data for SEO. [app/sitemap.ts](app/sitemap.ts) and [app/robots.ts](app/robots.ts) handle sitemap/robots.
- **Content vs. presentation:** structured copy (divisions, products, principles, FAQ, etc.) lives in [src/constants/data.ts](src/constants/data.ts) and is consumed by section components. Add or change marketing copy there rather than hard-coding it in components.
- **Component layering:**
  - `src/components/layout/` — chrome (Navbar, Footer, GlowBackground)
  - `src/components/sections/` — full-width homepage sections
  - `src/components/ui/` — reusable presentational primitives used by sections (cards, FAQ items, headers)

## Design system conventions

- Brand color is `#ff4d00`, exposed as the Tailwind utility `brand-orange` (and the soft variants `brand-orange-soft` / `glow-orange`) via `@theme` in `globals.css`. Use `bg-brand-orange`, `text-brand-orange`, `border-brand-orange/30`, etc., rather than re-typing the hex.
- Default page is dark: black background, white text, orange accents. New sections should match this — use the existing component classes (`sleek-card`, `gradient-text`, `orange-gradient-text`, `brutalist-border`) before inventing new ones.
- Fonts are loaded from Google Fonts at the top of `globals.css` and exposed as `font-sans` (Urbanist), `font-display`/`font-premium` (Instrument Serif), `font-mono` (JetBrains Mono), and `font-doodle` (Gochi Hand).
