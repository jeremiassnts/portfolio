# Jeremias Santos Portfolio

A personal portfolio focused on performance, i18n, and a terminal/developer visual style.

- Production: [https://jeremiassnts.vercel.app/](https://jeremiassnts.vercel.app/)
- Design spec: [docs/superpowers/specs/2026-03-17-portfolio-design.md](docs/superpowers/specs/2026-03-17-portfolio-design.md)

## Overview

Single-page application with:

- section-based navigation (`projects`, `about`, `technologies`, `contact`)
- language support (`pt` and `en`)
- light/dark theme
- responsive layout (mobile-first behavior across main sections)

## Stack

- Next.js 16 (App Router, SSG)
- TypeScript
- Tailwind CSS
- next-intl (i18n)
- next-themes (theming)
- Lucide React (icons)
- pnpm

## Requirements

- Node.js 20.9+ (latest LTS recommended)
- pnpm installed globally

## Running locally

```bash
pnpm install
pnpm dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Useful scripts

- `pnpm dev` - start local development server
- `pnpm build` - create production build
- `pnpm start` - run production build
- `pnpm lint` - run linter
- `pnpm tsc --noEmit` - run TypeScript type-checking

## Main structure

```text
src/
  app/[locale]/         # Locale layout and main page
  components/layout/    # Navbar and Footer
  components/sections/  # Landing page sections
  components/ui/        # UI primitives
  data/                 # Static content (projects, technologies, profile)
  i18n/                 # Locale routing and request config
  messages/             # Translations (pt/en)
```
