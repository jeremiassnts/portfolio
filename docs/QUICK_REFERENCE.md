# Quick Reference Guide

Quick reference for commands, patterns, and useful snippets during development.

---

## 🚀 Essential Commands

```bash
# Development
pnpm dev                    # Start dev server (port 3001)
pnpm dev:web               # Start only web app
pnpm build                 # Production build
pnpm start                 # Start production locally

# Quality
pnpm check-types           # Check TypeScript
pnpm lint                  # Run linter (if configured)

# Dependencies
pnpm add [package]         # Add dependency
pnpm add -D [package]      # Add dev dependency
pnpm remove [package]      # Remove dependency
pnpm update                # Update dependencies

# Turborepo
turbo run build            # Build with Turbo
turbo run dev --filter=web # Dev only web
```

---

## 📁 Important Paths

```typescript
// TypeScript aliases (tsconfig.json)
'@/components/*'  → 'src/components/*'
'@/lib/*'         → 'src/lib/*'
'@/types/*'       → 'src/types/*'
'@/data/*'        → 'src/data/*'
'@/messages/*'    → 'src/messages/*'
```

---

## 🌐 i18n Snippets

### Use translations in Client Components

```tsx
'use client';

import { useTranslations } from 'next-intl';

export function Component() {
  const t = useTranslations('section');
  
  return <h1>{t('title')}</h1>;
}
```

### Use translations in Server Components

```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('section');
  
  return <h1>{t('title')}</h1>;
}
```

### Switch language

```tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button onClick={() => switchLocale('pt')}>
      PT
    </button>
  );
}
```

### Link with locale

```tsx
import { Link } from 'next-intl';

<Link href="/projects">Projects</Link>
// Automatically adds locale: /en/projects or /pt/projects
```

---

## 🎨 UI Components (shadcn)

### Add new component

```bash
cd apps/web
npx shadcn@latest add [component-name]

# Examples
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Use components

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button variant="default">Click me</Button>
<Card>Content</Card>
```

---

## 🖼️ Optimized Images

### Basic next/image

```tsx
import Image from 'next/image';

<Image
  src="/images/profile/profile.webp"
  alt="Profile picture"
  width={400}
  height={400}
  priority  // For images above the fold
/>
```

### With blur placeholder

```tsx
<Image
  src={project.images[0].src}
  alt={project.images[0].alt}
  width={1200}
  height={630}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Responsive

```tsx
<Image
  src="/hero.webp"
  alt="Hero"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 📄 Metadata (SEO)

### Static metadata

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

### Dynamic metadata

```tsx
export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  return {
    title: `${slug} | Your Name`,
    description: 'Description here',
    openGraph: {
      title: `${slug} | Your Name`,
      description: 'Description',
      images: ['/og-image.png'],
    },
  };
}
```

### Structured Data (JSON-LD)

```tsx
export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Fullstack Developer',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* ... */}
    </>
  );
}
```

---

## 🎯 Dynamic Routes

### Dynamic page

```tsx
// app/[locale]/projects/[slug]/page.tsx

interface PageProps {
  params: { locale: string; slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return <div>{project.title}</div>;
}
```

### Generate Static Params (SSG)

```tsx
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
```

---

## 🎨 Tailwind Patterns

### Responsive container

```tsx
<div className="container mx-auto px-4 max-w-6xl">
  {/* Content */}
</div>
```

### Responsive grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Flex center

```tsx
<div className="flex items-center justify-center min-h-screen">
  {/* Centered content */}
</div>
```

### Dark mode variant

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

---

## 🔧 Common Utilities

### cn() - Merge classes

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className
)}>
  Content
</div>
```

### Format date

```tsx
export function formatDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
```

### Slugify

```tsx
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}
```

---

## ♿ Accessibility

### Skip to main content

```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-background p-4 z-50"
>
  Skip to main content
</a>

<main id="main-content">
  {/* Content */}
</main>
```

### Screen reader only

```tsx
<span className="sr-only">Text only for screen readers</span>

// CSS (already included in Tailwind)
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### ARIA labels

```tsx
// Button with icon only
<button aria-label="Close menu">
  <XIcon />
</button>

// External link
<a 
  href="..." 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View on GitHub (opens in new tab)"
>
  <GithubIcon />
</a>
```

---

## 🎭 Animations

### Intersection Observer Hook

```tsx
'use client';

import { useInView } from 'react-intersection-observer';

export function AnimatedSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      Content
    </div>
  );
}
```

### Respect prefers-reduced-motion

```tsx
'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

// Usage
const shouldAnimate = !useReducedMotion();
```

---

## 📊 TypeScript Tips

### Type-safe environment variables

```typescript
// env/src/web.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
```

### Type guards

```typescript
export function isProject(obj: unknown): obj is Project {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'slug' in obj &&
    'title' in obj
  );
}
```

### Extract type from array

```typescript
const projects = [/* ... */] as const;

type ProjectSlug = typeof projects[number]['slug'];
```

---

## 🐛 Debug

### View environment variables

```tsx
// Only in development!
console.log('ENV:', {
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
```

### Next.js Info

```bash
# View Next.js info
npx next info

# Clear cache
rm -rf .next
pnpm dev
```

### Check bundle size

```bash
pnpm build
# Look for "Route (app)" in output
# Check chunk sizes
```

---

## 🔍 Quick Tests

### Lighthouse

```bash
# Chrome DevTools
1. Open DevTools (F12)
2. "Lighthouse" tab
3. Select categories
4. "Analyze page load"
```

### Accessibility

```bash
# axe DevTools
1. Install extension: https://www.deque.com/axe/devtools/
2. Open DevTools → "axe DevTools" tab
3. "Scan All of My Page"
```

### Open Graph

```
# Facebook Debugger
https://developers.facebook.com/tools/debug/

# Twitter Card Validator
https://cards-dev.twitter.com/validator

# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/
```

---

## 📚 Useful Links

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [tRPC](https://trpc.io/docs)

### Tools
- [Vercel](https://vercel.com)
- [WebP Converter](https://squoosh.app/)
- [Favicon Generator](https://realfavicongenerator.net/)
- [Meta Tags](https://metatags.io/)

### Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

---

## 💡 Pro Tips

1. **Always use TypeScript**: Avoid `any`, prefer explicit types
2. **Optimize images**: WebP + responsive sizes
3. **Test dark mode**: Always test in both themes
4. **Mobile first**: Develop mobile first, then desktop
5. **Accessibility first**: Don't leave a11y for later
6. **Semantic HTML**: Use correct tags (`<article>`, `<section>`, etc.)
7. **Clean console**: No warnings/errors in console
8. **Git commits**: Small and descriptive commits
9. **Test cross-browser**: Don't assume it works everywhere
10. **Performance matters**: Lighthouse score > 90

---

**Final Tip**: Keep this file open in a tab while developing! 🚀
