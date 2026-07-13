import type { FeaturedProject } from "@/types";

/**
 * getFeaturedProjects — returns the 3 curated projects for the homepage.
 *
 * Selection criteria (per Featured Work IA document):
 *   1. Agent Control Tower — AI / most zeitgeist-relevant to target companies
 *   2. Doctor Workbench   — Healthcare / expert-user design under clinical pressure
 *   3. Airport Analytics  — Operations / most unusual domain, strongest closing impression
 *
 * These three share an underlying design thesis:
 * "Designing for professionals who make consequential decisions under pressure,
 *  with incomplete information, where software is one input among many."
 *
 * Ordering is intentional — see IA document for rationale.
 *
 * Sprint 3: this function will be replaced by a content layer that reads
 * frontmatter from content/projects/[slug]/index.mdx and filters by
 * a `featured: true` flag.
 *
 * Content owners: update the `challenge`, `difficulty`, `outcome`, `role`,
 * and `year` fields below with real, NDA-safe content before deploying.
 * Leave `outcome: null` if no publishable metric exists — do not use
 * placeholder text; a missing row is more credible than a vague claim.
 */
export function getFeaturedProjects(): FeaturedProject[] {
  return FEATURED_PROJECTS;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "agent-control-tower",
    domains: ["AI", "Enterprise SaaS"],
    challenge:
      "Autonomous workflows were executing tasks with limited human visibility, making it difficult for operators to identify silent failures or intervene when system behaviour deviated from expectations.",
    difficulty:
      "Designing for non-deterministic systems requires accommodating probability rather than fixed states. Traditional alert systems assume a binary pass/fail, which doesn't translate to agent behaviours that complete successfully but produce incorrect outputs. The design challenge was to create visual indicators of agent intent, allowing operators to assess confidence levels and step in before errors propagated.",
    role: "Lead Product Designer",
    year: "2024",
    outcome:
      "Designed an observability model that visualised agent decision paths, transitioning the operator's role from manual system monitoring to exception-based auditing.",
  },
  {
    id: "doctor-workbench",
    domains: ["Healthcare", "Clinical Software"],
    challenge:
      "Physicians were managing patient care by manually consolidating data across multiple disconnected clinical applications, creating fragmented workflows during patient rounds.",
    difficulty:
      "Clinical environments require high information density to prevent diagnostic blind spots, rendering standard visual simplification patterns counterproductive. The challenge was maintaining clear typographic hierarchy across dense telemetry, while ensuring the system could be operated rapidly under variable ward conditions and easily recovered when workflows were interrupted.",
    role: "Lead Product Designer",
    year: "2023",
    outcome:
      "Unified siloed patient data views into a structured clinical workspace, reducing the necessity for navigation context-switches during patient evaluations.",
  },
  {
    id: "airport-analytics",
    domains: ["Analytics", "Airport Operations"],
    challenge:
      "Control room operators were managing real-time gate and resource assignments using delayed data feeds, making it difficult to coordinate adjustments as operational conditions changed.",
    difficulty:
      "Operations managers require immediate pattern recognition to make resource decisions, rather than tools for open-ended data exploration. The design challenge lay in structuring real-time data feeds so that critical conflicts—like gate availability overlaps—were surfaced as actionable exceptions, allowing operators to evaluate trade-offs during live events.",
    role: "Lead Product Designer",
    year: "2022",
    outcome:
      "Developed a unified operational display that shifted the interface model from passive telemetry monitoring to active exception-handling.",
  },
];
