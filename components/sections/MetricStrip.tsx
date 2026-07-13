/**
 * MetricStrip — credibility stat row.
 *
 * Visual style: Operational Precision.
 * Responsive logic:
 * - Forced horizontal 3-column layout on all viewports (preventing long vertical stacking on mobile).
 * - Compact text and SVG scaling for small viewports.
 */
export default function MetricStrip() {
  return (
    <section
      className="w-full border-y border-zinc-900 bg-neutral-950/20 py-6 md:py-8"
      aria-label="Experience metrics"
    >
      <div className="mx-auto grid grid-cols-3 text-center">
        
        {/* Metric 1: 13+ Years & Trajectory Sparkline */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            13+
          </span>
          <span className="mt-1.5 text-[8px] font-bold uppercase tracking-widest text-neutral-500 md:text-[9px]">
            Years Active
          </span>
          
          {/* Sparkline Career Trajectory */}
          <div className="mt-3 h-4 w-16 sm:h-6 sm:w-24 overflow-visible text-cyan-500/30">
            <svg viewBox="0 0 100 24" className="w-full h-full">
              <path
                d="M 0,20 Q 25,18 50,12 T 100,2"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="100" cy="2" r="2.5" className="fill-cyan-400" />
            </svg>
          </div>
        </div>

        {/* Metric 2: 07 Verticals & Domain Grid Nodes */}
        <div className="flex flex-col items-center border-x border-zinc-900">
          <span className="font-mono text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            07
          </span>
          <span className="mt-1.5 text-[8px] font-bold uppercase tracking-widest text-neutral-500 md:text-[9px]">
            Core Verticals
          </span>

          {/* 7 Domain Status Node Blocks */}
          <div className="mt-4 flex gap-1 sm:gap-1.5" aria-hidden="true">
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-[1px] bg-neutral-800 border border-neutral-700/60"
                title="Active Domain Verified"
              />
            ))}
          </div>
        </div>

        {/* Metric 3: [SYS] & Input/Output Mapping */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-xl font-bold tracking-tight text-cyan-400 sm:text-3xl md:text-4xl">
            [SYS]
          </span>
          <span className="mt-1.5 text-[8px] font-bold uppercase tracking-widest text-neutral-500 md:text-[9px]">
            Interface Focus
          </span>

          {/* Operational Flow Diagram */}
          <div className="mt-3 h-4 w-16 sm:h-6 sm:w-24 overflow-visible text-neutral-700">
            <svg viewBox="0 0 100 24" className="w-full h-full">
              <rect x="0" y="4" width="24" height="14" rx="2" className="fill-neutral-900 stroke-neutral-800" />
              <text x="12" y="14" textAnchor="middle" className="text-[6px] fill-neutral-500 font-bold">IN</text>
              
              <line x1="28" y1="11" x2="68" y2="11" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
              <polygon points="68,9 72,11 68,13" className="fill-neutral-700" />

              <rect x="76" y="4" width="24" height="14" rx="2" className="fill-cyan-950/40 stroke-cyan-500/40" />
              <text x="88" y="14" textAnchor="middle" className="text-[6px] fill-cyan-400 font-bold">OUT</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
