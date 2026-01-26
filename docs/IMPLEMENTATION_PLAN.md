# Portfolio Implementation Plan

## Overview

This document describes the complete implementation plan for a professional portfolio, focused on the international market for full-time and freelance/contract positions.

## Goal

Create a modern portfolio focused on real products and practical impact - not a resume or LinkedIn-style profile. Detailed professional history will remain on LinkedIn.

## Tech Stack

### Already Implemented ✅
- **Monorepo**: Turborepo with pnpm workspaces
- **Framework**: Next.js 16.1.1 (App Router + typed routes)
- **Styling**: TailwindCSS v4 + shadcn/ui (base-lyra)
- **Theme**: next-themes (light/dark mode)
- **Type Safety**: TypeScript (strict mode)
- **Performance**: React 19 with React Compiler
- **API Layer**: tRPC

### To Implement
- **i18n**: next-intl (App Router support)
- **Images**: Optimized WebP via next/image
- **SEO**: Metadata API, structured data, sitemap
- **Animations**: react-intersection-observer

## Main Architectural Decisions

### 1. Internationalization Strategy
- **Library**: next-intl
- **URL Pattern**: `/[locale]/...` (e.g.: `/en`, `/pt`)
- **Default Language**: English (EN)
- **Supported Languages**: EN, PT

**Rationale**: Native App Router support, type-safe, SEO-friendly.

### 2. Project Detail Pages
- **Pattern**: Dedicated routes (`/[locale]/projects/[slug]`)
- **Don't use**: Modals or overlays

**Rationale**:
- Better SEO (dedicated URLs, metadata per project)
- Shareable links
- Browser history support
- Progressive enhancement
- Better canvas for storytelling

### 3. Content Strategy
- **Phase 1**: Local data (TypeScript/JSON)
- **Phase 2** (Future): Migration to headless CMS (Contentful/Sanity/Payload)

**Rationale**: Start simple, maintain flexibility.

## Detailed Documentation

Implementation is divided into specific documents:

1. **[Project Structure](./PROJECT_STRUCTURE.md)** - Folder and file organization
2. **[Types and Schemas](./TYPES_AND_SCHEMAS.md)** - TypeScript definitions and data structures
3. **[Mock Data](./MOCK_DATA.md)** - Example projects and content
4. **[Dependencies](./DEPENDENCIES.md)** - Libraries and justifications
5. **[SEO Strategy](./SEO_STRATEGY.md)** - Metadata, structured data, sitemap
6. **[Accessibility](./ACCESSIBILITY.md)** - Standards and WCAG 2.1 AA checklist
7. **[Implementation Phases](./IMPLEMENTATION_PHASES.md)** - Step-by-step guide

## Portfolio Sections

1. **Hero** - Value proposition, not job titles
2. **Selected Projects** - Quality-focused curation
3. **About** - Concise professional bio
4. **Technologies** - Categorized tech stack
5. **Contact** - Links and contact information

## Next Steps

1. Review and confirm alignment with vision
2. Start with **Phase 1** (Foundation & Configuration)
3. Follow phases sequentially
4. Keep documentation updated as you progress

## Development Conventions

### File Naming
- Components: `kebab-case.tsx` (e.g.: `hero-section.tsx`)
- Types: `kebab-case.ts` (e.g.: `project.ts`)
- Data: `kebab-case.ts` (e.g.: `projects.ts`)

### Component Structure
```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Component definition
// 4. Exports (default export)
```

### Commit Strategy
- Semantic commits: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`
- One feature per commit
- Descriptive messages

## Route Structure

```
/                           → Redirect to /en
/en                         → Homepage (English)
/en/projects/[slug]         → Project detail page (English)
/pt                         → Homepage (Portuguese)
/pt/projects/[slug]         → Project detail page (Portuguese)
/sitemap.xml                → Dynamic sitemap (all locales)
/robots.txt                 → SEO robots configuration
```

## Testing Checklist (per feature)

- [ ] Desktop responsive (1920px, 1440px, 1024px)
- [ ] Mobile responsive (428px, 375px, 320px)
- [ ] Dark mode works correctly
- [ ] Both languages work
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] No console errors
- [ ] Images optimized and loading

## Future Enhancements (Post-MVP)

1. CMS Integration
2. Blog Section
3. Detailed Case Studies
4. Functional Contact Form
5. Analytics (Vercel Analytics or Plausible)
6. Advanced Animations (framer-motion)
7. Resume Download (generated PDF)
8. Testimonials
9. PWA (offline support)
10. Project Search

## Estimate

**10 phases** that can be completed incrementally.

Start with Phase 1 and work sequentially.
