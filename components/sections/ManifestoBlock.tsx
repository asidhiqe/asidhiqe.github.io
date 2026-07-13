import Link from "next/link";

/**
 * ManifestoBlock — homepage section displaying key manifesto principles.
 *
 * Visual style: Editorial, typography-dominant.
 * Maps directly to the priority document (DESIGN_MANIFESTO.md) and
 * establishes the strategic position of the personal operating system.
 */
export default function ManifestoBlock() {
  return (
    <section
      id="manifesto"
      className="w-full py-20 md:py-28 border-b border-neutral-900"
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section label */}
        <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Design Philosophy
        </p>

        {/* Section grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Core thesis */}
          <div className="lg:col-span-7">
            <h2
              id="manifesto-heading"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
            >
              I don’t design screens.
              <br />
              I design decision-making systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400">
              Enterprise platforms are naturally complex. Traditional design advice
              focuses on visual reduction—often hiding information that experts need to
              make critical evaluations. Good design is not minimal; it is appropriate,
              organizing complexity to reduce operational uncertainty.
            </p>
          </div>

          {/* Right: Key pillars */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5 border-l border-neutral-900 pl-8 lg:pl-12">
            <div className="flex flex-col gap-6">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Organize, Don’t Hide
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                  Hiding information increases risk in expert tools. Safest layouts are often information-dense.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Trust Over Delight
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                  Trust is a UX problem. Systems build confidence through predictability and transparent feedback.
                </p>
              </div>

            </div>

            <Link
              href="/#about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:text-cyan-400"
            >
              Read full manifesto →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
