# Images Directory

This directory contains all static images for the portfolio.

## Structure

```
images/
├── profile/              # Profile pictures
│   └── avatar.webp       # Main profile picture (recommended: 400x400)
├── projects/             # Project images
│   └── [project-slug]/   # One folder per project
│       ├── hero.webp     # Hero image (1200x630 for OG)
│       ├── screenshot-1.webp
│       └── screenshot-2.webp
└── og/                   # Open Graph images
    └── default-og.png    # Default OG image (1200x630)
```

## Image Guidelines

### Format
- Use **WebP** format for optimal performance
- Fallback to PNG for OG images if needed

### Dimensions
- **Profile**: 400x400px (square)
- **Hero Images**: 1200x630px (OG ratio)
- **Screenshots**: Variable, but maintain aspect ratio

### Optimization
- Compress images before adding
- Use tools like [Squoosh](https://squoosh.app/) or [ImageOptim](https://imageoptim.com/)
- Target < 200KB per image

### Naming Convention
- Use kebab-case: `my-project-name.webp`
- Descriptive names: `dashboard-view.webp` not `img1.webp`

## Placeholder Images

For development, you can use placeholder services:

```typescript
// Example placeholder URL
const placeholderUrl = 'https://placehold.co/1200x630/png?text=Project+Name';
```

Or generate placeholders at:
- [Placehold.co](https://placehold.co/)
- [Placeholder.com](https://placeholder.com/)
- [Lorem Picsum](https://picsum.photos/)

## Adding Real Images

1. Export/optimize your images
2. Place them in the correct project folder
3. Update paths in `src/data/projects.ts`
4. Verify images load correctly in development

## Performance Tips

- Use Next.js `<Image>` component for automatic optimization
- Implement lazy loading for below-fold images
- Add blur placeholders for better UX
