"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn, getFeaturedProjects } from "@/lib";
import type { FeaturedProject } from "@/types";
import AgentSimulator from "./AgentSimulator";
import DoctorWorkflow from "./DoctorWorkflow";
import AirportTimeline from "./AirportTimeline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = getFeaturedProjects();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal project cards on scroll
      gsap.fromTo(
        ".gsap-project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="w-full py-16 md:py-24 border-b border-border"
      aria-labelledby="featured-work-heading"
    >
      <div className="mx-auto px-6">

        {/* Section header row */}
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="featured-work-heading"
            className="section-kicker"
          >
            Selected Case Studies
          </h2>
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wider text-muted transition-colors duration-200 hover:text-accent cursor-pointer"
            aria-label="View all case studies"
          >
            View all work →
          </Link>
        </div>

        {/* Design thesis — section framing */}
        <p className="mb-12 md:mb-16 max-w-2xl text-sm md:text-base leading-relaxed text-muted">
          Three selected projects that show how product thinking, operational context, and interface design work together in complex environments.
        </p>

        {/* Card list */}
        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <div key={project.id} className="gsap-project-card">
              <FeaturedCard project={project} />
            </div>
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

  const getSystemTag = () => {
    switch (project.id) {
      case "agent-control-tower":
        return "[SYS_STATUS: ACTIVE // LOC: BOOMI_INTEGRATION]";
      case "doctor-workbench":
        return "[SYS_STATUS: DEPLOYED // LOC: CLINICAL_ERP]";
      case "airport-analytics":
        return "[SYS_STATUS: FORECAST // LOC: GRAYMATTER_BI]";
      default:
        return "[SYS_INTEGRITY_VERIFIED]";
    }
  };

  const hasSimulator = ["agent-control-tower", "doctor-workbench", "airport-analytics"].includes(project.id);

  return (
    <article
      className="w-full grid grid-cols-1 lg:grid-cols-[260px_1fr] border border-border bg-background/80 rounded-none overflow-hidden hover-blueprint relative"
      aria-labelledby={challengeId}
    >
      {/* Precision Blueprint Corner Markers */}
      <span className="blueprint-corner blueprint-corner-tl" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-tr" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-bl" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-br" aria-hidden="true" />

      {/* Left Column: Metadata Context */}
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

      {/* Right Column: Narrative & Simulator */}
      <div className="flex flex-col">
        
        {/* Cell 1: Challenge & Difficulty */}
        <div className="p-6 border-b border-border flex flex-col items-start gap-4 bg-background/20">
          <h3
            id={challengeId}
            className="font-display text-xl font-bold leading-tight text-foreground md:text-2xl"
          >
            {project.challenge}
          </h3>

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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent transition-colors duration-200 hover:opacity-85 cursor-pointer"
            aria-label="Inspect design case study"
          >
            {getCardCta()}
            <span aria-hidden="true">→</span>
          </Link>

          <span className="hidden sm:inline font-mono text-[8px] text-muted uppercase tracking-widest selection:bg-transparent">
            {getSystemTag()}
          </span>
        </div>

      </div>
    </article>
  );
}
