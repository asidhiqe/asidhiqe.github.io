---
name: github-deployment
description: Handles deployment to GitHub Pages via GitHub Actions, static export verification, production readiness checks, and deployment troubleshooting.
---

# GitHub Deployment

You manage the deployment pipeline for Aboobacker Sidhiqe's portfolio. The portfolio deploys as a static HTML export to GitHub Pages via GitHub Actions.

## Deployment Architecture

```
Local Development
    │
    ▼
git push to main
    │
    ▼
GitHub Actions (.github/workflows/deploy.yml)
    │
    ├── Checkout code
    ├── Setup Node.js 20
    ├── Configure Pages
    ├── npm ci
    ├── npm run build (generates /out)
    ├── Upload /out as artifact
    └── Deploy to GitHub Pages
    │
    ▼
Live at https://asidhiqe.github.io
```

## Current Workflow

The deployment workflow is defined in [deploy.yml](file:///e:/Project/asidhiqe-portfolio/.github/workflows/deploy.yml):

- **Trigger**: Push to `main` branch or manual `workflow_dispatch`
- **Runner**: `ubuntu-latest`
- **Node version**: 20
- **Build command**: `npm run build`
- **Output directory**: `./out`
- **Deployment method**: `actions/deploy-pages@v4`

## Pre-Deployment Checklist

Before pushing to main (or before recommending a deployment):

### 1. Build Verification

```bash
npm run build
```

Must complete without errors. Check for:

- [ ] No TypeScript compilation errors
- [ ] No ESLint errors that break the build
- [ ] All dynamic routes have `generateStaticParams`
- [ ] No server-only APIs used (no `next/headers`, no API routes, no Server Actions)
- [ ] The `out/` directory is generated with all expected pages

### 2. Static Export Verification

After build, verify the `out/` directory contains:

- [ ] `index.html` — Homepage
- [ ] `404.html` — Custom 404 page (if created)
- [ ] All expected page directories with their `index.html` files
- [ ] All static assets (images, fonts, CSS, JS)
- [ ] No broken internal links

### 3. Content Verification

- [ ] All text content is final and proofread
- [ ] No placeholder content (Lorem ipsum, TODO, TBD)
- [ ] No development-only content visible
- [ ] All images are present and properly sized
- [ ] Metadata (title, description, OG tags) is set for all pages

### 4. Performance Verification

- [ ] Total page weight is reasonable (< 2MB for initial load)
- [ ] Images are optimized (WebP/AVIF, appropriate dimensions)
- [ ] No unused CSS or JavaScript in the bundle
- [ ] Fonts are subset and loaded efficiently

### 5. Accessibility Verification

- [ ] Run axe or similar tool on all pages
- [ ] Keyboard navigation works throughout
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG 2.1 AA

## Deployment Commands

### Local Build Test

```bash
# Full build (same as CI)
npm run build

# Serve the static output locally to verify
npx serve out
```

### Manual Deployment Trigger

If the GitHub Actions workflow supports `workflow_dispatch`, deployment can be triggered manually from the Actions tab on GitHub.

## Troubleshooting

### Build Fails in CI but Works Locally

Common causes:

1. **Different Node version** — CI uses Node 20. Verify local version matches.
2. **Missing dependencies** — CI uses `npm ci` which requires an exact `package-lock.json`. Run `npm ci` locally to verify.
3. **Environment variables** — Only `NEXT_PUBLIC_*` variables work in static export. No server-side env vars.
4. **Case sensitivity** — Linux (CI) is case-sensitive; Windows (local) is not. Check file imports for case mismatches.

### Pages Deploy but Show 404

1. Check if `basePath` is needed in `next.config.ts`
2. Verify the repository name matches the expected URL path
3. Check that GitHub Pages is configured to use GitHub Actions as the source (not a branch)
4. Verify the `out/` directory structure matches expected URLs

### Styles Missing in Production

1. Tailwind purge may have removed classes used dynamically — verify all classes are statically analyzable
2. Check that no CSS imports are missing
3. Verify PostCSS configuration is correct

### Images Not Loading

1. Check image paths — they should be relative to the public directory
2. Verify `images.unoptimized: true` is set in `next.config.ts` (it is)
3. Check for case-sensitivity issues in filenames

## GitHub Pages Configuration

### Repository Settings

The repository should have:

- **Pages source**: GitHub Actions (not "Deploy from a branch")
- **Custom domain**: (if applicable, configure in Pages settings)
- **HTTPS**: Enforced

### CNAME

If using a custom domain, create a `public/CNAME` file with the domain name. This will be copied to `out/CNAME` during build.

## Deployment Workflow Maintenance

### Updating Node Version

If Node.js needs to be updated:

1. Update `node-version` in `deploy.yml`
2. Update `engines` in `package.json` (if specified)
3. Regenerate `package-lock.json` with the new Node version
4. Test the full build locally before pushing

### Updating Actions

Periodically check for updates to the GitHub Actions used:

- `actions/checkout` — currently v4
- `actions/setup-node` — currently v4
- `actions/configure-pages` — currently v5
- `actions/upload-pages-artifact` — currently v3
- `actions/deploy-pages` — currently v4

Pin to major versions to get security patches while avoiding breaking changes.

## Production Readiness Gate

Before any production deployment, verify ALL of the following:

- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] No TypeScript errors
- [ ] All pages render correctly in the `out/` directory
- [ ] No console errors in browser
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] All links work (no 404s)
- [ ] Metadata is set for all pages
- [ ] Accessibility audit passes
- [ ] Performance is acceptable (< 3s LCP)
- [ ] Content is final (no placeholders)
- [ ] `prefers-reduced-motion` is respected
- [ ] `prefers-color-scheme` is respected (if dark mode exists)

## How to Invoke This Skill

Use this skill:

- Before any push to main
- When deployment fails
- When adding new pages that need static export
- When updating the deployment workflow
- When configuring custom domains
- When troubleshooting production issues
