# Code Templates

Templates for creating files following project standards.

---

## 📄 Component Templates

### Client Component

```tsx
// src/components/[category]/component-name.tsx
'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  // Add other props
}

export function ComponentName({ 
  className,
}: ComponentNameProps) {
  const t = useTranslations('section');

  return (
    <div className={cn("base-classes", className)}>
      {/* Component content */}
    </div>
  );
}
```

### Server Component

```tsx
// src/components/[category]/component-name.tsx
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  // Add other props
}

export function ComponentName({ 
  className,
}: ComponentNameProps) {
  const t = useTranslations('section');

  return (
    <div className={cn("base-classes", className)}>
      {/* Component content */}
    </div>
  );
}
```

### Section Component

```tsx
// src/components/sections/section-name.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export function SectionName() {
  const t = useTranslations('section');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="section-name"
      ref={ref}
      className={cn(
        "container mx-auto px-4 py-20",
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <h2 className="text-3xl font-bold mb-8">
        {t('title')}
      </h2>
      
      {/* Section content */}
    </section>
  );
}
```

---

## 📄 Page Templates

### Basic Page

```tsx
// src/app/[locale]/page-name/page.tsx
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createMetadata({
    title: 'Page Title',
    description: 'Page description',
    path: '/page-name',
    locale,
  });
}

export default function PageName() {
  const t = useTranslations('page');

  return (
    <main>
      <h1>{t('title')}</h1>
      {/* Page content */}
    </main>
  );
}
```

### Dynamic Page with SSG

```tsx
// src/app/[locale]/items/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { items } from '@/data/items';
import { createMetadata } from '@/lib/metadata';

interface PageProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params: { locale, slug }
}: PageProps): Promise<Metadata> {
  const item = items.find(i => i.slug === slug);
  
  if (!item) {
    return { title: 'Not Found' };
  }

  return createMetadata({
    title: item.title,
    description: item.description,
    path: `/items/${slug}`,
    locale,
    images: [{ 
      url: item.images[0].src, 
      width: item.images[0].width,
      height: item.images[0].height,
      alt: item.images[0].alt,
    }],
  });
}

export default function ItemPage({ params: { slug } }: PageProps) {
  const item = items.find(i => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <h1>{item.title}</h1>
      {/* Page content */}
    </main>
  );
}
```

---

## 📄 Data Templates

### Data File

```typescript
// src/data/items.ts
import type { Item } from '@/types';

export const items: Item[] = [
  {
    id: '1',
    slug: 'item-slug',
    title: 'Item Title',
    description: 'Item description',
    // ... other fields
  },
];

// Helper functions
export function getItemBySlug(slug: string): Item | undefined {
  return items.find(item => item.slug === slug);
}

export function getFeaturedItems(): Item[] {
  return items.filter(item => item.featured);
}
```

---

## 📄 Type Templates

### Interface

```typescript
// src/types/item.ts

export interface Item {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: ItemStatus;
}

export type ItemStatus = 'draft' | 'published' | 'archived';

export interface ItemImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
```

---

## 📄 Utility Templates

### Helper Function

```typescript
// src/lib/utils/helper-name.ts

/**
 * Brief description of what this function does
 * @param param1 - Description of param1
 * @param param2 - Description of param2
 * @returns Description of return value
 */
export function helperName(param1: string, param2: number): string {
  // Implementation
  return result;
}
```

### Custom Hook

```typescript
// src/hooks/use-hook-name.ts
'use client';

import { useState, useEffect } from 'react';

export function useHookName(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, [value]);

  return { value, setValue };
}
```

---

## 📄 i18n Templates

### Translation File Structure

```json
// src/messages/en.json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "Welcome",
    "subtitle": "Subtitle text",
    "cta": {
      "primary": "Get Started",
      "secondary": "Learn More"
    }
  },
  "section": {
    "title": "Section Title",
    "description": "Section description",
    "items": {
      "label": "Label",
      "placeholder": "Placeholder"
    }
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "success": "Success!",
    "viewMore": "View More",
    "close": "Close"
  }
}
```

---

## 📄 SEO Templates

### Metadata Generator

```typescript
// src/lib/metadata.ts
import type { Metadata } from 'next';
import { siteConfig } from './constants';

interface MetadataParams {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  type?: 'website' | 'article';
}

export function createMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  images,
  type = 'website',
}: MetadataParams): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  const defaultImages = [{
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: title,
  }];

  return {
    title,
    description,
    openGraph: {
      type,
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

### Structured Data Generator

```typescript
// src/lib/structured-data.ts

export function generatePersonSchema(profile: Profile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Fullstack Developer',
    email: profile.email,
    url: siteConfig.url,
    sameAs: [
      profile.social.github,
      profile.social.linkedin,
    ].filter(Boolean),
  };
}

export function generateWebsiteSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale,
  };
}
```

---

## 📄 Test Templates

### Component Test (Vitest + Testing Library)

```typescript
// src/components/__tests__/component-name.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentName } from '../component-name';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  it('handles interaction', async () => {
    const { user } = render(<ComponentName />);
    // Test user interactions
  });
});
```

---

## 📄 Git Templates

### Commit Message

```
type(scope): brief description

Longer description if needed.
Explain why this change was made.

Fixes #123
```

**Types**: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

**Examples**:
```
feat(hero): add animated hero section with CTA buttons
fix(i18n): resolve locale switching bug on project pages
refactor(components): extract reusable section container
docs(readme): update installation instructions
style(layout): improve responsive spacing
test(projects): add unit tests for project filtering
chore(deps): update dependencies to latest versions
```

---

## 📄 Documentation Templates

### Component Documentation

```markdown
# ComponentName

Brief description of what this component does.

## Usage

\`\`\`tsx
import { ComponentName } from '@/components/category/component-name';

<ComponentName 
  prop1="value"
  prop2={123}
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description of prop1 |
| prop2 | number | 0 | Description of prop2 |
| className | string | - | Additional CSS classes |

## Examples

### Basic Usage

\`\`\`tsx
<ComponentName prop1="example" />
\`\`\`

### Advanced Usage

\`\`\`tsx
<ComponentName 
  prop1="example"
  prop2={42}
  className="custom-class"
/>
\`\`\`

## Accessibility

- Keyboard navigable
- Screen reader friendly
- ARIA labels included

## Notes

Additional notes or considerations.
```

---

## 📄 Config Templates

### TSConfig for Package

```json
// packages/[package]/tsconfig.json
{
  "extends": "@portfolio/config/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["./src"],
  "exclude": ["node_modules", "dist"]
}
```

### Package.json for Package

```json
// packages/[package]/package.json
{
  "name": "@portfolio/package-name",
  "version": "0.1.0",
  "type": "module",
  "exports": {
    ".": {
      "default": "./src/index.ts"
    }
  },
  "scripts": {
    "check-types": "tsc --noEmit"
  },
  "dependencies": {},
  "devDependencies": {
    "@portfolio/config": "workspace:*",
    "typescript": "catalog:"
  }
}
```

---

## 🎨 Style Templates

### Responsive Container

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  {/* Content */}
</div>
```

### Section Spacing

```tsx
<section className="py-12 md:py-16 lg:py-20">
  {/* Content */}
</section>
```

### Grid Patterns

```tsx
// Auto-fit grid
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

// Masonry-like (requires specific layout)
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
```

### Card Component

```tsx
<div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow">
  <div className="p-6">
    {/* Card content */}
  </div>
</div>
```

---

## 💡 Usage Tips

1. **Copy complete template**
2. **Rename** files and components
3. **Adjust** types and props as needed
4. **Remove** example comments
5. **Add** specific logic
6. **Test** implementation
7. **Commit** following standards

---

**Note**: Always adapt templates to your specific use case needs!
