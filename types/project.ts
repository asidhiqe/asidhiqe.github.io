/**
 * FeaturedProject — data shape for a card in the Featured Work section.
 *
 * Naming decisions:
 * - `challenge` is the HEADLINE of the card — the actual problem statement.
 *   Not the project name. Not a role title. The specific problem being solved.
 * - `difficulty` explains WHY the problem was hard. This is the credibility signal.
 *   Most portfolios skip this. This field is mandatory for Principal-level positioning.
 * - `outcome` is nullable — it is better to omit it than to use a placeholder.
 *   When populated, it must be NDA-safe and specific (even approximate).
 *
 * Sprint 3: this type will be derived from MDX frontmatter in content/projects/.
 * Until then, data lives in lib/projects.ts as a static array.
 */
export interface FeaturedProject {
  /**
   * Internal identifier — must match the directory name in content/projects/.
   * Used to construct the /work/[slug] route.
   */
  id: string;

  /**
   * Domain labels displayed as chips on the card.
   * Max 2 for readability. Order: primary domain first.
   */
  domains: readonly string[];

  /**
   * The challenge statement. The largest text element in the card.
   * Rule: specific enough that another designer's name could NOT be substituted.
   * Bad:  "Healthcare ERP redesign"
   * Good: "Clinical staff were managing patient care across 8 disconnected systems."
   */
  challenge: string;

  /**
   * Why this problem was hard to solve.
   * This is where design expertise is communicated — not in the solution,
   * but in the articulation of the constraint.
   * 2–4 sentences. Plain language. No jargon.
   */
  difficulty: string;

  /** Role and engagement type — communicates seniority. */
  role: string;

  year: string;

  /**
   * One measurable or qualitative outcome.
   * Must be NDA-safe. Approximate figures are acceptable.
   * Set to null if no publishable outcome exists — omits the Impact row.
   * Do not use placeholder text here; null is more credible than vagueness.
   */
  outcome: string | null;
}

/**
 * ProjectMeta — lightweight summary for cards on the /work page.
 * Separate from FeaturedProject to allow different display contexts.
 * Sprint 3: populated from MDX frontmatter.
 */
export interface ProjectMeta {
  id: string;
  domains: readonly string[];
  title: string;
  summary: string;
  year: string;
}
