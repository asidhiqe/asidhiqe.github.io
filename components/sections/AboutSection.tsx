"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const careerSteps = [
    {
      company: "Boomi & ConnectWise (GlobalLogic)",
      role: "Product Experience Specialist",
      period: "2023 - Present",
      bullets: [
        "Led UX for Boomi's partner portal, AI Agent Garden, and Agent Control Tower for governance.",
        "Redesigned ConnectWise ITSM procurement and quotation modules, lowering friction in IT workflows."
      ]
    },
    {
      company: "Atlassian",
      role: "Senior Product Designer",
      period: "2022 - 2023",
      bullets: [
        "Designed global license management dashboards for enterprise Confluence/Jira users.",
        "Built offer-generation systems tailored to regional policies and global internal event tools."
      ]
    },
    {
      company: "TruKKer & Moxey.ai",
      role: "Senior Product Designer",
      period: "2021 - 2022",
      bullets: [
        "Led UX for GCC logistics/payments platforms. Designed transporters wallets and sales reporting.",
        "Designed prepaid driver cards with ADIB/Visa, establishing a new revenue stream."
      ]
    },
    {
      company: "Algaeh Technologies",
      role: "Product Lead & Founding Designer",
      period: "2018 - 2021",
      bullets: [
        "Solely designed a 10+ module Clinical Healthcare ERP (Radiology, Lab, Insurance Claims).",
        "Created a mobile patient app with QR-onboarding, reducing registration times by 70%."
      ]
    },
    {
      company: "GrayMatter Software Services",
      role: "Lead UX/UI Designer",
      period: "2015 - 2018",
      bullets: [
        "Built business intelligence displays for airport traffic forecasting and operational planning.",
        "Mentored junior designers and established design systems for Pentaho BI client integrations."
      ]
    },
    {
      company: "Manthan Systems",
      role: "UX Engineer",
      period: "2011 - 2015",
      bullets: [
        "Designed core analytics systems for Merchandise, Supply Chain, and VendorLink platforms."
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal timeline items sequentially on scroll
      gsap.fromTo(
        ".gsap-timeline-item",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full py-20 md:py-24 border-b border-border/40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto px-6">
        
        {/* Section label */}
        <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-muted">
          Executive Journey
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Biography positioning */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start">
            <div>
              <h2
                id="about-heading"
                className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground"
              >
                Aboobacker Sidhiqe
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                I am a Principal Product Designer specializing in enterprise systems. 
                My work focuses on the intersection of human cognitive limits and complex 
                workflows. Over the last 13+ years, I have designed software in highly regulated 
                and operational domains where user errors carry significant real-world costs.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                I believe the role of a design leader is to ask difficult questions, challenge 
                system assumptions, and create cross-functional alignment that moves products forward.
              </p>
            </div>

            {/* Resume download / direct contact link */}
            <div className="mt-8 pt-6 border-t border-border/60 w-full">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              >
                View Full Executive Resume
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right: Chronological Logbook Timeline */}
          <div className="lg:col-span-7 border-l border-border/50 pl-8 lg:pl-12">
            <h3 className="mb-8 text-[10px] font-bold uppercase tracking-wider text-muted font-mono">
              Chronological Logbook
            </h3>

            <div className="flex flex-col gap-8 relative">
              {careerSteps.map((step) => (
                <div
                  key={step.company}
                  className="gsap-timeline-item relative flex flex-col gap-1 border-b border-border/40 pb-6 last:border-b-0 last:pb-0"
                >
                  {/* Blueprint visual timeline dot */}
                  <span className="absolute -left-[37px] lg:-left-[53px] top-1 h-2 w-2 rounded-full border border-border bg-background" aria-hidden="true" />
                  
                  <div className="flex justify-between items-start gap-4 flex-col sm:flex-row sm:items-center">
                    <div>
                      <h4 className="text-xs font-bold text-foreground">
                        {step.company}
                      </h4>
                      <span className="text-[10px] text-accent font-medium uppercase tracking-wider">
                        {step.role}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-muted whitespace-nowrap">
                      {step.period}
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs text-muted list-none pl-0">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 leading-relaxed">
                        <span className="text-muted/40 font-mono" aria-hidden="true">↳</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
