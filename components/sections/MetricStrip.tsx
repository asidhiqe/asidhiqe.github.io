/**
 * MetricStrip — credibility stat row.
 *
 * Operational Precision style:
 * - Simple 3-column grid layout
 * - Thin structural borders separating metrics
 * - Large tabular-style numbers using mono typeface
 * - Small technical labels below
 *
 * Grounded in 100% confirmed, defensible data per BUILD_RULES.md.
 */
export default function MetricStrip() {
  return (
    <section
      className="w-full border-y border-neutral-900 bg-neutral-950/40 py-8"
      aria-label="Experience metrics"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 sm:gap-0">
        
        {/* Metric 1 */}
        <div className="flex flex-col items-start sm:items-center sm:text-center">
          <span className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            13+
          </span>
          <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Years Active
          </span>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-start border-neutral-900 sm:items-center sm:border-x sm:text-center">
          <span className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            7
          </span>
          <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Core Verticals
          </span>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-start sm:items-center sm:text-center">
          <span className="font-mono text-3xl font-bold tracking-tight text-cyan-400 md:text-4xl">
            Expert
          </span>
          <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Interface Focus
          </span>
        </div>

      </div>
    </section>
  );
}
