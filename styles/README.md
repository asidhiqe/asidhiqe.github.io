# styles/

This directory holds global CSS files that are NOT co-located with components.

Current contents:
  (empty — Tailwind v4 base styles live in app/globals.css)

Future use:
  - Design token overrides (CSS custom properties)
  - Typography scale definitions
  - Animation keyframe libraries

Import order rule:
  app/globals.css  →  @import '../styles/<file>.css'
