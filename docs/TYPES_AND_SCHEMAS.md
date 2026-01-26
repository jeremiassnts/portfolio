# Types and Schemas

## TypeScript Definitions

### Project Types

```typescript
// types/project.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  outcome: string | null;
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  year: number;
  images: ProjectImage[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: ProjectStatus;
  metrics?: ProjectMetrics;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'hero' | 'screenshot' | 'detail';
}

export interface ProjectMetrics {
  users?: string;
  performance?: string;
  impact?: string;
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'api' 
  | 'tool' 
  | 'library' 
  | 'open-source';

export type ProjectStatus = 
  | 'completed' 
  | 'in-progress' 
  | 'maintained';
```

### Technology Types

```typescript
// types/technology.ts

export interface Technology {
  name: string;
  category: TechCategory;
  icon?: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate';
}

export type TechCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'tools';
```

### Profile Types

```typescript
// types/profile.ts

export interface Profile {
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  availability: 'available' | 'not-available' | 'limited';
  social: SocialLinks;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}
```

### Site Configuration Types

```typescript
// types/site.ts

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
  locales: string[];
  defaultLocale: string;
}
```

### Metadata Types

```typescript
// types/metadata.ts

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface StructuredData {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: any;
}
```

## Barrel Export

```typescript
// types/index.ts

export * from './project';
export * from './technology';
export * from './profile';
export * from './site';
export * from './metadata';
```

## Usage in Components

### In Components

```typescript
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // ...
}
```

### In Pages

```typescript
import type { Project } from '@/types';
import { projects } from '@/data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  // ...
}
```

### In Data

```typescript
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'project-name',
    // ...
  },
];
```

## Validation with Zod (Optional)

If you need runtime data validation:

```typescript
// lib/schemas.ts

import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  problem: z.string(),
  solution: z.string(),
  outcome: z.string().nullable(),
  techStack: z.array(z.string()),
  category: z.enum(['web-app', 'mobile-app', 'api', 'tool', 'library', 'open-source']),
  featured: z.boolean(),
  year: z.number(),
  images: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
      type: z.enum(['hero', 'screenshot', 'detail']),
    })
  ),
  githubUrl: z.string().url().nullable(),
  liveUrl: z.string().url().nullable(),
  status: z.enum(['completed', 'in-progress', 'maintained']),
  metrics: z
    .object({
      users: z.string().optional(),
      performance: z.string().optional(),
      impact: z.string().optional(),
    })
    .optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
```

## Type Guidelines

### 1. Use `null` for intentionally absent values
```typescript
outcome: string | null  // Project may not have an outcome yet
```

### 2. Use `optional` for truly optional fields
```typescript
metrics?: ProjectMetrics  // Metrics are optional
```

### 3. Prefer union types over enums
```typescript
type Status = 'completed' | 'in-progress' | 'maintained';
// Better than: enum Status { Completed, InProgress, Maintained }
```

### 4. Use specific types, avoid `any`
```typescript
// ❌ Avoid
function processProject(data: any) { }

// ✅ Prefer
function processProject(project: Project) { }
```

### 5. Export types and interfaces
```typescript
// Always export for reusability
export interface Project { }
export type ProjectCategory = ...;
```
