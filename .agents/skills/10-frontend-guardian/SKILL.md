---
name: frontend-guardian
description: Ensures implementation quality for the Next.js portfolio without changing product decisions. Checks architecture, accessibility, SEO, performance, static export compatibility, and GitHub Pages deployment readiness.
---

# Frontend Guardian

You ensure the portfolio's codebase is production-quality. You don't make product decisions — that's the architect's and designer's job. You make sure whatever they decide is implemented correctly, accessibly, and performantly.

## Tech Stack

From [AI_CONTEXT.md](file:///e:/Project/asidhiqe-portfolio/docs/AI_CONTEXT.md):

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Output**: Static export (`output: "export"` in next.config.ts)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions ([deploy.yml](file:///e:/Project/asidhiqe-portfolio/.github/workflows/deploy.yml))

## Critical Constraint: Static Export

This portfolio uses `output: "export"` which generates a fully static HTML site. This means:

### Not Available in Static Export

- Server Components with dynamic data fetching
- API Routes
- Server Actions
- Middleware (most functionality)
- `next/headers` and `next/cookies`
- Dynamic routes without `generateStaticParams`
- Image optimization via `next/image` (already set to `unoptimized: true`)
- Incremental Static Regeneration (ISR)

### Must Use Instead

- Client-side data fetching if dynamic data is needed
- Static data from local files (content/projects, content/articles)
- `generateStaticParams` for all dynamic routes
- Standard `<img>` tags or Next.js Image with `unoptimized: true`
- Static metadata exports

**Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`** as stated in [AGENTS.md](file:///e:/Project/asidhiqe-portfolio/AGENTS.md). This version may have breaking changes.

## Architecture Rules

### Component Organization

The current structure:

```
components/
├── layout/      → Navbar, Footer, structural wrappers
├── sections/    → Hero, MetricStrip, ManifestoBlock, FeaturedWork, AboutSection
└── ui/          → Reusable primitives (buttons, cards, etc.)
```

Rules:

1. **Sections** are page-level compositions. They are not reusable — each is used once on a specific page.
2. **UI components** are reusable primitives. They must not contain page-specific logic.
3. **Layout components** manage structure. They must not contain content.
4. **No component should exceed 200 lines.** If it does, decompose it.
5. **No prop drilling beyond 2 levels.** Use composition or context instead.

### File Naming

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `camelCase.ts` in `types/` directory
- Content: `kebab-case.md` or `kebab-case.ts` in `content/`

### TypeScript

- **Strict mode** must remain enabled
- **No `any` types** — use proper typing or `unknown` with type guards
- **Interface over type** for component props (unless union types are needed)
- **Export types** from the `types/` directory, not inline in components

## Accessibility Checklist

Every component must meet WCAG 2.1 AA:

### Semantic HTML

- [ ] Use semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [ ] Headings follow logical order (h1 → h2 → h3, no skipping)
- [ ] Single `<h1>` per page
- [ ] Lists use `<ul>`/`<ol>` + `<li>`, not styled divs
- [ ] Buttons are `<button>`, links are `<a>` — never interchange them

### Keyboard Navigation

- [ ] All interactive elements are focusable
- [ ] Tab order follows visual order
- [ ] Focus indicators are visible (never `outline: none` without replacement)
- [ ] Skip-to-content link exists
- [ ] No keyboard traps

### ARIA

- [ ] ARIA labels on non-text interactive elements
- [ ] `aria-current="page"` on active navigation links
- [ ] `aria-expanded` on expandable elements
- [ ] `role="img"` + `aria-label` on decorative SVG containers
- [ ] No redundant ARIA (don't add `role="button"` to `<button>`)

### Color and Contrast

- [ ] Text contrast ratio ≥ 4.5:1 (normal text) or ≥ 3:1 (large text)
- [ ] Interactive element contrast ≥ 3:1 against adjacent colors
- [ ] Information is not conveyed by color alone

### Motion

- [ ] Respects `prefers-reduced-motion: reduce`
- [ ] No auto-playing animations that can't be paused
- [ ] No flashing content (< 3 flashes per second)

## SEO Requirements

### Every Page Must Have

```tsx
export const metadata: Metadata = {
  title: "Page Title — Aboobacker Sidhiqe",
  description: "Compelling description under 160 characters",
  openGraph: {
    title: "Page Title — Aboobacker Sidhiqe",
    description: "Same or similar description",
    type: "website",
    // url and images as appropriate
  },
};
```

### Structural SEO

- [ ] Single `<h1>` per page, descriptive and keyword-rich
- [ ] Proper heading hierarchy
- [ ] Descriptive `alt` text on all images
- [ ] Canonical URLs set
- [ ] Structured data (JSON-LD) for Person and portfolio items where appropriate
- [ ] Sitemap generated
- [ ] robots.txt configured

## Performance

### Bundle Size

- [ ] No unnecessary dependencies — every npm package must justify its existence
- [ ] Tree-shakeable imports (import specific functions, not entire libraries)
- [ ] Images optimized (WebP/AVIF where possible, appropriate dimensions)
- [ ] Fonts loaded with `font-display: swap` or Next.js font optimization

### Loading

- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] No layout shifts caused by late-loading content

### Static Assets

- [ ] All images have explicit `width` and `height` attributes
- [ ] Above-the-fold images are not lazy-loaded
- [ ] Below-the-fold images use lazy loading
- [ ] CSS is critical-path optimized by Next.js

## GitHub Pages Compatibility

### Build Verification

Before any deployment:

```bash
npm run build
```

This must complete without errors. The `out/` directory is what gets deployed.

### Common Issues

1. **Dynamic routes** — Every dynamic route needs `generateStaticParams`
2. **Environment variables** — Only `NEXT_PUBLIC_*` variables are available in static export
3. **Base path** — If deployed to `username.github.io` (root), no `basePath` needed. If deployed to `username.github.io/repo`, set `basePath` in `next.config.ts`
4. **404 page** — Create `app/not-found.tsx` for custom 404
5. **Trailing slashes** — Configure `trailingSlash: true` if GitHub Pages requires it

## Code Review Checklist

Before approving any PR or code change:

- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No `console.log` in production code
- [ ] No hardcoded strings that should be in content files
- [ ] Components are under 200 lines
- [ ] No inline styles (use Tailwind classes)
- [ ] All images have alt text
- [ ] All interactive elements have focus states
- [ ] `prefers-reduced-motion` is respected
- [ ] Semantic HTML is used throughout
- [ ] No accessibility violations (test with axe)

## How to Invoke This Skill

Use this skill:

- Before any code implementation begins (to verify approach)
- After implementation (to review code quality)
- Before any deployment (to verify build)
- When adding new dependencies
- When creating new components or pages
- When modifying the build or deployment pipeline
