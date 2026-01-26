# Accessibility Strategy

## Objective

Ensure compliance with **WCAG 2.1 Level AA** to make the portfolio accessible to all users, including people with disabilities.

---

## 1. WCAG Principles

### Perceivable
Information and user interface components must be presentable to users in ways they can perceive.

### Operable
User interface components and navigation must be operable.

### Understandable
Information and the operation of the user interface must be understandable.

### Robust
Content must be robust enough to be interpreted by various user agents, including assistive technologies.

---

## 2. Semantic HTML

### Landmark Structure

```tsx
// layout.tsx

<body>
  <a href="#main-content" className="sr-only focus:not-sr-only">
    Skip to main content
  </a>
  
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      {/* ... */}
    </nav>
  </header>
  
  <main id="main-content" role="main">
    {children}
  </main>
  
  <footer role="contentinfo">
    {/* ... */}
  </footer>
</body>
```

### Hierarchical Headings

```tsx
// ❌ Incorrect
<h1>Title</h1>
<h3>Subtitle</h3> // Skips h2

// ✅ Correct
<h1>Title</h1>
<h2>Subtitle</h2>
<h3>Sub-subtitle</h3>
```

### Semantic Elements

```tsx
// Use correct elements
<article>  // For projects
<section>  // For page sections
<nav>      // For navigation
<aside>    // For related content
<figure>   // For images with caption
<figcaption> // For image caption
```

---

## 3. ARIA Labels and Roles

### Buttons and Links

```tsx
// Button with icon only
<button aria-label="Toggle dark mode">
  <MoonIcon />
</button>

// External link
<a 
  href={project.githubUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
>
  <GithubIcon />
</a>
```

### Navigation

```tsx
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<nav aria-label="Social links">
  <ul>
    <li><a href="..." aria-label="GitHub profile">...</a></li>
  </ul>
</nav>
```

### Lists

```tsx
// Always use lists for item sets
<ul role="list"> // role="list" to ensure correct announcement
  {projects.map(project => (
    <li key={project.id}>
      <ProjectCard project={project} />
    </li>
  ))}
</ul>
```

---

## 4. Keyboard Navigation

### Focus States

```css
/* Ensure visible focus states */
/* shadcn/ui already includes this, but verify */

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}
```

### Tab Order

```tsx
// Maintain logical tab order
// 1. Header/Nav
// 2. Main content
// 3. Footer

// Use tabIndex only when necessary
<div tabIndex={0}> // Makes div focusable
<div tabIndex={-1}> // Removes from tab order
```

### Keyboard Shortcuts

```tsx
// Example: ESC to close modal
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  window.addEventListener('keydown', handleEscape);
  return () => window.removeEventListener('keydown', handleEscape);
}, [onClose]);
```

---

## 5. Color Contrast

### WCAG AA Requirements

- **Normal text**: Minimum 4.5:1
- **Large text** (18pt+ or 14pt bold): Minimum 3:1
- **UI components**: Minimum 3:1

### Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (contrast inspector)
- [Contrast Ratio Tool](https://contrast-ratio.com/)

### Theme Verification

```css
/* Verify contrast in both themes */
:root {
  --foreground: oklch(0.145 0 0); /* Dark text */
  --background: oklch(1 0 0);     /* White background */
  /* Ratio: ~15:1 ✅ */
}

.dark {
  --foreground: oklch(0.985 0 0); /* Light text */
  --background: oklch(0.145 0 0); /* Dark background */
  /* Ratio: ~15:1 ✅ */
}
```

---

## 6. Images and Media

### Alt Text Guidelines

```tsx
// ✅ Good alt text (descriptive)
<Image
  src="/images/projects/project-1/hero.webp"
  alt="Dashboard showing real-time collaboration with live cursors and presence indicators"
  width={1200}
  height={630}
/>

// ✅ Decorative (empty alt)
<Image
  src="/decorative-pattern.webp"
  alt=""
  aria-hidden="true"
  width={100}
  height={100}
/>

// ❌ Bad (generic or redundant)
<Image
  src="..."
  alt="Image" // Too vague
/>
```

### Images as Links

```tsx
<a href={`/projects/${project.slug}`}>
  <Image 
    src={project.images[0].src} 
    alt={`${project.title} - ${project.shortDescription}`}
  />
</a>
```

### Loading States

```tsx
// Indicate loading
{isLoading && (
  <div role="status" aria-live="polite">
    <span className="sr-only">Loading...</span>
    <Spinner aria-hidden="true" />
  </div>
)}
```

---

## 7. Forms (if implementing Contact Form)

### Labels and Inputs

```tsx
// ✅ Associated label
<label htmlFor="email">Email</label>
<input 
  id="email" 
  type="email" 
  name="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<p id="email-error" role="alert">
  {errors.email}
</p>

// ❌ Placeholder is not a label
<input placeholder="Email" /> // Insufficient
```

### Error Messages

```tsx
<input
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
{errors.email && (
  <p id="email-error" role="alert" className="text-destructive">
    {errors.email}
  </p>
)}
```

---

## 8. Animations and Motion

### Respect prefers-reduced-motion

```css
/* Disable animations when requested */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### React/Next.js

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
export function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
    >
      {/* ... */}
    </motion.div>
  );
}
```

---

## 9. Screen Readers

### Utility Classes

```css
/* Content for screen readers only */
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

.sr-only:focus-visible {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### Live Regions

```tsx
// Announce dynamic changes
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// Urgent (e.g., errors)
<div aria-live="assertive" role="alert">
  {errorMessage}
</div>
```

---

## 10. Language Switching

### hreflang and lang attribute

```tsx
// Root layout
<html lang={locale}>

// Language switcher
<button
  onClick={() => switchLocale('pt')}
  lang="pt"
  aria-label="Switch language to Portuguese"
>
  Português
</button>
```

---

## 11. Accessibility Checklist

### Structure
- [ ] Skip to main content link
- [ ] Semantic HTML (header, main, footer, nav, section, article)
- [ ] Correct heading hierarchy (h1 → h2 → h3)
- [ ] Appropriate ARIA landmarks

### Navigation
- [ ] Keyboard navigation works on all elements
- [ ] Logical tab order
- [ ] Visible focus states
- [ ] ESC closes modals/dropdowns

### Content
- [ ] Descriptive alt text on all images
- [ ] Descriptive links (avoid "click here")
- [ ] Adequate color contrast (4.5:1 minimum)
- [ ] Text resizable up to 200%

### Interactivity
- [ ] Buttons with aria-label when icon only
- [ ] External links with warning
- [ ] Loading states announced
- [ ] Errors announced in live regions

### Media
- [ ] Animations respect prefers-reduced-motion
- [ ] Videos with captions (if any)
- [ ] Autoplay disabled

### Forms (if applicable)
- [ ] Labels associated with inputs
- [ ] Required fields marked
- [ ] Clear and descriptive errors
- [ ] Real-time validation (accessible)

---

## 12. Testing Tools

### Automated
- **Lighthouse** (Chrome DevTools) - Accessibility audit
- **axe DevTools** (Chrome extension) - A11y issue detection
- **WAVE** (extension) - Visual accessibility analysis

### Manual
- **Keyboard navigation**: Test tab, shift+tab, enter, escape
- **Screen readers**: 
  - macOS: VoiceOver (Cmd+F5)
  - Windows: NVDA (free)
  - Mobile: TalkBack (Android), VoiceOver (iOS)

### Complete Checklist
- [WebAIM WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [a11y Project Checklist](https://www.a11yproject.com/checklist/)

---

## 13. Recommended Tests

### By Feature

1. **Header/Navigation**
   - Tab through all links
   - Test theme toggle with keyboard
   - Test language switcher with keyboard
   - Verify correct announcement in screen reader

2. **Hero Section**
   - Verify unique and descriptive h1
   - Test CTAs with keyboard
   - Verify text contrast over image

3. **Projects Section**
   - Verify semantic list
   - Test cards with keyboard
   - Verify image alt text
   - Verify descriptive links

4. **Project Detail**
   - Verify heading hierarchy
   - Test "Back" button
   - Verify contrast in tech badges
   - Verify screenshot alt text

5. **Contact Section**
   - Test social links with keyboard
   - Verify aria-labels
   - Test form (if any)

---

## 14. Resources and References

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)

### Communities
- [WebAIM](https://webaim.org/)
- [Deque University](https://dequeuniversity.com/)
- [Inclusive Components](https://inclusive-components.design/)

### Testing
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Pa11y](https://pa11y.org/)
- [axe-core](https://github.com/dequelabs/axe-core)
