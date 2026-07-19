import Link from "next/link";
import IndustryChips from "./IndustryChips";

/**
 * Hero — homepage above-the-fold landing section.
 *
 * Visual style: High-end Editorial, Swiss typography influence.
 * Uses Lora/Playfair Display for high-status statement layout.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-16 md:py-24 border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto px-6">

        {/* ── Top row: status status badge ─────────────────────────── */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Systems & Product Design Leader
          </p>
          <a
            href="mailto:hello@aboobacker.design"
            className="self-start inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-[9px] font-bold uppercase tracking-wider">
              Available for opportunities
            </span>
          </a>
        </div>

        {/* ── Headline block ────────────────────────────────────────── */}
        <div className="mb-8">
          <h1
            id="hero-heading"
            className="font-display leading-[1.1] text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-4xl"
          >
            Designing systems for people who make{" "}
            <span className="font-serif italic font-normal text-accent block sm:inline">
              consequential decisions
            </span>{" "}
            every day.
          </h1>
        </div>

        {/* ── Supporting paragraph ──────────────────────────────────── */}
        <p className="mb-10 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
          Over the past 13+ years, I have engineered product interfaces and workflows for healthcare clinicians, 
          airport controllers, financial analysts, and operators supervising autonomous AI fleets. 
          My work translates complex, high-frequency technical streams into transparent, decision-ready software.
        </p>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <div className="mb-16 flex items-center gap-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-opacity duration-200 hover:opacity-90"
          >
            Explore Selected Work
            <span aria-hidden="true">↓</span>
          </Link>
          <a
            href="mailto:hello@aboobacker.design"
            className="text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-200"
          >
            Get in Touch →
          </a>
        </div>

        {/* ── Domain Focus chips ────────────────────────────────────── */}
        <div className="border-t border-border pt-8">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-muted">
            Domain Focus
          </p>
          <IndustryChips />
        </div>
      </div>
    </section>
  );
}
