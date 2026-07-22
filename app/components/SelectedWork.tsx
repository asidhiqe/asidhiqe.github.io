"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollReveal from "./ScrollReveal";

const systems = [
  {
    code: "01",
    domain: "Healthcare",
    title: "Clinical Workbench",
    detail: "A clinical interface for high-speed decision-making. Doctors need patient history, lab results, imaging, and decision trees visible at once—without cognitive overload.",
    lesson: "Information density organized by decision priority, not administrative convenience.",
    layout: "work-card--featured-1 work-card--healthcare",
    slug: "clinical-workbench",
  },
  {
    code: "02",
    domain: "Airport Analytics",
    title: "Disruption View",
    detail: "A real-time operational map enabling airport controllers to notice, assess, and mitigate flight delays under extreme time constraints.",
    lesson: "Complexity requires a visible order.",
    layout: "work-card--featured-2 work-card--airport",
    slug: "disruption-view",
  },
  {
    code: "03",
    domain: "AI Systems",
    title: "Agent Oversight",
    detail: "A control system for probabilistic AI. Supervisors need to see why an agent chose an action, judge if it's safe, and intervene when needed in real time.",
    lesson: "Trust requires rendering 'why' legible and actionable.",
    layout: "work-card--featured-2 work-card--ai",
    slug: "agent-oversight",
  },
  {
    code: "04",
    domain: "FinTech",
    title: "Invoice Financing",
    detail: "An automated underwriting dashboard that matches SMEs seeking working capital with asset financing pipelines in a single workspace.",
    lesson: "Density reduces transaction friction.",
    layout: "work-card--featured-1 work-card--fintech",
    slug: "invoice-financing",
  },
];

export default function SelectedWork() {
  const bentoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;

      const isHoverCapable = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
      if (!isHoverCapable) return;

      const cards = bentoRef.current?.querySelectorAll(".work-card");
      if (!cards) return;

      cards.forEach((card) => {
        const onMouseMove = contextSafe((e: MouseEvent) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const xc = rect.width / 2;
          const yc = rect.height / 2;

          const dx = (x - xc) / xc;
          const dy = (y - yc) / yc;

          gsap.to(card, {
            rotateX: -dy * 4,
            rotateY: dx * 4,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });

          (card as HTMLElement).style.setProperty("--glow-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--glow-y", `${y}px`);
          (card as HTMLElement).style.setProperty("--glow-opacity", `1`);
        });

        const onMouseLeave = contextSafe(() => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.65,
            ease: "power2.out",
            overwrite: "auto",
          });
          (card as HTMLElement).style.setProperty("--glow-opacity", `0`);
        });

        card.addEventListener("mousemove", onMouseMove as EventListener);
        card.addEventListener("mouseleave", onMouseLeave);
      });
    },
    { scope: bentoRef }
  );

  return (
    <section id="selected-work" className="selected-work" aria-labelledby="work-title">
      <div className="section-header">
        <p className="section-eyebrow">Selected work</p>
        <div>
          <h2 id="work-title" className="section-title">
            Lessons from designing in high-stakes environments.
          </h2>
          <p className="section-header-sub">
            A featured selection from 20+ shipped enterprise products spanning healthcare, real-time operations, AI governance, and financial systems.
          </p>
        </div>
      </div>

      <div className="work-bento" ref={bentoRef}>
        {systems.map((system, idx) => (
          <ScrollReveal
            key={system.code}
            as="div"
            delay={idx % 2 === 0 ? 0 : 0.15}
            className={`work-card ${system.layout}`}
          >
            <Link href={`/work/${system.slug}`} className="work-card-inner" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
              <div className="work-card-glow" aria-hidden="true" />
              <div className="work-card-topline">
                <span className="work-card-index">{system.code}</span>
                <span className="work-card-domain">{system.domain}</span>
              </div>

              {/* Decorative diagram pattern specific to each card */}
              <div className="work-card-visual" aria-hidden="true">
                {system.code === "01" && (
                  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="20" x2="90" y2="20" stroke="var(--line-light)" strokeWidth="1" />
                    <line x1="30" y1="10" x2="30" y2="30" stroke="var(--line-light)" strokeWidth="1" />
                    <line x1="70" y1="10" x2="70" y2="30" stroke="var(--line-light)" strokeWidth="1" />
                    <circle cx="30" cy="20" r="4" fill="var(--accent-warm)" />
                    <circle cx="70" cy="20" r="4" fill="var(--accent-warm)" />
                  </svg>
                )}
                {system.code === "02" && (
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="25" stroke="var(--line-light)" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="30" cy="30" r="15" stroke="var(--line-light)" strokeWidth="1" />
                    <line x1="30" y1="5" x2="30" y2="55" stroke="var(--line-light)" strokeWidth="1" />
                    <line x1="5" y1="30" x2="55" y2="30" stroke="var(--line-light)" strokeWidth="1" />
                    <circle cx="45" cy="15" r="3" fill="var(--accent-teal)" />
                  </svg>
                )}
                {system.code === "03" && (
                  <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="15" width="20" height="20" rx="2" stroke="var(--line-light)" />
                    <rect x="55" y="15" width="20" height="20" rx="2" stroke="var(--line-light)" />
                    <path d="M25 25 L55 25" stroke="var(--line-light)" strokeDasharray="3 3" />
                    <circle cx="40" cy="25" r="4" fill="var(--accent-teal)" />
                  </svg>
                )}
                {system.code === "04" && (
                  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 30 L40 10 L80 30 L110 10" stroke="var(--line-light)" strokeWidth="1" />
                    <circle cx="40" cy="10" r="4" fill="var(--accent-warm)" />
                    <circle cx="80" cy="30" r="4" fill="var(--accent-warm)" />
                  </svg>
                )}
              </div>

              <div>
                <h3 className="work-card-title">{system.title}</h3>
                <p className="work-card-description">{system.detail}</p>
              </div>

              <div className="work-card-lesson">
                Lesson: {system.lesson}
              </div>

              <span className="work-card-arrow" aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="work-more">
        <span>More case studies coming soon</span>
      </div>
    </section>
  );
}
