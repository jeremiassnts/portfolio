# Project Structure

## Folder Organization

```
apps/web/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile.webp              # Profile image
│   │   └── projects/
│   │       ├── project-slug-1/
│   │       │   ├── hero.webp
│   │       │   └── screenshot-1.webp
│   │       └── project-slug-2/
│   │           └── hero.webp
│   └── og/                                # Open Graph images
│       ├── default-og.png
│       └── projects/
│           └── [project-slug]-og.png
│
├── src/
│   ├── app/
│   │   ├── [locale]/                      # i18n wrapper
│   │   │   ├── layout.tsx                 # Locale-aware root layout
│   │   │   ├── page.tsx                   # Homepage
│   │   │   ├── projects/
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx           # Detail page
│   │   │   │       └── opengraph-image.tsx # Dynamic OG image
│   │   │   └── not-found.tsx              # Localized 404
│   │   ├── sitemap.ts                     # Dynamic sitemap
│   │   ├── robots.ts                      # SEO robots.txt
│   │   └── manifest.ts                    # PWA manifest (optional)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx                 # Nav + theme + lang switcher
│   │   │   └── footer.tsx                 # Footer with links
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── technologies-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── project/
│   │   │   ├── project-card.tsx           # Grid card
│   │   │   ├── project-detail.tsx         # Full project view
│   │   │   ├── project-image-gallery.tsx
│   │   │   └── project-tech-stack.tsx
│   │   ├── ui/                            # shadcn components
│   │   └── common/
│   │       ├── language-switcher.tsx
│   │       ├── optimized-image.tsx        # next/image wrapper
│   │       └── section-container.tsx      # Reusable wrapper
│   │
│   ├── lib/
│   │   ├── utils.ts                       # Existing utilities
│   │   ├── constants.ts                   # Site config, links
│   │   ├── metadata.ts                    # SEO metadata generators
│   │   └── structured-data.ts             # JSON-LD generators
│   │
│   ├── data/
│   │   ├── projects.ts                    # Mock project data
│   │   ├── technologies.ts                # Tech stack
│   │   └── profile.ts                     # Profile information
│   │
│   ├── types/
│   │   ├── project.ts                     # Type definitions
│   │   └── index.ts                       # Barrel export
│   │
│   ├── messages/                          # Translation files
│   │   ├── en.json                        # English (default)
│   │   └── pt.json                        # Portuguese
│   │
│   └── i18n.ts                            # next-intl configuration
│
└── middleware.ts                          # i18n routing middleware
```

## Main Folder Descriptions

### `/public/images/`
All static images optimized in WebP format.

**Subfolders**:
- `profile/`: Profile image
- `projects/[slug]/`: Images for each project
- `og/`: Open Graph images for social sharing

### `/src/app/`
App Router structure with i18n support.

**Important files**:
- `[locale]/layout.tsx`: Root layout with providers and metadata
- `[locale]/page.tsx`: Homepage with all sections
- `sitemap.ts`: Dynamic XML sitemap
- `robots.ts`: robots.txt configuration

### `/src/components/`
All React components organized by category.

**Subfolders**:
- `layout/`: Header, Footer
- `sections/`: Homepage sections
- `project/`: Project-related components
- `ui/`: shadcn/ui components
- `common/`: Reusable components

### `/src/lib/`
Utility functions and helpers.

**Files**:
- `constants.ts`: Site configuration (name, URLs, social links)
- `metadata.ts`: Helpers to generate SEO metadata
- `structured-data.ts`: JSON-LD generators

### `/src/data/`
Mock data to be displayed in the portfolio.

**Files**:
- `projects.ts`: Project list (3-5 examples)
- `technologies.ts`: Categorized tech stack
- `profile.ts`: Personal information and bio

### `/src/types/`
TypeScript type definitions.

**Files**:
- `project.ts`: Project-related types
- `index.ts`: Barrel export of all types

### `/src/messages/`
Translation files for i18n.

**Files**:
- `en.json`: English translations
- `pt.json`: Portuguese translations

## Naming Conventions

### Components
- Use `kebab-case.tsx`
- Example: `hero-section.tsx`, `project-card.tsx`

### Types
- Use `kebab-case.ts`
- Example: `project.ts`, `technology.ts`

### Data
- Use `kebab-case.ts`
- Example: `projects.ts`, `technologies.ts`

### Images
- Use `kebab-case.webp`
- Example: `profile.webp`, `hero.webp`, `screenshot-1.webp`

## Future File Structure (Optional)

When expanding the portfolio, consider adding:

```
src/
├── hooks/                      # Custom React hooks
├── contexts/                   # React contexts
├── styles/                     # Additional global styles
└── config/                     # Configuration files
```

## Image Requirements

### Profile Image
- **Format**: WebP
- **Size**: 400x400px (1:1 square)
- **Optimized**: < 50KB
- **Location**: `/public/images/profile/profile.webp`

### Project Images
- **Format**: WebP
- **Hero**: 1200x630px (1.9:1 Open Graph ratio)
- **Screenshots**: 1920x1080px (16:9 ratio)
- **Optimized**: < 200KB per image
- **Naming**: `hero.webp`, `screenshot-1.webp`, etc.

### Open Graph Images
- **Format**: PNG or WebP
- **Size**: 1200x630px
- **Optimized**: < 300KB
- **Location**: `/public/og/`
