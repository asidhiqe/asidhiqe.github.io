"use client";

import ScrollReveal from "./ScrollReveal";

interface Job {
  years: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

const experience: Job[] = [
  {
    years: "2024 – Present",
    role: "Principal Product Designer",
    company: "Autonomous AI Oversight Platforms",
    description: "Leading product strategy, complex layout grids, and multi-agent supervision flows. Balancing machine agency and human oversight guidelines for safety-critical configurations.",
    tags: ["Product Strategy", "AI Systems", "Systems Design"],
  },
  {
    years: "2021 – 2024",
    role: "Senior Enterprise Product Designer",
    company: "Logistics & Fleet Systems",
    description: "Designed dispatcher coordination tools and high-density maps. Redefined layout structures, resulting in a measurable increase in dispatcher task speed.",
    tags: ["Data Density", "Workflows", "Enterprise SaaS"],
  },
  {
    years: "2018 – 2021",
    role: "Lead Product Designer",
    company: "Healthcare Analytics Systems",
    description: "Spearheaded user experience overhaul for clinical decision dashboards and diagnostics software. Conducted intensive on-site research in clinical operating rooms.",
    tags: ["Healthcare UX", "Field Research", "Accessibility"],
  },
  {
    years: "2015 – 2018",
    role: "Product Designer",
    company: "FinTech & Transactional SaaS",
    description: "Created dashboard experiences for institutional invoice financing and commercial lending pipelines. Standardized shared component libraries.",
    tags: ["Design Systems", "FinTech", "Data Visualization"],
  },
];

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
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.15} className="about-thesis-card">
            <span className="about-thesis-label">Thesis</span>
            <p className="about-thesis-body">
              The best enterprise software feels invisible because it supports judgment, not distraction.
            </p>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.2} className="about-principles-list">
            <div className="about-principle-item">
              <span className="about-principle-number">[01] Organize, don't hide</span>
              <p className="about-principle-desc">
                Hiding information increases risk in expert tools. Safest layouts are often information-dense.
              </p>
            </div>
            <div className="about-principle-item">
              <span className="about-principle-number">[02] Trust over delight</span>
              <p className="about-principle-desc">
                Trust is a UX problem. Systems build confidence through predictability and transparent feedback.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="about-right">
          <ScrollReveal as="div">
            <p className="about-eyebrow-mini">Experience Timeline</p>
          </ScrollReveal>

          <div className="about-timeline">
            {experience.map((job, idx) => (
              <ScrollReveal
                key={job.company}
                as="div"
                delay={idx * 0.05}
                className="about-timeline-entry"
              >
                <div className="about-timeline-years">{job.years}</div>
                <h3 className="about-timeline-role">{job.role}</h3>
                <div className="about-timeline-company">{job.company}</div>
                <p className="about-timeline-desc">{job.description}</p>
                <div className="about-timeline-tags" role="list" aria-label="Skills applied">
                  {job.tags.map((tag) => (
                    <span key={tag} className="about-timeline-tag" role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
