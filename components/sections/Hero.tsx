import Link from "next/link";
import IndustryChips from "./IndustryChips";

/**
 * Hero — homepage above-the-fold landing section.
 *
 * Visual style: Operational Precision.
 * Typography uses:
 * - font-display (Space Grotesk) for the main headers
 * - font-sans (Inter) for copy and metadata
 *
 * Copy decisions (aligned with DESIGN_MANIFESTO.md & BUILD_RULES.md):
 * - Primary headline: "Designing systems for expert decisions."
 * - Avoids visual duplication: Name is in navbar, status stands alone here.
 * - Single, focused CTA pointing to the work anchor to concentrate reading flow.
 */
export default function Hero() {
  return (
    <section
      className="w-full py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* ── Top row: status status badge ─────────────────────────── */}
        <div className="mb-8 flex items-center justify-between border-b border-neutral-900 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Systems & UX Architect
          </p>
          <a
            href="mailto:hello@aboobacker.design"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-700 transition-colors duration-200"
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Available for opportunities
            </span>
          </a>
        </div>

        {/* ── Headline block ────────────────────────────────────────── */}
        {/*
          Tonal split using display typography (Space Grotesk).
          Line 1 = primary statement. Line 2 = qualifying constraint.
          Contrast: Zinc-100 on Zinc-500 (passes WCAG AA at large scales).
        */}
        <div className="mb-8">
          <h1
            id="hero-heading"
            className="font-display leading-[1.05] text-5xl font-bold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
          >
            Designing systems
          </h1>
          <p
            className="font-display leading-[1.05] text-5xl font-bold tracking-tight text-zinc-500 md:text-6xl lg:text-7xl"
            aria-label="for expert decisions."
          >
            for expert decisions.
          </p>
        </div>

        {/* ── Supporting paragraph ──────────────────────────────────── */}
        {/*
          Grounded narrative focusing on high-stakes expert environments.
          No fluff, no vague assertions.
        */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">
          I design software for professionals operating in environments where
          information is high-frequency, conditions change rapidly, and decisions
          carry significant real-world consequences—from clinics and control towers
          to AI operations.
        </p>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <div className="mb-16 flex items-center gap-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-opacity duration-200 hover:opacity-90"
          >
            Explore Selected Work
            <span aria-hidden="true">↓</span>
          </Link>
          <a
            href="mailto:hello@aboobacker.design"
            className="text-xs font-bold uppercase tracking-wider text-neutral-400 transition-colors duration-200 hover:text-white"
          >
            Get in Touch →
          </a>
        </div>

        {/* ── Industry chips ────────────────────────────────────────── */}
        <div className="border-t border-neutral-900 pt-8">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Domain Focus
          </p>
          <IndustryChips />
        </div>
      </div>
    </section>
  );
}
