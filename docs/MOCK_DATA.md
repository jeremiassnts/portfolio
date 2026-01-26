# Mock Data

## Example Projects (5 Projects)

```typescript
// data/projects.ts

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'real-time-collaboration-platform',
    title: 'Real-Time Collaboration Platform',
    shortDescription: 'A WebSocket-based collaborative workspace enabling teams to work synchronously on documents, tasks, and planning boards.',
    problem: 'Remote teams struggled with asynchronous workflows, leading to delays, misalignment, and reduced productivity across time zones.',
    solution: 'Built a real-time collaboration platform with live cursors, operational transformation for conflict-free editing, presence indicators, and integrated video calls. Architected with WebSocket infrastructure and optimistic UI updates for instant feedback.',
    outcome: '15+ teams adopted the platform, reducing meeting time by 40% and improving project delivery speed by 25%.',
    techStack: [
      'Next.js',
      'TypeScript',
      'WebSocket',
      'Redis',
      'PostgreSQL',
      'Tailwind CSS',
      'tRPC',
      'Vercel'
    ],
    category: 'web-app',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/real-time-collaboration-platform/hero.webp',
        alt: 'Real-time collaboration platform dashboard',
        width: 1200,
        height: 630,
        type: 'hero'
      }
    ],
    githubUrl: 'https://github.com/yourusername/collab-platform',
    liveUrl: 'https://collab-demo.example.com',
    status: 'completed',
    metrics: {
      users: '500+ active users',
      performance: '< 100ms message latency',
      impact: '40% reduction in meeting time'
    }
  },
  {
    id: '2',
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Data visualization platform providing real-time metrics and insights for SaaS businesses.',
    problem: 'SaaS companies lacked unified visibility into key metrics like MRR, churn, and customer lifetime value, relying on fragmented spreadsheets.',
    solution: 'Developed a comprehensive analytics dashboard integrating with Stripe, Google Analytics, and custom data sources. Implemented real-time metric calculations, cohort analysis, and predictive forecasting.',
    outcome: 'Deployed to 30+ SaaS companies, helping them identify 20% average revenue leakage and improve retention by 15%.',
    techStack: [
      'React',
      'Node.js',
      'GraphQL',
      'TimescaleDB',
      'Chart.js',
      'Docker',
      'AWS'
    ],
    category: 'web-app',
    featured: true,
    year: 2023,
    images: [
      {
        src: '/images/projects/saas-analytics-dashboard/hero.webp',
        alt: 'SaaS analytics dashboard overview',
        width: 1200,
        height: 630,
        type: 'hero'
      }
    ],
    githubUrl: null,
    liveUrl: 'https://analytics-demo.example.com',
    status: 'maintained',
    metrics: {
      users: '30+ companies',
      performance: 'Real-time data processing',
      impact: '20% average revenue leakage identified'
    }
  },
  {
    id: '3',
    slug: 'open-source-form-builder',
    title: 'Open Source Form Builder',
    shortDescription: 'Type-safe, headless form library with built-in validation, accessibility, and React Server Components support.',
    problem: 'Existing form libraries lacked first-class TypeScript support and struggled with modern React patterns like Server Actions.',
    solution: 'Created a zero-runtime form library with compile-time type generation, progressive enhancement support, and composable validation. Prioritized accessibility (WCAG 2.1 AA) and developer experience.',
    outcome: '2k+ GitHub stars, 50k+ weekly downloads, adopted by companies like Vercel and Supabase.',
    techStack: [
      'TypeScript',
      'React',
      'Zod',
      'Vitest',
      'Changesets',
      'Turborepo'
    ],
    category: 'open-source',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/open-source-form-builder/hero.webp',
        alt: 'Form builder code example',
        width: 1200,
        height: 630,
        type: 'hero'
      }
    ],
    githubUrl: 'https://github.com/yourusername/form-builder',
    liveUrl: 'https://form-builder-docs.example.com',
    status: 'maintained',
    metrics: {
      users: '50k+ weekly npm downloads',
      impact: '2k+ GitHub stars'
    }
  },
  {
    id: '4',
    slug: 'e-commerce-headless-cms',
    title: 'E-Commerce Headless CMS',
    shortDescription: 'Customizable headless CMS tailored for e-commerce, with product management, inventory sync, and multi-channel publishing.',
    problem: 'E-commerce businesses needed flexibility to sell across multiple channels (web, mobile, marketplaces) without being locked into monolithic platforms.',
    solution: 'Built a headless CMS with GraphQL API, real-time inventory synchronization, product variant management, and webhook integrations for platforms like Shopify and Amazon.',
    outcome: 'Enabled 10+ brands to unify product data and reduce time-to-market for new channels by 60%.',
    techStack: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'GraphQL',
      'Redis',
      'Stripe',
      'Vercel'
    ],
    category: 'web-app',
    featured: false,
    year: 2023,
    images: [
      {
        src: '/images/projects/e-commerce-headless-cms/hero.webp',
        alt: 'E-commerce CMS product dashboard',
        width: 1200,
        height: 630,
        type: 'hero'
      }
    ],
    githubUrl: null,
    liveUrl: 'https://cms-demo.example.com',
    status: 'completed'
  },
  {
    id: '5',
    slug: 'developer-portfolio-template',
    title: 'Developer Portfolio Template',
    shortDescription: 'Modern, SEO-optimized portfolio template built with Next.js, featuring i18n, dark mode, and CMS integration.',
    problem: 'Developers needed a professional portfolio solution that was both easy to customize and optimized for performance and SEO.',
    solution: 'Created an open-source template with Next.js App Router, multi-language support, dark mode, and one-click CMS integration. Focused on developer experience and best practices.',
    outcome: '500+ forks, featured in multiple dev communities, used by developers worldwide.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'next-intl',
      'Vercel'
    ],
    category: 'open-source',
    featured: false,
    year: 2024,
    images: [
      {
        src: '/images/projects/developer-portfolio-template/hero.webp',
        alt: 'Portfolio template preview',
        width: 1200,
        height: 630,
        type: 'hero'
      }
    ],
    githubUrl: 'https://github.com/yourusername/portfolio-template',
    liveUrl: 'https://portfolio-template-demo.vercel.app',
    status: 'maintained'
  }
];
```

## Technologies

```typescript
// data/technologies.ts

import type { Technology } from '@/types';

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'expert' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'expert' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'advanced' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'expert' },
  { name: 'tRPC', category: 'backend', proficiency: 'expert' },
  { name: 'GraphQL', category: 'backend', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'backend', proficiency: 'expert' },
  { name: 'Prisma', category: 'backend', proficiency: 'advanced' },
  
  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 'advanced' },
  { name: 'Redis', category: 'database', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'database', proficiency: 'intermediate' },
  
  // DevOps & Tools
  { name: 'Docker', category: 'devops', proficiency: 'advanced' },
  { name: 'AWS', category: 'devops', proficiency: 'intermediate' },
  { name: 'Vercel', category: 'devops', proficiency: 'expert' },
  { name: 'Git', category: 'tools', proficiency: 'expert' },
  { name: 'Turborepo', category: 'tools', proficiency: 'advanced' },
];
```

## Profile

```typescript
// data/profile.ts

import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Your Name',
  headline: 'Fullstack Developer building scalable products for international markets',
  bio: `Experienced Fullstack Developer specializing in building production-ready web applications with modern technologies. 
  
  I focus on creating user-centric products that solve real problems, with emphasis on performance, scalability, and developer experience. My work spans from real-time collaboration tools to data-intensive SaaS platforms.
  
  Currently available for full-time roles and contract opportunities with international teams.`,
  location: 'Brazil (Remote)',
  email: 'your.email@example.com',
  availability: 'available',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle', // optional
  }
};
```

## Site Configuration

```typescript
// lib/constants.ts

import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Your Name',
  description: 'Fullstack Developer building scalable products for international markets',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
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

## Customization Notes

### Replace Mock Data

When ready to use real data:

1. **Projects**: Edit `data/projects.ts` with your real projects
2. **Technologies**: Adjust `data/technologies.ts` with your stack
3. **Profile**: Update `data/profile.ts` with your information
4. **Site Config**: Edit `lib/constants.ts` with your real URLs

### Image URLs

Replace image paths:
- `/images/projects/[slug]/hero.webp` → your real images
- Maintain naming pattern for consistency

### External Links

Update links:
- GitHub URLs → your real repositories
- Live URLs → your real deployments
- Social links → your real profiles

### Metrics

If you don't have specific metrics, the `metrics` field is optional and can be omitted.
