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
      className="w-full py-16 md:py-24 border-b border-border"
      aria-labelledby="featured-work-heading"
    >
      <div className="mx-auto px-6">

        {/* ── Section header row ────────────────────────────────────── */}
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="featured-work-heading"
            className="text-[9px] font-bold uppercase tracking-widest text-muted"
          >
            Selected Case Studies
          </h2>
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wider text-muted transition-colors duration-200 hover:text-accent"
            aria-label="View all case studies"
          >
            View all work →
          </Link>
        </div>

        {/* ── Design thesis — section framing ──────────────────────── */}
        <p className="mb-12 md:mb-16 max-w-xl text-sm md:text-base leading-relaxed text-muted">
          Three selected projects demonstrating systems engineering in high-stakes utilities. 
          Each case study explores the mitigation of cognitive fatigue, system opacity, and decision-making friction.
        </p>

        {/* ── Card list ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-16">
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

  // Dynamic CTAs matching the distinct system focus of each card
  const getCardCta = () => {
    switch (project.id) {
      case "agent-control-tower":
        return "Review AI Observability Model";
      case "doctor-workbench":
        return "Review Clinical Workspace Architecture";
      case "airport-analytics":
        return "Review Operational Decision Interface";
      default:
        return "Review case study";
    }
  };

  // Check if this project has an active simulator widget
  const hasSimulator = ["agent-control-tower", "doctor-workbench", "airport-analytics"].includes(project.id);

  return (
    <article
      className="w-full grid grid-cols-1 lg:grid-cols-[260px_1fr] border border-border bg-background/40 rounded-lg shadow-sm overflow-hidden"
      aria-labelledby={challengeId}
    >
      {/* ── Left Column: Metadata Context ── */}
      <div className="p-6 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between gap-8 bg-background/60">
        
        {/* Top block: Domain tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-border bg-accent-tint/30 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent font-mono"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Middle block: Role and year */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-bold uppercase tracking-widest text-muted">
            Design Context
          </span>
          <p className="text-xs text-foreground font-semibold">
            {project.role}
          </p>
          <p className="text-xs text-muted font-mono">
            {project.year}
          </p>
        </div>

        {/* Bottom block: Contribution notes */}
        {project.outcome !== null && (
          <div className="border-t border-border pt-4 w-full">
            <span className="mb-1 block text-[8px] font-bold uppercase tracking-widest text-muted">
              Diagnostic Outcome
            </span>
            <p className="text-xs leading-relaxed text-muted">
              {project.outcome}
            </p>
          </div>
        )}

      </div>

      {/* ── Right Column: Narrative & Simulator ── */}
      <div className="flex flex-col">
        
        {/* Cell 1: Challenge & Difficulty */}
        <div className="p-6 border-b border-border flex flex-col items-start gap-4 bg-background/20">
          {/* Challenge statement (Card headline) */}
          <h3
            id={challengeId}
            className="font-display text-xl font-bold leading-tight text-foreground md:text-2xl"
          >
            {project.challenge}
          </h3>

          {/* Why difficult (Insight) */}
          <p className="text-xs sm:text-sm leading-relaxed text-muted">
            {project.difficulty}
          </p>
        </div>

        {/* Cell 2: Integrated Simulator Screen (Flush) */}
        {hasSimulator && (
          <div className="w-full border-b border-border bg-background/5">
            {project.id === "agent-control-tower" && <AgentSimulator />}
            {project.id === "doctor-workbench" && <DoctorWorkflow />}
            {project.id === "airport-analytics" && <AirportTimeline />}
          </div>
        )}

        {/* Cell 3: Card Footer / CTA Controls */}
        <div className="px-6 py-4 bg-background/40 flex items-center justify-between">
          <Link
            href={`/#work`} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent transition-colors duration-200 hover:opacity-85"
            aria-label="Inspect design case study"
          >
            {getCardCta()}
            <span aria-hidden="true">→</span>
          </Link>

          <span className="hidden sm:inline font-mono text-[8px] text-muted uppercase tracking-widest selection:bg-transparent">
            [SYS_INTEGRITY_READOUT]
          </span>
        </div>

      </div>
    </article>
  );
}
