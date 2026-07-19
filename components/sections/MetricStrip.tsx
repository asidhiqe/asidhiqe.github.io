"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register ScrollTrigger for client-side execution
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MetricStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const verticalsRef = useRef<HTMLSpanElement>(null);
  const hubsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        { ref: yearsRef, end: 13, prefix: "", suffix: "+" },
        { ref: verticalsRef, end: 7, prefix: "0", suffix: "" },
        { ref: hubsRef, end: 3, prefix: "0", suffix: "" }
      ];

      targets.forEach((t) => {
        if (!t.ref.current) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: t.end,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (t.ref.current) {
              const formattedVal = Math.floor(obj.value);
              // Ensure custom padding formats
              const padVal = t.prefix && formattedVal < 10 ? `${t.prefix}${formattedVal}` : `${formattedVal}`;
              t.ref.current.textContent = `${padVal}${t.suffix}`;
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="metrics"
      ref={containerRef}
      className="w-full border-y border-border bg-background/70 py-10 relative overflow-hidden"
      aria-label="Experience metrics"
    >
      {/* Structural Crosshair Corner Markings */}
      <span className="blueprint-corner blueprint-corner-tl" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-tr" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-bl" aria-hidden="true" />
      <span className="blueprint-corner blueprint-corner-br" aria-hidden="true" />

      <div className="mx-auto max-w-4xl grid grid-cols-3 text-center divide-x divide-border/50">
        
        {/* Metric 1: Years Active */}
        <div className="flex flex-col items-center justify-center">
          <span
            ref={yearsRef}
            className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            0+
          </span>
          <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-muted md:text-[9px]">
            Years Active
          </span>
        </div>

        {/* Metric 2: Core Verticals */}
        <div className="flex flex-col items-center justify-center">
          <span
            ref={verticalsRef}
            className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            00
          </span>
          <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-muted md:text-[9px]">
            Core Verticals
          </span>
        </div>

        {/* Metric 3: Global Hubs */}
        <div className="flex flex-col items-center justify-center">
          <span
            ref={hubsRef}
            className="font-mono text-2xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl"
          >
            00
          </span>
          <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-muted md:text-[9px]">
            Global Hubs
          </span>
        </div>

      </div>
    </section>
  );
}
