# Data Directory

This directory contains all mock data for the portfolio.

---

## 📁 Files

### `projects.ts`
Contains 5 example projects with complete metadata.

**Usage**:
```typescript
import { projects } from '@/data';

// Get all projects
const allProjects = projects;

// Get featured projects
const featured = projects.filter(p => p.featured);

// Get by slug
const project = projects.find(p => p.slug === 'project-slug');

// Get by category
const webApps = projects.filter(p => p.category === 'web-app');
```

**Structure**:
- 3 featured projects
- 2 open-source projects
- 3 web applications
- Complete metrics and tech stacks
- Realistic problem/solution descriptions

### `technologies.ts`
Contains 18 technologies across 5 categories.

**Usage**:
```typescript
import { technologies } from '@/data';

// Get by category
const frontend = technologies.filter(t => t.category === 'frontend');

// Get by proficiency
const expert = technologies.filter(t => t.proficiency === 'expert');

// Group by category
const grouped = technologies.reduce((acc, tech) => {
  if (!acc[tech.category]) acc[tech.category] = [];
  acc[tech.category].push(tech);
  return acc;
}, {} as Record<string, Technology[]>);
```

**Categories**:
- `frontend`: React, Next.js, TypeScript, Tailwind CSS, Vue.js
- `backend`: Node.js, tRPC, GraphQL, REST APIs, Prisma
- `database`: PostgreSQL, Redis, MongoDB
- `devops`: Docker, AWS, Vercel
- `tools`: Git, Turborepo

### `profile.ts`
Contains profile information and social links.

**Usage**:
```typescript
import { profile } from '@/data';

// Access profile data
const { name, headline, bio, email } = profile;

// Check availability
const isAvailable = profile.availability === 'available';

// Get social links
const { github, linkedin, twitter } = profile.social;
```

### `index.ts`
Barrel export for all data files.

**Usage**:
```typescript
// Import all at once
import { projects, technologies, profile } from '@/data';

// Or import individually
import { projects } from '@/data/projects';
```

---

## 🔧 Customization

### Replace with Real Data

1. **Open each file** (`projects.ts`, `technologies.ts`, `profile.ts`)
2. **Replace mock data** with your real information
3. **Update images** in `public/images/`
4. **Test imports** to ensure everything works

### Adding New Projects

```typescript
// In projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: '6', // Increment ID
    slug: 'new-project-slug',
    title: 'New Project',
    // ... complete all required fields
  }
];
```

### Adding New Technologies

```typescript
// In technologies.ts
export const technologies: Technology[] = [
  // ... existing technologies
  { 
    name: 'New Technology', 
    category: 'frontend', 
    proficiency: 'advanced' 
  }
];
```

---

## 📝 Type Safety

All data files use TypeScript interfaces:

```typescript
import type { Project } from '@/types/project';
import type { Technology } from '@/types/technology';
import type { Profile } from '@/types/profile';
```

This ensures:
- ✅ Compile-time type checking
- ✅ IntelliSense autocomplete
- ✅ Validation of required fields
- ✅ Consistent data structure

---

## 🧪 Testing

### Verify Imports

Create a test file to verify all imports work:

```typescript
// Test file (temporary)
import { projects, technologies, profile } from '@/data';

console.log('Projects:', projects.length); // Should be 5
console.log('Technologies:', technologies.length); // Should be 18
console.log('Profile:', profile.name);
```

### Run TypeScript Check

```bash
pnpm exec tsc --noEmit
```

Should complete with no errors.

---

## 📊 Data Statistics

### Projects
- Total: 5 projects
- Featured: 3 projects
- Web Apps: 3 projects
- Open Source: 2 projects
- With GitHub: 3 projects
- With Live URL: 5 projects
- With Metrics: 3 projects

### Technologies
- Total: 18 technologies
- Expert: 9 technologies
- Advanced: 7 technologies
- Intermediate: 2 technologies

### Profile
- Social Links: 3 (GitHub, LinkedIn, Twitter)
- Availability: Available
- Location: Brazil (Remote)

---

## 🎯 Best Practices

1. **Keep data up to date** - Update regularly with new projects
2. **Maintain type safety** - Always use TypeScript interfaces
3. **Use realistic data** - Even mock data should be believable
4. **Add complete descriptions** - Problem, solution, outcome
5. **Include metrics** - Quantify impact where possible
6. **Optimize images** - Use WebP, compress files
7. **Test links** - Ensure all URLs work (or use null)

---

## 📚 Related Documentation

- [PHASE_2_COMPLETE.md](../../../../PHASE_2_COMPLETE.md) - Phase 2 completion
- [MOCK_DATA.md](../../../../docs/MOCK_DATA.md) - Data reference
- [TYPES_AND_SCHEMAS.md](../../../../docs/TYPES_AND_SCHEMAS.md) - Type definitions

---

**Last Updated**: January 26, 2026  
**Status**: ✅ Complete and ready to use
