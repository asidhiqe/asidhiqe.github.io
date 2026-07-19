import Link from "next/link";

/**
 * ManifestoBlock — homepage section displaying key manifesto principles.
 *
 * Visual style: Editorial, typography-dominant.
 * Border parameters updated to zinc-900 to align with CAD grid system.
 */
export default function ManifestoBlock() {
  return (
    <section
      id="manifesto"
      className="w-full py-20 md:py-24 border-b border-border"
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto px-6">
        
        {/* Section label */}
        <p className="section-kicker mb-4">
          Design Philosophy
        </p>

        {/* Section grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Core thesis */}
          <div className="lg:col-span-7">
            <h2
              id="manifesto-heading"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl"
            >
              I design systems that help experts move with clarity.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Complex products do not become easier by hiding information. They become easier when information is organized into predictable, trustworthy patterns. That is the core of my work: reducing uncertainty without stripping away the context people need.
            </p>
            <div className="mt-8 rounded border border-border bg-background/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                Thesis
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                The best enterprise software feels invisible because it supports judgment, not distraction.
              </p>
            </div>
          </div>

          {/* Right: Key pillars */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5 border-l border-border pl-8 lg:pl-12">
            <div className="flex flex-col gap-6">
              
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                  [01] Organize, Don’t Hide
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Hiding information increases risk in expert tools. Safest layouts are often information-dense.
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground/80 font-mono">
                  [02] Trust Over Delight
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Trust is a UX problem. Systems build confidence through predictability and transparent feedback.
                </p>
              </div>

            </div>

            <Link
              href="/#about"
              className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-accent transition-colors duration-200 hover:opacity-80"
            >
              Read full manifesto →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
