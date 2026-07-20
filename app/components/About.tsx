"use client";

import ScrollReveal from "./ScrollReveal";

const principles = [
  "Design for decisions, not interactions.",
  "Organize complexity instead of hiding it.",
  "Build trust before delight.",
  "Consistency creates confidence.",
  "Expert users deserve expert tools.",
  "Accessibility is a quality standard, not a feature.",
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-body">
        {/* Left Column — Statement + Narrative */}
        <div className="about-left">
          <ScrollReveal as="div">
            <h2 id="about-title" className="about-statement">
              The work is not to remove complexity. It is to <em>organize it.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1}>
            <div className="about-narrative">
              <p>
                Expert software earns trust when people can see what is happening, understand what matters, and act with confidence. Over the last 13+ years, I have helped design systems that turn heavy data into clear pathways for action.
              </p>
              <p>
                Whether the user is a clinician diagnosing under pressure, an airport controller managing flight delays, or an analyst overseeing AI operations, the interface should support their existing mental models.
              </p>
              <p>
                My focus is on designing structured environments where people and systems interact predictably, maximizing speed and reducing mental friction.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column — Details + Principles */}
        <div className="about-right">
          <ScrollReveal as="div" delay={0.15}>
            <div className="about-detail-group">
              <span className="about-detail-label">Location</span>
              <span className="about-detail-value">San Francisco Bay Area / Remote</span>
            </div>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.2}>
            <div className="about-detail-group">
              <span className="about-detail-label">Inquiries</span>
              <span className="about-detail-value">
                <a href="mailto:aboobacker.sidhiqe@example.com" className="about-link">
                  aboobacker.sidhiqe@example.com
                </a>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.25} className="about-principles">
            <span className="about-principles-label">Core design principles</span>
            <div role="list">
              {principles.map((principle) => (
                <div key={principle} className="about-principle" role="listitem">
                  {principle}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
