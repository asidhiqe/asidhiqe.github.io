"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-body">
        {/* Left Column: Design Philosophy */}
        <div className="about-left">
          <ScrollReveal as="div">
            <p className="about-eyebrow-mini">Design Philosophy</p>
            <h2 id="about-title" className="about-statement-bold">
              I design systems that help experts move with <em>clarity.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1}>
            <p className="about-description-text">
              Complex products do not become easier by hiding information. They become easier when information is organized into predictable, trustworthy patterns. That is the core of my work: reducing uncertainty without stripping away the context people need.
            </p>
            <p className="about-description-text">
              Based in Bengaluru, India. Currently leading UX research, strategy, and design systems for enterprise-grade SaaS platforms, AI orchestration hubs, and safety-critical operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Thesis & Principles */}
        <div className="about-right">
          <ScrollReveal as="div" className="about-thesis-card">
            <span className="about-thesis-label">Thesis</span>
            <p className="about-thesis-body">
              The best enterprise software feels invisible because it supports human judgment, not distraction.
            </p>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1} className="about-principles-list">
            <div className="about-principle-item">
              <span className="about-principle-number">[01] Organize, don't hide</span>
              <p className="about-principle-desc">
                Hiding info in complex systems increases cognitive load and operational risk. High-density layouts, when structured well, are the safest and most efficient.
              </p>
            </div>
            <div className="about-principle-item">
              <span className="about-principle-number">[02] Trust over delight</span>
              <p className="about-principle-desc">
                Enterprise users do not need visual flourishes; they need reliability. Design systems establish trust through consistent feedback, clear hierarchy, and predictability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
