# Portfolio Website — Design Spec

## Overview

A single-page developer portfolio for Jeremias Santos with a terminal/developer aesthetic. Built as a static Next.js 16 app with i18n support (English + Portuguese), dark/light theming, and responsive mobile-first section behavior.

## Stack

- **Runtime**: Next.js 16 (App Router, SSG)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS (custom UI primitives, no component library)
- **i18n**: next-intl (static rendering)
- **Theming**: next-themes + CSS variables
- **Fonts**: JetBrains Mono (headings/nav/badges), IBM Plex Mono (body/descriptions)
- **Deployment**: Vercel (standard SSG, not `output: 'export'`)
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css             # CSS variables, Tailwind imports
│   │   └── [locale]/
│   │       ├── layout.tsx          # Root layout (fonts, theme, i18n)
│   │       └── page.tsx            # Composes all sections
│   ├── components/
│   │   ├── ui/                     # Primitives
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── section-header.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── lang-switcher.tsx
│   │   ├── sections/               # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── technologies-section.tsx
│   │   │   ├── technology-card.tsx
│   │   │   └── contact-section.tsx
│   │   ├── layout/                 # Navbar, Footer
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   └── providers.tsx           # Theme + i18n providers
│   ├── data/                       # Static TypeScript data
│   │   ├── profile.ts              # Profile info + social/contact channels
│   │   ├── projects.ts
│   │   └── technologies.ts
│   ├── i18n/
│   │   ├── routing.ts              # next-intl locale/routing config
│   │   └── request.ts              # next-intl server request config
│   ├── middleware.ts                # next-intl middleware (locale redirect)
│   └── messages/
│       ├── en.json
│       └── pt.json
├── public/
│   └── images/
│       ├── profile/
│       └── projects/
├── AGENTS.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Routing & SSG

- Single route: `[locale]/page.tsx`
- `generateStaticParams` outputs `/en` and `/pt`
- Default locale: `pt` (Brazilian Portuguese)

### Middleware (`src/middleware.ts`)

Uses `createMiddleware` from `next-intl/middleware` with the routing config from `src/i18n/routing.ts`:
- Locales: `["pt", "en"]`, default: `"pt"`
- Matcher: `["/((?!api|_next|.*\\..*).*)"]` — skips API routes, static files, and Next.js internals
- `/` redirects to `/pt`

### SSG Wiring (`[locale]/layout.tsx`)

```tsx
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.json`)).default;
  // wrap children with NextIntlClientProvider + ThemeProvider
  // navbar is fixed and page content uses pt-16 to avoid overlap
}
```

### next.config.ts

Uses `createNextIntlPlugin` wrapper from `next-intl/plugin`:
```ts
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
export default withNextIntl({ /* next config */ });
```

## Theming

### Mechanism

`next-themes` adds a class (`dark` or `light`) to `<html>`. CSS variables switch accordingly. Dark is the default.

### Dark Theme (default)

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0A` | Page background |
| `--bg-surface` | `#0F0F0F` | Card/carousel backgrounds |
| `--bg-active` | `#1F1F1F` | Active states |
| `--border` | `#2A2A2A` | All borders |
| `--text-emphasis` | `#FFFFFF` | Headings |
| `--text-primary` | `#FAFAFA` | Body text |
| `--text-secondary` | `#6B7280` | Descriptions |
| `--text-tertiary` | `#4B5563` | Muted elements |
| `--accent-green` | `#10B981` | Primary accent |
| `--accent-cyan` | `#06B6D4` | Backend category |
| `--accent-amber` | `#F59E0B` | Database category |
| `--accent-purple` | `#8B5CF6` | DevOps category |

### Light Theme

| Token | Value |
|---|---|
| `--bg-primary` | `#FAFAFA` |
| `--bg-surface` | `#F5F5F5` |
| `--bg-active` | `#E5E5E5` |
| `--border` | `#E5E7EB` |
| `--text-emphasis` | `#0A0A0A` |
| `--text-primary` | `#171717` |
| `--text-secondary` | `#6B7280` |
| `--text-tertiary` | `#9CA3AF` |
| Accents | Same as dark |

## Typography

| Role | Font | Weight | Sizes |
|---|---|---|---|
| Logo | JetBrains Mono | 700 (prompt), 500 (text) | 20px / 18px |
| Nav links | JetBrains Mono | 400 | 13px |
| Section titles | JetBrains Mono | 700 | 28px |
| Hero title | JetBrains Mono | 700 | 56px, line-height 1.1 |
| Project card titles | JetBrains Mono | 700 | 22px |
| About name | JetBrains Mono | 700 | 36px |
| Body / descriptions | IBM Plex Mono | 400 | 13-14px, line-height 1.6-1.7 |
| Badges | JetBrains Mono | 400 | 11px |
| Buttons | JetBrains Mono | 500 | 12-13px |

## UI Primitives

### Button

Two variants:
- **primary**: `--accent-green` background, `--bg-primary` text, `$ label` format
- **ghost**: transparent background, `--border` border, `--text-primary` text, `$ label` format

Padding: 12px 24px (hero CTAs), 8px 16px (card buttons).

### Badge

Border-only container. Padding: 4px 10px (project badges), 6px 12px (tech section badges).

Badge text is `--accent-green` by default. Components can override color via `className`; technology cards apply category accent colors (green/cyan/amber/purple) to their badges.

### Card

Bordered container (`--border` 1px) on `--bg-primary`. Used for project cards, tech cards, contact cards. Flexible layout via props.

### SectionHeader

Reusable pattern: `// title ————————`
- `//` in `--accent-green`, JetBrains Mono 14px bold
- Title in `--text-emphasis`, JetBrains Mono 28px bold
- Expanding `--border` line filling remaining space
- Gap between elements: 12px

### Carousel (client component)

Image slider with:
- Left/right arrows (`<<` / `>>`) with semi-transparent dark background (`#0A0A0ACC`) and green border — stays dark in both themes for contrast on images
- Dot indicators (active = green 8px, inactive = tertiary 6px)
- Fixed width 420px, fills container height (320px in project cards)

### ThemeToggle (client component)

Segmented control with three buttons: dark / light / system.
- Active button: `--bg-active` background, `--accent-green` text, border
- Inactive: transparent, `--text-secondary` text, border
- JetBrains Mono 12px

### LangSwitcher (client component)

Bordered pill showing current locale (`português` / `english`).
- Dropdown or toggle to switch
- JetBrains Mono 12px, `--text-secondary`

## Sections

### Navbar

- **Height**: 64px, bottom border
- **Position**: fixed top bar (`top: 0`) with content offset (`pt-16`) in layout
- **Desktop (`md+`)**:
  - **Left**: Logo (`> jeremias.dev`) + nav links (projects, about, technologies, contact)
  - **Right**: LangSwitcher + ThemeToggle (dark/light/system)
- **Mobile (`<md`)**:
  - **Left**: Logo only
  - **Right**: Menu icon button
  - **Menu panel**: section links, locale buttons, and light/dark theme actions
- **Nav links**: scroll to section anchors

### Hero Section

- **Desktop (`lg+`)**: horizontal, text left + image right, gap 60px
- **Mobile**: vertical flow in this order: image -> text -> CTA buttons
- **Image**: responsive sizes (mobile up to desktop 480x480), bordered
- **Content**: tag (`$ // full_stack_developer`), translated two-line title, description, primary + ghost CTA
- **Section spacing**: responsive horizontal/vertical paddings

### Projects Section

- **Padding**: responsive (`px-4` -> `lg:px-20`, `py-14` -> `lg:py-20`)
- **Content width**: 960px centered
- **Header**: SectionHeader with "projects"
- **Cards**: rendered via dedicated `ProjectCard` component
- **Desktop card layout**: alternating horizontal arrangement (carousel/info)
- **Mobile card layout**: vertical flow per card: carousel -> text -> tech stack (wrap) -> buttons
- **Card info**: Index `[01]`, title, description, tech badges, repo + live demo buttons
- **Gap between cards**: responsive (`space-y-8`/`space-y-10`)

### About Section

- **Padding**: responsive (`px-4` -> `lg:px-20`, `py-14` -> `lg:py-20`)
- **Content width**: 960px centered
- **Header**: SectionHeader with "about me"
- **Desktop (`lg+`)**: horizontal, text left + image right (gap 60px)
- **Mobile**: vertical flow in this order: image -> text
- **Left**: `$ whoami` label, name "Jeremias Santos" (36px), role "Full Stack Developer", bio paragraph, location (map-pin icon + "Brazil"), availability (green dot + "available for work")
- **Right**: responsive bordered image (up to 380x420 on desktop)

### Technologies Section

- **Padding**: responsive (`px-4` -> `lg:px-20`, `py-14` -> `lg:py-20`)
- **Content width**: 960px centered
- **Header**: SectionHeader with "technologies"
- **Grid**: 1 column on mobile, 2 columns on `md+`
- **Cards**: rendered via dedicated `TechnologyCard` component
- **Card content**: category icon + translated category title + wrapped tech badges with category accent color
- **Data source**: category/item values come directly from `src/data/technologies.ts`

### Contact Section

- **Padding**: responsive (`px-4` -> `lg:px-20`, `py-14` -> `lg:py-20`)
- **Content width**: 960px centered
- **Header**: SectionHeader with "contact"
- **Description**: "interested in working together? feel free to reach out through any of the channels below." (max-width 600px)
- **Layout order**: text block first, links grid after
- **Cards grid**: 1 column on mobile, 2 columns on `sm`, 4 columns on `lg`
- **Contact values**: rendered from `profile.contacts` data
- **Availability**: green dot + "available for work"

### Footer

- **Padding**: responsive (`px-4` -> `lg:px-20`)
- **Layout**: centered and vertical text flow
- **Content**:
  - `© 2026 jeremias santos. ...`
  - `built with` + `next.js` badge + `&` + `typescript` badge

## Data Files

### `src/data/profile.ts`

Single source for profile and contact data (no separate contact.ts — avoids duplicating URLs):

```ts
export const profile = {
  name: "Jeremias Santos",
  role: "Full Stack Developer",
  location: "Brazil",
  availableForWork: true,
  heroImage: "/images/profile/hero-placeholder.svg",
  aboutImage: "/images/profile/about-placeholder.svg",
  contacts: [
    { type: "location", icon: "map-pin", accentColor: "green", value: "Brazil", href: null },
    { type: "email", icon: "mail", accentColor: "cyan", value: "jeremiassnts3@gmail.com", href: "mailto:jeremiassnts3@gmail.com" },
    { type: "github", icon: "github", accentColor: "amber", value: "jeremiassnts", href: "https://github.com/jeremiassnts" },
    { type: "linkedin", icon: "linkedin", accentColor: "purple", value: "in/jeremias-santos-b98674119", href: "https://linkedin.com/in/jeremias-santos-b98674119" },
  ],
};
```

### `src/data/projects.ts`

Array of project objects with: `slug`, `images: string[]`, `techStack: string[]`, `repoUrl`, `liveUrl`. The `slug` doubles as the i18n key — e.g., slug `"task_flow"` maps to `projects.items.task_flow.title` and `projects.items.task_flow.description` in the message files.

### `src/data/technologies.ts`

Array of category objects with: `category`, `icon` (lucide name), `accentColor`, `items: string[]`. Technology names (react, next.js, etc.) are proper nouns and stay as plain strings. Category labels are rendered via i18n keys in `messages/*.json` (`technologies.categories.*`).

## i18n Message Structure

```json
{
  "nav": { "projects": "...", "about": "...", "technologies": "...", "contact": "..." },
  "hero": { "tag": "...", "titleLine1": "...", "titleLine2": "...", "description": "...", "ctaPrimary": "...", "ctaSecondary": "..." },
  "projects": { "title": "...", "items": { "task_flow": { "title": "...", "description": "..." }, ... } },
  "about": { "title": "...", "whoami": "...", "description": "...", "availableForWork": "..." },
  "technologies": { "title": "...", "categories": { "frontend": "...", "backend": "...", "database": "...", "devops": "..." } },
  "contact": { "title": "...", "description": "...", "location": "...", "email": "...", "github": "...", "linkedin": "..." },
  "footer": { "copyright": "...", "builtWith": "..." }
}
```

## Tailwind Config

`tailwind.config.ts` extends the theme to map CSS variables to Tailwind utilities:

```ts
theme: {
  extend: {
    colors: {
      surface: {
        DEFAULT: "var(--bg-primary)",
        card: "var(--bg-surface)",
        active: "var(--bg-active)",
      },
      border: "var(--border)",
      foreground: {
        DEFAULT: "var(--text-primary)",
        emphasis: "var(--text-emphasis)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
      },
      accent: {
        green: "var(--accent-green)",
        cyan: "var(--accent-cyan)",
        amber: "var(--accent-amber)",
        purple: "var(--accent-purple)",
      },
    },
    fontFamily: {
      mono: ["var(--font-jetbrains)"],
      body: ["var(--font-ibm-plex)"],
    },
  },
}
```

This allows usage like `bg-surface`, `bg-surface-card`, `text-foreground`, `text-foreground-emphasis`, `text-accent-green`, `border-border`, `font-mono`, `font-body`.

## Code Language Convention

All code must be written in English:
- Variable names, function names, type names, constants
- Code comments
- Documentation (README, AGENTS.md, specs)
- Git commit messages
- File and directory names

Only the i18n message files (`messages/pt.json`) contain Portuguese content. Everything else is English.

## What This Spec Does Not Cover

- SEO/metadata (robots.txt, sitemap, Open Graph) — will be added after core implementation
- Animations/transitions — can be layered on later
- Actual project content (real project data) — placeholder data first
