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
 * - Cards redesigned as fully enclosed grid modules with internal borders.
 * - Spacing optimized responsively to maintain density on mobile (p-4) and breathing room on desktop (p-6/p-8).
 */
export default function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      className="w-full py-16 md:py-28 border-b border-zinc-900"
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
        <p className="mb-12 md:mb-16 max-w-xl text-sm md:text-base leading-relaxed text-zinc-400">
          Three curated systems. Each project examines a specific challenge in
          expert utility—designing interfaces where the primary constraints are cognitive limits,
          system safety, and the time required to make an informed decision.
        </p>

        {/* ── Card list ─────────────────────────────────────────────── */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <FeaturedCard
              key={project.id}
              project={project}
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
}: {
  project: FeaturedProject;
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

  // Check if this project has an active simulator widget
  const hasSimulator = ["agent-control-tower", "doctor-workbench", "airport-analytics"].includes(project.id);

  return (
    <article
      className="mb-12 w-full grid grid-cols-1 lg:grid-cols-[240px_1fr] border border-zinc-900 bg-neutral-950/10"
      aria-labelledby={challengeId}
    >
      {/* ── Left Column: Metadata Context ── */}
      <div className="p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-zinc-900 flex flex-col justify-between gap-6 bg-neutral-950/30">
        
        {/* Top block: Domain tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-zinc-900/60 bg-neutral-900/40 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-neutral-400 font-mono"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Middle block: Role and year */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-550">
            Design Context
          </span>
          <p className="text-xs text-neutral-400 font-medium">
            {project.role}
          </p>
          <p className="text-xs text-neutral-500 font-mono">
            {project.year}
          </p>
        </div>

        {/* Bottom block: Contribution notes */}
        {project.outcome !== null && (
          <div className="border-t border-zinc-900/40 pt-4 w-full">
            <span className="mb-1 block text-[8px] font-bold uppercase tracking-widest text-neutral-550">
              Diagnostic Outcome
            </span>
            <p className="text-xs leading-relaxed text-zinc-400">
              {project.outcome}
            </p>
          </div>
        )}

      </div>

      {/* ── Right Column: Narrative & Simulator ── */}
      <div className="flex flex-col">
        
        {/* Cell 1: Challenge & Difficulty */}
        <div className="p-4 md:p-6 border-b border-zinc-900 flex flex-col items-start gap-4">
          {/* Challenge statement (Card headline) */}
          <h3
            id={challengeId}
            className="font-display text-lg font-bold leading-snug text-zinc-100 md:text-2xl"
          >
            {project.challenge}
          </h3>

          {/* Why difficult (Insight) */}
          <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
            {project.difficulty}
          </p>
        </div>

        {/* Cell 2: Integrated Simulator Screen (Flush) */}
        {hasSimulator && (
          <div className="w-full border-b border-zinc-900 bg-neutral-950/20">
            {project.id === "agent-control-tower" && <AgentSimulator />}
            {project.id === "doctor-workbench" && <DoctorWorkflow />}
            {project.id === "airport-analytics" && <AirportTimeline />}
          </div>
        )}

        {/* Cell 3: Card Footer / CTA Controls */}
        <div className="p-4 bg-neutral-950/40 flex items-center justify-between">
          <Link
            href={`/#work`} // Temporary placeholder anchor link for Sprint 1 / Phase 1
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 transition-colors duration-200 hover:text-white"
            aria-label="Inspect design case study"
          >
            {getCardCta()}
            <span aria-hidden="true">→</span>
          </Link>

          <span className="hidden sm:inline font-mono text-[8px] text-zinc-700 uppercase tracking-widest selection:bg-transparent">
            [inspect_system_flow]
          </span>
        </div>

      </div>
    </article>
  );
}
