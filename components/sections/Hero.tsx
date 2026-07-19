"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import IndustryChips from "./IndustryChips";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in hero elements with a smooth staggered glide
      gsap.fromTo(
        ".gsap-hero-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="w-full py-16 md:py-24 border-b border-border relative overflow-hidden"
      aria-labelledby="hero-heading"
      ref={containerRef}
    >
      {/* Precision Blueprint Corner Markers */}
      <span className="absolute top-4 left-4 text-[7px] font-mono text-muted/30 selection:bg-transparent" aria-hidden="true">⌞ HDG: 010 ⌟</span>
      <span className="absolute top-4 right-4 text-[7px] font-mono text-muted/30 selection:bg-transparent" aria-hidden="true">⌞ ALT: 13+ ⌟</span>

      <div className="mx-auto px-6">
        
        {/* Top row: Status/Title badge */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4 gsap-hero-item">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted flex items-center gap-2">
            <span>[SYS_INIT]</span>
            <span className="h-1.5 w-[1px] bg-border" />
            <span>Systems & Product Design Leader</span>
          </p>
          <a
            href="mailto:hello@aboobacker.design"
            className="self-start inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-[9px] font-bold uppercase tracking-wider text-foreground">
              Available for opportunities
            </span>
          </a>
        </div>

        {/* Headline block */}
        <div className="mb-8 gsap-hero-item">
          <h1
            id="hero-heading"
            className="font-display leading-[1.15] text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-4xl"
          >
            Designing systems for people who make{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              consequential decisions
            </span>{" "}
            every day.
          </h1>
        </div>

        {/* Supporting paragraph */}
        <p className="mb-10 max-w-2xl text-sm sm:text-base leading-relaxed text-muted gsap-hero-item">
          Over the past 13+ years, I have engineered product interfaces and workflows for healthcare clinicians, 
          airport controllers, financial analysts, and operators supervising autonomous AI fleets. 
          My work translates complex, high-frequency technical streams into transparent, decision-ready software.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex items-center gap-6 gsap-hero-item">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-opacity duration-200 hover:opacity-90 cursor-pointer"
          >
            Explore Selected Work
            <span aria-hidden="true">↓</span>
          </Link>
          <a
            href="mailto:hello@aboobacker.design"
            className="text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Get in Touch →
          </a>
        </div>

        {/* Domain Focus Chips */}
        <div className="border-t border-border pt-8 gsap-hero-item">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-muted">
            Domain Focus
          </p>
          <IndustryChips />
        </div>

      </div>
    </section>
  );
}
