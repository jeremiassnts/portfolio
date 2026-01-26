# Implementation Phases

> **📝 DOCUMENTATION STANDARD**: All project documentation MUST be written in English. This ensures consistency and accessibility for the international development community. When creating or updating documentation, always use English.

Step-by-step guide to implement the complete portfolio.

---

## Phase 1: Foundation & Setup

**Objective**: Set up i18n, basic SEO, and type structure.

### 1.1: Install Dependencies

```bash
cd apps/web
pnpm add next-intl react-intersection-observer
```

### 1.2: Configure i18n

**Create configuration file**:

```typescript
// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
```

**Create middleware**:

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Create translation files**:

```json
// src/messages/en.json
{
  "nav": {
    "projects": "Projects",
    "about": "About",
    "technologies": "Technologies",
    "contact": "Contact"
  },
  "hero": {
    "title": "Building scalable products for international markets",
    "cta": {
      "projects": "View Projects",
      "contact": "Get in Touch"
    }
  }
}
```

```json
// src/messages/pt.json
{
  "nav": {
    "projects": "Projetos",
    "about": "Sobre",
    "technologies": "Tecnologias",
    "contact": "Contato"
  },
  "hero": {
    "title": "Construindo produtos escaláveis para mercados internacionais",
    "cta": {
      "projects": "Ver Projetos",
      "contact": "Entre em Contato"
    }
  }
}
```

**Update route structure**:

```bash
# Move app/layout.tsx to app/[locale]/layout.tsx
mkdir -p src/app/[locale]
mv src/app/layout.tsx src/app/[locale]/layout.tsx
mv src/app/page.tsx src/app/[locale]/page.tsx
```

**Update root layout**:

```typescript
// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {/* ... */}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 1.3: Configure Site Constants

```typescript
// src/lib/constants.ts
import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Your Name',
  description: 'Fullstack Developer building scalable products',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  ogImage: '/og/default-og.png',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
  locales: ['en', 'pt'],
  defaultLocale: 'en',
};
```

### 1.4: Setup SEO

**Create metadata helpers**:

```typescript
// src/lib/metadata.ts
import type { Metadata } from 'next';
import { siteConfig } from './constants';

export function createMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  images,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  images?: { url: string; width: number; height: number; alt: string }[];
}): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  const defaultImages = [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: images || defaultImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images?.[0]?.url || siteConfig.ogImage,
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${siteConfig.url}/en${path}`,
        'pt': `${siteConfig.url}/pt${path}`,
      },
    },
  };
}
```

**Create sitemap**:

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = siteConfig.locales;
  
  const homepages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  return homepages;
}
```

**Create robots.txt**:

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```

**✅ Phase 1 Checklist**:
- [ ] Dependencies installed
- [ ] i18n configured (middleware + messages)
- [ ] Routes moved to [locale]
- [ ] Site config created
- [ ] Metadata helpers created
- [ ] Sitemap and robots.txt configured
- [ ] Test: `pnpm dev` and access `/en` and `/pt`

---

## Phase 2: Types & Mock Data

**Objective**: Define type structure and create mock data.

### 2.1: Create Types

```bash
mkdir -p src/types
```

**Copy definitions**:
- Use types defined in `docs/TYPES_AND_SCHEMAS.md`
- Create files: `project.ts`, `technology.ts`, `profile.ts`, `site.ts`
- Create barrel export in `index.ts`

### 2.2: Create Mock Data

```bash
mkdir -p src/data
```

**Copy data**:
- Use data from `docs/MOCK_DATA.md`
- Create files: `projects.ts`, `technologies.ts`, `profile.ts`

### 2.3: Add Placeholder Images

```bash
mkdir -p public/images/{profile,projects,og}
```

**Create placeholders**:
- Use https://placehold.co/ temporarily
- Structure: `public/images/projects/[slug]/hero.webp`
- Add to `.gitignore` if necessary

**✅ Phase 2 Checklist**:
- [ ] Types created in `src/types/`
- [ ] Mock data created in `src/data/`
- [ ] Image folder structure created
- [ ] Placeholders added
- [ ] Test: import types and data without errors

---

## Phase 3: Layout & Navigation

**Objective**: Create header, footer, and layout components.

### 3.1: Create Enhanced Header

```bash
mkdir -p src/components/layout
```

**Create component**:

```typescript
// src/components/layout/header.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageSwitcher } from '@/components/common/language-switcher';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          YourName
        </Link>
        
        <nav className="flex items-center gap-6">
          <a href="#projects" className="hover:text-primary">
            {t('projects')}
          </a>
          <a href="#about" className="hover:text-primary">
            {t('about')}
          </a>
          <a href="#technologies" className="hover:text-primary">
            {t('technologies')}
          </a>
          <a href="#contact" className="hover:text-primary">
            {t('contact')}
          </a>
          
          <div className="flex items-center gap-2 ml-4 border-l pl-4">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
```

### 3.2: Create Language Switcher

```typescript
// src/components/common/language-switcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex gap-1">
      <Button
        variant={locale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('en')}
      >
        EN
      </Button>
      <Button
        variant={locale === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('pt')}
      >
        PT
      </Button>
    </div>
  );
}
```

### 3.3: Create Footer

```typescript
// src/components/layout/footer.tsx
import { siteConfig } from '@/lib/constants';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          
          <div className="flex gap-4">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### 3.4: Update Root Layout

```typescript
// src/app/[locale]/layout.tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default async function LocaleLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**✅ Phase 3 Checklist**:
- [ ] Header created with navigation
- [ ] Language switcher functional
- [ ] Footer created
- [ ] Layout updated
- [ ] Test navigation and language switching

---

## Phase 4: Homepage Sections

**Objective**: Implement all sections of the home page.

### 4.1: Hero Section

```bash
mkdir -p src/components/sections
```

See next message for continuation of phases...

**✅ Checklist by Section**:
- [ ] Hero Section
- [ ] Projects Section
- [ ] About Section
- [ ] Technologies Section
- [ ] Contact Section

---

## Phase 5: Project Pages

**Objective**: Create project detail pages.

### 5.1: Create Route Structure

```bash
mkdir -p src/app/[locale]/projects/[slug]
```

### 5.2: Project Detail Page

```typescript
// src/app/[locale]/projects/[slug]/page.tsx
```

### 5.3: Project Components

```bash
mkdir -p src/components/project
```

- `project-card.tsx`
- `project-detail.tsx`
- `project-tech-stack.tsx`

**✅ Phase 5 Checklist**:
- [ ] Project routes created
- [ ] Detail page implemented
- [ ] Dynamic metadata configured
- [ ] Project components created
- [ ] Navigation between projects functional

---

## Phase 6: Complete Internationalization

**Objective**: Translate all content.

### 6.1: Complete Translations

- Translate all UI texts
- Translate project descriptions (optional: use different versions)
- Translate form labels

### 6.2: Test Both Languages

- Verify all pages in EN and PT
- Verify language switching maintains current page
- Verify metadata in both languages

**✅ Phase 6 Checklist**:
- [ ] All texts translated
- [ ] Both languages work correctly
- [ ] Smooth language switching
- [ ] SEO configured for both

---

## Phase 7: Styling & Polish

**Objective**: Refine design and add animations.

### 7.1: Design System

- Review colors and contrast
- Adjust spacing
- Optimize typography
- Add subtle animations

### 7.2: Responsiveness

- Test mobile (320px - 768px)
- Test tablet (768px - 1024px)
- Test desktop (1024px+)

### 7.3: Dark Mode

- Verify all components in dark mode
- Adjust contrast if necessary

**✅ Phase 7 Checklist**:
- [ ] Design system refined
- [ ] Fully responsive
- [ ] Perfect dark mode
- [ ] Animations implemented

---

## Phase 8: Performance

**Objective**: Optimize performance and Core Web Vitals.

### 8.1: Optimize Images

- Convert to WebP
- Generate responsive sizes
- Add blur placeholders

### 8.2: Code Splitting

- Lazy load heavy components
- Dynamic imports when appropriate

### 8.3: Caching

- Configure cache headers
- Implement ISR if necessary

**✅ Phase 8 Checklist**:
- [ ] Images optimized
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals green
- [ ] Bundle size optimized

---

## Phase 9: Testing & Accessibility

**Objective**: Ensure quality and accessibility.

### 9.1: Accessibility Audit

- Run Lighthouse
- Run axe DevTools
- Test keyboard navigation
- Test with screen reader

### 9.2: Cross-Browser Testing

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

**✅ Phase 9 Checklist**:
- [ ] Accessibility score > 90
- [ ] Perfect keyboard navigation
- [ ] Screen reader friendly
- [ ] Cross-browser compatible

---

## Phase 10: Deploy & SEO

**Objective**: Deploy to production and configure SEO.

### 10.1: Pre-Deploy

- Update environment variables
- Configure production URL
- Test production build

### 10.2: Deploy

```bash
# Vercel (recommended)
vercel --prod

# Or configure CI/CD via GitHub
```

### 10.3: Post-Deploy SEO

- Submit sitemap to Google Search Console
- Verify indexing
- Test Open Graph tags
- Configure analytics (optional)

**✅ Phase 10 Checklist**:
- [ ] Deployed to production
- [ ] Domain configured
- [ ] SSL active
- [ ] Sitemap submitted
- [ ] Analytics configured
- [ ] Open Graph tested

---

## Next Steps After MVP

1. Replace mock data with real data
2. Add more projects
3. Implement blog (optional)
4. Add functional contact form
5. Integrate CMS (Contentful/Sanity)
6. Add advanced animations (framer-motion)
7. Implement PWA
8. Add automated tests

---

## Useful Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Analyze bundle
pnpm build -- --analyze

# Type checking
pnpm check-types

# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml && pnpm install
```
