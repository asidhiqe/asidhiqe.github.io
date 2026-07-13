# content/projects/

This directory contains individual project case study data files.

Each project lives in its own folder:
  content/projects/<slug>/
    metadata.ts   — title, tags, year, role, industry, featured flag
    body.mdx      — (future) long-form narrative (Sprint 3+)

Do NOT import from this directory directly in components.
Use `lib/content.ts` as the data access layer.
