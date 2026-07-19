/**
 * AboutSection — biography as a positioning argument.
 *
 * Visual style: Operational Precision.
 * Content: "What 13 Years Have Taught Me" from DESIGN_MANIFESTO.md.
 * Borders aligned with the zinc-900 CAD grid.
 */
export default function AboutSection() {
  const lessons = [
    {
      domain: "Healthcare",
      code: "EMR",
      lesson:
        "Hiding clinical information to achieve a 'clean' interface increases cognitive load and clinical risk. Expert tools require data density structured for situational awareness.",
    },
    {
      domain: "Airport Operations",
      code: "OPS",
      lesson:
        "Real-time control systems do not need data exploration dashboards; they need active exception-handling. The visual system must isolate anomalies and present clear resolution paths.",
    },
    {
      domain: "Enterprise SaaS",
      code: "SYS",
      lesson:
        "Product alignment across design, engineering, and product teams is more valuable than any individual mockup. Design leadership is about helping teams make better system decisions.",
    },
    {
      domain: "AI Orchestration",
      code: "AGNT",
      lesson:
        "Users do not need perfect automation; they need trustworthy automation. The design challenge is helping operators evaluate confidence thresholds and decide when to intervene.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto px-6">
        
        {/* Section label */}
        <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-muted">
          Executive Summary
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Biography positioning */}
          <div className="lg:col-span-5">
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground"
            >
              Aboobacker Sidhiqe
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              I am a Principal Product Designer specializing in enterprise systems. 
              My work focuses on the intersection of human cognitive limits and complex 
              workflows. Over the last 13+ years, I have designed systems in highly regulated 
              and operational domains where user errors carry significant real-world costs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I believe the role of a design leader is to ask difficult questions, challenge 
              system assumptions, and create cross-functional alignment that moves products forward.
            </p>
          </div>

          {/* Right: Timeline of Lessons */}
          <div className="lg:col-span-7 border-l border-border pl-8 lg:pl-12">
            <h3 className="mb-8 text-[10px] font-bold uppercase tracking-wider text-muted">
              Lessons from 13+ Years in the Field
            </h3>

            <div className="flex flex-col gap-8">
              {lessons.map((item) => (
                <div
                  key={item.domain}
                  className="group relative flex flex-col gap-1 border-b border-border/60 pb-6"
                >
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                    [{item.code}] {item.domain}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
