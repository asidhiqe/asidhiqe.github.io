# content/articles/

This directory contains writing and thought leadership articles.

Each article lives in its own folder:
  content/articles/<slug>/
    metadata.ts   — title, date, tags, summary, published flag
    body.mdx      — (future) article content (Sprint 4+)

Do NOT import from this directory directly in components.
Use `lib/content.ts` as the data access layer.
