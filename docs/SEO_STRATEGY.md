# SEO Strategy

## Objectives

1. Maximize visibility in searches for "fullstack developer", "freelance developer", etc.
2. Optimize sharing on social networks
3. Ensure correct indexing of both languages (EN/PT)
4. Appear in featured snippets when possible

---

## 1. Metadata per Page

### Homepage

```typescript
// app/[locale]/page.tsx

import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === 'en' ? 'Your Name - Fullstack Developer' : 'Your Name - Fullstack Developer';

  const description =
    locale === 'en'
      ? 'Fullstack Developer specializing in React, Next.js, and Node.js. Available for international full-time and freelance opportunities.'
      : 'Desenvolvedor Fullstack especializado em React, Next.js e Node.js. Disponível para oportunidades internacionais full-time e freelance.';

  return {
    title,
    description,
    keywords: ['fullstack developer', 'react', 'nextjs', 'typescript', 'freelance developer'],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      url: `https://yoursite.com/${locale}`,
      title,
      description,
      siteName: 'Your Name Portfolio',
      images: [
        {
          url: '/og/default-og.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/default-og.png'],
    },
    alternates: {
      canonical: `https://yoursite.com/${locale}`,
      languages: {
        en: 'https://yoursite.com/en',
        pt: 'https://yoursite.com/pt',
      },
    },
  };
}
```

### Project Detail Pages

```typescript
// app/[locale]/projects/[slug]/page.tsx

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.title} | Your Name`;
  const description = project.shortDescription;

  return {
    title,
    description,
    keywords: [...project.techStack, 'project', 'portfolio'],
    openGraph: {
      type: 'article',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      url: `https://yoursite.com/${locale}/projects/${slug}`,
      title,
      description,
      images: [
        {
          url: project.images[0].src,
          width: project.images[0].width,
          height: project.images[0].height,
          alt: project.images[0].alt,
        },
      ],
      publishedTime: `${project.year}-01-01T00:00:00.000Z`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.images[0].src],
    },
    alternates: {
      canonical: `https://yoursite.com/${locale}/projects/${slug}`,
      languages: {
        en: `https://yoursite.com/en/projects/${slug}`,
        pt: `https://yoursite.com/pt/projects/${slug}`,
      },
    },
  };
}
```

---

## 2. Structured Data (JSON-LD)

### Person Schema (Homepage)

```typescript
// lib/structured-data.ts

import type { Profile } from '@/types';

export function generatePersonSchema(profile: Profile, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: locale === 'en' ? 'Fullstack Developer' : 'Desenvolvedor Fullstack',
    url: `https://yoursite.com/${locale}`,
    email: profile.email,
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.twitter].filter(
      Boolean
    ),
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Web Development'],
    homeLocation: {
      '@type': 'Place',
      name: profile.location,
    },
  };
}
```

### WebSite Schema

```typescript
export function generateWebsiteSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Your Name Portfolio',
    url: `https://yoursite.com/${locale}`,
    description:
      locale === 'en'
        ? 'Portfolio of a Fullstack Developer'
        : 'Portfolio de um Desenvolvedor Fullstack',
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://yoursite.com/${locale}/projects?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
```

### CreativeWork Schema (Projects)

```typescript
import type { Project } from '@/types';

export function generateProjectSchema(project: Project, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    url: `https://yoursite.com/${locale}/projects/${project.slug}`,
    image: `https://yoursite.com${project.images[0].src}`,
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
    datePublished: `${project.year}-01-01`,
    keywords: project.techStack.join(', '),
    ...(project.liveUrl && {
      url: project.liveUrl,
    }),
  };
}
```

### Usage in Components

```typescript
// app/[locale]/page.tsx

import { generatePersonSchema, generateWebsiteSchema } from '@/lib/structured-data';
import { profile } from '@/data/profile';

export default function HomePage({ params: { locale } }) {
  const personSchema = generatePersonSchema(profile, locale);
  const websiteSchema = generateWebsiteSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* ... rest of content */}
    </>
  );
}
```

---

## 3. Dynamic Sitemap

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = siteConfig.locales;

  // Homepage for each locale
  const homepages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // Project pages for each locale
  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    }))
  );

  return [...homepages, ...projectPages];
}
```

---

## 4. robots.txt

```typescript
// app/robots.ts

import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```

---

## 5. Image Optimization

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### Correct Usage of next/image

```typescript
import Image from 'next/image';

<Image
  src={project.images[0].src}
  alt={project.images[0].alt}
  width={project.images[0].width}
  height={project.images[0].height}
  priority={index === 0} // Only for first image
  placeholder="blur"
  blurDataURL="..." // Optional: blur placeholder
/>
```

---

## 6. Semantic HTML

### Homepage Structure

```tsx
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Your Name</h1>
    {/* ... */}
  </section>

  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">Selected Projects</h2>
    <div>
      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          {/* ... */}
        </article>
      ))}
    </div>
  </section>

  <section aria-labelledby="about-heading">
    <h2 id="about-heading">About</h2>
    {/* ... */}
  </section>

  <section aria-labelledby="tech-heading">
    <h2 id="tech-heading">Technologies</h2>
    {/* ... */}
  </section>

  <section aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact</h2>
    {/* ... */}
  </section>
</main>
```

---

## 7. Performance (Core Web Vitals)

### Target Metrics

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Strategies

1. **Lazy Loading**: Images below the fold
2. **Priority**: Hero image with `priority`
3. **Font Optimization**: Poppins already optimized
4. **Code Splitting**: Automatic in Next.js
5. **React Compiler**: Already enabled

---

## 8. SEO Checklist

### Pre-Deploy

- [ ] Complete metadata on all pages
- [ ] Open Graph images (1200x630px)
- [ ] Structured data implemented
- [ ] Sitemap generating correctly
- [ ] robots.txt configured
- [ ] Alt text on all images
- [ ] Correct internal links
- [ ] Canonical URLs configured
- [ ] hreflang for i18n

### Post-Deploy

- [ ] Submit sitemap to Google Search Console
- [ ] Verify indexing of both languages
- [ ] Test Open Graph in Facebook Debugger
- [ ] Test Twitter Card in Twitter Validator
- [ ] Verify Rich Results in Google
- [ ] Test performance in PageSpeed Insights
- [ ] Verify mobile-friendliness
- [ ] Configure Google Analytics (optional)

---

## 9. Validation Tools

### Open Graph

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Twitter Card

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Structured Data

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### General SEO

- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse (Chrome DevTools)](chrome://lighthouse)

---

## 10. Continuous Monitoring

### Metrics to Track

1. **Google Position**: Main keywords
2. **Core Web Vitals**: LCP, FID, CLS
3. **Indexing**: Indexed pages vs. submitted
4. **Crawl Errors**: 4xx, 5xx, redirect chains
5. **Backlinks**: Quality and quantity
6. **Click-Through Rate**: CTR on SERP

### Recommended Tools

- Google Search Console (free)
- @vercel/speed-insights (free on Vercel)
- Plausible or Vercel Analytics (optional)
