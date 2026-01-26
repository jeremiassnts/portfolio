# Portfolio - Professional Fullstack Developer

> **📝 DOCUMENTATION STANDARD**: All project documentation MUST be written in English. This ensures consistency and accessibility for the international development community. See [DOCUMENTATION_STANDARDS.md](./DOCUMENTATION_STANDARDS.md) for details.

Modern, international-ready portfolio built with Next.js 16, focusing on real products and practical impact.

## 📚 Documentation

**Complete implementation guide available in [/docs](./docs/)**

- **[Implementation Plan](./docs/IMPLEMENTATION_PLAN.md)** - Architecture and overview
- **[Step-by-Step Guide](./docs/IMPLEMENTATION_PHASES.md)** - 10 phases for execution
- **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Folder organization
- **[Types & Schemas](./docs/TYPES_AND_SCHEMAS.md)** - TypeScript definitions
- **[Mock Data](./docs/MOCK_DATA.md)** - Example projects and content
- **[Dependencies](./docs/DEPENDENCIES.md)** - Libraries and trade-offs
- **[SEO Strategy](./docs/SEO_STRATEGY.md)** - Metadata and optimization
- **[Accessibility](./docs/ACCESSIBILITY.md)** - WCAG 2.1 AA compliance

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3001
```

## 🎯 Project Goals

- **Portfolio-focused**: Real products, not a resume
- **International**: English (default) + Portuguese
- **Modern**: Next.js 16 App Router, React 19, TypeScript
- **Performant**: React Compiler, optimized images, Core Web Vitals
- **Accessible**: WCAG 2.1 AA, keyboard navigation, screen reader friendly
- **SEO-optimized**: Metadata, structured data, sitemap

## 🛠️ Tech Stack

### Core
- **Next.js 16** - App Router with typed routes
- **React 19** - With React Compiler enabled
- **TypeScript** - Strict mode
- **Turborepo** - Monorepo build system
- **pnpm** - Package manager

### Styling & UI
- **TailwindCSS v4** - Utility-first CSS
- **shadcn/ui** - Component system (base-lyra)
- **next-themes** - Light/Dark mode
- **Lucide React** - Icons

### Features
- **next-intl** - Internationalization (i18n)
- **tRPC** - Type-safe API layer
- **React Query** - Data fetching
- **Zod** - Schema validation

## 📁 Project Structure

```
portfolio/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── src/
│       │   ├── app/
│       │   │   └── [locale]/   # i18n routes (en, pt)
│       │   ├── components/     # React components
│       │   ├── data/           # Mock data
│       │   ├── lib/            # Utilities
│       │   ├── messages/       # i18n translations
│       │   └── types/          # TypeScript types
│       └── public/
│           └── images/         # Optimized images (WebP)
├── packages/
│   ├── api/                    # tRPC API layer
│   ├── config/                 # Shared configs
│   └── env/                    # Environment variables
└── docs/                       # 📚 Implementation guides
```

## 🎨 Features

### Sections
1. **Hero** - Value proposition and CTAs
2. **Projects** - Curated portfolio projects
3. **About** - Professional bio
4. **Technologies** - Tech stack showcase
5. **Contact** - Social links and email

### Technical Features
- ✅ Multi-language (EN/PT) with next-intl
- ✅ Light/Dark theme with next-themes
- ✅ SEO-optimized (metadata, sitemap, structured data)
- ✅ Image optimization (WebP, responsive)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Performance (React Compiler, Core Web Vitals)
- ✅ Type-safe APIs with tRPC
- ✅ Responsive design (mobile-first)

## 🏗️ Implementation Status

Follow the [Implementation Phases](./docs/IMPLEMENTATION_PHASES.md) guide:

- [ ] Phase 1: Foundation & Configuration
- [ ] Phase 2: Types & Mock Data
- [ ] Phase 3: Layout & Navigation
- [ ] Phase 4: Homepage Sections
- [ ] Phase 5: Project Pages
- [ ] Phase 6: Full Internationalization
- [ ] Phase 7: Styling & Polish
- [ ] Phase 8: Performance Optimization
- [ ] Phase 9: Testing & Accessibility
- [ ] Phase 10: Deployment & SEO

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start all apps
pnpm dev:web          # Start web app only

# Production
pnpm build            # Build all apps
pnpm start            # Start production server

# Quality
pnpm check-types      # TypeScript type checking
```

## 🌐 Deployment

Optimized for deployment on [Vercel](https://vercel.com):

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push to main

## 📄 License

Private project - All rights reserved

---

**Note**: This is a planning and implementation phase. Follow the [docs](./docs/) for step-by-step guidance.
