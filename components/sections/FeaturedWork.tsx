import Link from "next/link";
import { cn } from "@/lib";
import { getFeaturedProjects } from "@/lib";
import type { FeaturedProject } from "@/types";
import AgentSimulator from "./AgentSimulator";
import DoctorWorkflow from "./DoctorWorkflow";
import AirportTimeline from "./AirportTimeline";

/**
 * FeaturedWork — Selected Work grid section.
 *
 * Operational Precision visual guidelines:
 * - High-contrast layout optimized for dark background (#09090B).
 * - Asymmetric two-column cards stacked vertically, separated by zinc-900 border.
 * - Challenge statements are the visual centerpieces of each card (h3 display font).
 */
export default function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      className="w-full py-20 md:py-28 border-b border-zinc-900"
      aria-labelledby="featured-work-heading"
    >
      <div className="mx-auto px-6">

        {/* ── Section header row ────────────────────────────────────── */}
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="featured-work-heading"
            className="text-[9px] font-bold uppercase tracking-widest text-neutral-500"
          >
            Selected Work
          </h2>
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wider text-neutral-450 transition-colors duration-200 hover:text-white"
            aria-label="View all case studies"
          >
            View all work →
          </Link>
        </div>

        {/* ── Design thesis — section framing ──────────────────────── */}
        <p className="mb-16 max-w-xl text-base leading-relaxed text-zinc-400">
          Three curated systems. Each project examines a specific challenge in
          expert utility—designing interfaces where the primary constraints are cognitive limits,
          system safety, and the time required to make an informed decision.
        </p>

        {/* ── Card list ─────────────────────────────────────────────── */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              isFirst={index === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   FeaturedCard — private sub-component
───────────────────────────────────────────────────────────────────────── */

function FeaturedCard({
  project,
  isFirst,
}: {
  project: FeaturedProject;
  isFirst: boolean;
}) {
  const challengeId = `project-${project.id}-challenge`;

  // Dynamic CTAs matching the distinct system focus of each card (Design Direction Report rule)
  const getCardCta = () => {
    switch (project.id) {
      case "agent-control-tower":
        return "Inspect AI Observability Model";
      case "doctor-workbench":
        return "Inspect Clinical Workspace Architecture";
      case "airport-analytics":
        return "Inspect Operational Decision Interface";
      default:
        return "Inspect case study";
    }
  };

  return (
    <article
      className={cn(
        "grid grid-cols-1 gap-8 py-12 lg:grid-cols-[220px_1fr] lg:gap-16",
        !isFirst && "border-t border-zinc-900"
      )}
      aria-labelledby={challengeId}
    >
      {/* ── Left column: metadata ──────────────────────────────────── */}
      <div className="flex flex-col items-start gap-6">
        
        {/* Domain chips */}
        <div className="flex flex-wrap gap-2">
          {project.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-zinc-900 bg-neutral-900/40 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-neutral-400 font-mono"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Role & Year */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-neutral-500 font-semibold">
            {project.role}
          </p>
          <p className="text-xs text-neutral-500 font-mono">
            {project.year}
          </p>
        </div>

        {/* Impact outcome - design-centric */}
        {project.outcome !== null && (
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-neutral-500">
              Contribution
            </p>
            <p className="text-xs leading-relaxed text-zinc-400">
              {project.outcome}
            </p>
          </div>
        )}

      </div>

      {/* ── Right column: narrative ────────────────────────────────── */}
      <div className="flex flex-col items-start">
        
        {/* Challenge statement (Card headline) */}
        <h3
          id={challengeId}
          className="font-display text-xl font-bold leading-snug text-zinc-100 md:text-2xl"
        >
          {project.challenge}
        </h3>

        {/* Why difficult (Insight) */}
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {project.difficulty}
        </p>

        {/* Project-Specific Simulators (Signature Experiences) */}
        {project.id === "agent-control-tower" && (
          <div className="mt-8 w-full max-w-xl">
            <AgentSimulator />
          </div>
        )}

        {project.id === "doctor-workbench" && (
          <div className="mt-8 w-full max-w-xl">
            <DoctorWorkflow />
          </div>
        )}

        {project.id === "airport-analytics" && (
          <div className="mt-8 w-full max-w-xl">
            <AirportTimeline />
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/#work`} // Temporary placeholder anchor link for Sprint 1 / Phase 1
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 transition-colors duration-200 hover:text-white"
          aria-label="Inspect design case study"
        >
          {getCardCta()}
          <span aria-hidden="true">→</span>
        </Link>

      </div>
    </article>
  );
}
