# Dependencies and Libraries

## Already Installed Dependencies ✅

### Core
- `next`: ^16.1.1 - React framework with App Router
- `react`: ^19.2.3 - React library
- `react-dom`: ^19.2.3 - React DOM
- `typescript`: ^5 - Type safety

### Styling
- `tailwindcss`: ^4.1.10 - Utility-first CSS
- `shadcn`: ^3.6.2 - Component system
- `class-variance-authority`: ^0.7.1 - Component variants
- `clsx`: ^2.1.1 - Class name utility
- `tailwind-merge`: ^3.3.1 - Merge Tailwind classes

### Theme
- `next-themes`: ^0.4.6 - Light/Dark mode

### Icons & UI
- `lucide-react`: ^0.546.0 - Icons
- `sonner`: ^2.0.5 - Toast notifications

### Data & API
- `@trpc/server`: ^11.7.2 - tRPC server
- `@trpc/client`: ^11.7.2 - tRPC client
- `@tanstack/react-query`: ^5.90.12 - Data fetching
- `zod`: ^4.1.13 - Schema validation

### Monorepo
- `turbo`: ^2.6.3 - Build system
- `pnpm`: 10.28.1 - Package manager

---

## Dependencies to Install

### Essential

```bash
pnpm add next-intl react-intersection-observer
```

#### next-intl
- **Version**: ^3.26.2
- **Purpose**: Internationalization (i18n) for App Router
- **Bundle size**: ~15KB
- **Rationale**: Best solution for i18n in App Router, type-safe, SSR/RSC support

**Alternatives considered**:
- `next-i18next`: Doesn't support App Router
- DIY with React Context: More work, fewer features, not type-safe
- `react-intl`: Heavier, complex configuration

#### react-intersection-observer
- **Version**: ^9.13.1
- **Purpose**: Detect when elements enter the viewport
- **Bundle size**: ~2KB
- **Rationale**: Lightweight, perfect for lazy loading and scroll animations

**Alternatives considered**:
- Native `IntersectionObserver`: More boilerplate code
- `react-visibility-sensor`: Discontinued

---

## Optional Dependencies (Future)

### Advanced Animations

```bash
pnpm add framer-motion
```

#### framer-motion
- **Version**: ^12.0.0
- **Purpose**: Complex animations and interactions
- **Bundle size**: ~70KB
- **Trade-off**: Heavy, use only if necessary

**When to use**:
- Complex page transitions
- Drag animations
- Advanced gestures
- Layout animations

**When NOT to use**:
- Simple animations (use CSS)
- Basic fade in/out (use Intersection Observer + CSS)

---

### Enhanced Typography

```bash
pnpm add react-wrap-balancer
```

#### react-wrap-balancer
- **Version**: ^1.1.1
- **Purpose**: Improve line breaks in headings
- **Bundle size**: ~1KB
- **Rationale**: UX micro-optimization, avoids typographic widows

---

### Analytics & Monitoring

```bash
pnpm add @vercel/analytics @vercel/speed-insights
```

#### @vercel/analytics
- **Version**: ^1.4.1
- **Purpose**: Cookie-free analytics, privacy-first
- **Bundle size**: ~2KB
- **Rationale**: Lightweight, privacy-respectful, easy setup

#### @vercel/speed-insights
- **Version**: ^1.1.0
- **Purpose**: Monitor Core Web Vitals in production
- **Bundle size**: ~3KB
- **Rationale**: Real user performance data

**Alternatives**:
- Google Analytics: Heavier, GDPR issues
- Plausible: Paid, but excellent privacy-first alternative

---

### Open Graph Image Generation

```bash
pnpm add @vercel/og
```

#### @vercel/og
- **Version**: ^0.7.0
- **Purpose**: Generate OG images dynamically
- **Bundle size**: Edge runtime (doesn't affect client)
- **Rationale**: Custom OG images per project without manual design

**When to use**:
- Many projects (impractical to create manually)
- Dynamic content
- Consistent branding

**When NOT to use**:
- Few projects (manual creation is faster)
- Very complex OG design

---

## Development Dependencies

### Already Installed ✅
- `@types/node`: ^22.13.14
- `@types/react`: ^19.2.7
- `@types/react-dom`: ^19.2.3

### Optional (Code Quality)

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom vitest
```

For testing (if desired):
- `vitest`: Fast test runner
- `@testing-library/react`: Test components
- `@testing-library/jest-dom`: Useful matchers

---

## Trade-off Analysis

### Bundle Size Impact

**Essential installations** (~17KB):
- next-intl: ~15KB
- react-intersection-observer: ~2KB

**Optional installations** (~76KB):
- framer-motion: ~70KB ⚠️ Heavy
- react-wrap-balancer: ~1KB
- @vercel/analytics: ~2KB
- @vercel/speed-insights: ~3KB

### Recommendations

**MVP (Install now)**:
✅ next-intl (essential for i18n)
✅ react-intersection-observer (lightweight, useful)

**Post-MVP (Install later)**:
⏳ @vercel/analytics (when in production)
⏳ @vercel/speed-insights (when in production)
⏳ react-wrap-balancer (polish, not essential)

**Only if necessary**:
⚠️ framer-motion (only if complex animations are crucial)
⚠️ @vercel/og (only if many projects)

---

## Complete Installation Command

### Minimal Viable (MVP)
```bash
cd apps/web
pnpm add next-intl react-intersection-observer
```

### Full Production
```bash
cd apps/web
pnpm add next-intl react-intersection-observer @vercel/analytics @vercel/speed-insights
```

### With Animations
```bash
cd apps/web
pnpm add next-intl react-intersection-observer framer-motion @vercel/analytics @vercel/speed-insights
```

---

## Check Installed Versions

```bash
pnpm list next-intl react-intersection-observer
```

## Update Dependencies

```bash
# Update to latest
pnpm update next-intl react-intersection-observer

# Or update all dependencies
pnpm update
```
