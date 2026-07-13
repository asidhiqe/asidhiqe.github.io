/**
 * AboutSection — biography as a positioning argument.
 *
 * Visual style: Operational Precision.
 * Content: "What 13 Years Have Taught Me" from DESIGN_MANIFESTO.md.
 * Evaluated under: Clarity, Leadership, Systems Thinking.
 */
export default function AboutSection() {
  const lessons = [
    {
      domain: "Healthcare",
      lesson:
        "Hiding clinical information to achieve a 'clean' interface increases cognitive load and clinical risk. Expert tools require data density structured for situational awareness.",
    },
    {
      domain: "Airport Operations",
      lesson:
        "Real-time control systems do not need data exploration dashboards; they need active exception-handling. The visual system must isolate anomalies and present clear resolution paths.",
    },
    {
      domain: "Enterprise SaaS",
      lesson:
        "Product alignment across design, engineering, and product teams is more valuable than any individual mockup. Design leadership is about helping teams make better system decisions.",
    },
    {
      domain: "AI Orchestration",
      lesson:
        "Users do not need perfect automation; they need trustworthy automation. The design challenge is helping operators evaluate confidence thresholds and decide when to intervene.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section label */}
        <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Executive Summary
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Biography positioning */}
          <div className="lg:col-span-5">
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-white"
            >
              Aboobacker Sidhiqe
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
              I am a Principal Product Designer specializing in enterprise systems. 
              My work focuses on the intersection of human cognitive limits and complex 
              workflows. Over the last 13+ years, I have designed systems in highly regulated 
              and operational domains where user errors carry significant real-world costs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              I believe the role of a design leader is to ask difficult questions, challenge 
              system assumptions, and create cross-functional alignment that moves products forward.
            </p>
          </div>

          {/* Right: Timeline of Lessons */}
          <div className="lg:col-span-7 border-l border-neutral-900 pl-8 lg:pl-12">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-wider text-neutral-400">
              Lessons from 13+ Years in the Field
            </h3>

            <div className="flex flex-col gap-8">
              {lessons.map((item) => (
                <div
                  key={item.domain}
                  className="group relative flex flex-col gap-1 border-b border-neutral-950 pb-6"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {item.domain}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
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
