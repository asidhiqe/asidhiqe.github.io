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
    description: "Leading the product strategy, information architecture, and core interaction frameworks for complex multi-agent supervision interfaces. Balancing machine agency and human oversight guidelines for safety-critical configurations.",
    tags: ["Product Strategy", "AI Systems", "Systems Design"],
  },
  {
    years: "2021 – 2024",
    role: "Senior Enterprise Product Designer",
    company: "Logistics & Fleet Systems",
    description: "Designed cross-platform workflow tools enabling fleet managers, dispatchers, and drivers to coordinate shipments in real-time. Redefined data density standards, resulting in a measurable increase in dispatcher task throughput.",
    tags: ["Data Density", "Workflows", "Enterprise SaaS"],
  },
  {
    years: "2018 – 2021",
    role: "Lead Product Designer",
    company: "Healthcare Analytics Systems",
    description: "Spearheaded the user experience overhaul of diagnostic software dashboards and clinical decision tools. Conducted intensive on-site field research in operating rooms and lab facilities to map medical workflows accurately.",
    tags: ["Healthcare UX", "Field Research", "Accessibility"],
  },
  {
    years: "2015 – 2018",
    role: "Product Designer",
    company: "FinTech & Transactional SaaS",
    description: "Created responsive dashboard experiences for institutional invoice financing and commercial lending pipelines. Established shared interface libraries to ensure consistency between design teams and front-end codebases.",
    tags: ["Design Systems", "FinTech", "Data Visualization"],
  },
  {
    years: "2012 – 2015",
    role: "Interaction Designer",
    company: "Digital Workspace Products",
    description: "Focused on keyboard-driven workflows and efficiency-focused software interfaces. Partnered with engineering teams to run usability checks, improving accessibility and overall visual quality of the product suite.",
    tags: ["Interaction Design", "Prototyping", "Usability Testing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="section-header">
        <p className="section-eyebrow">Experience</p>
        <div>
          <h2 id="experience-title" className="section-title">
            13 years of designing for consequential decisions.
          </h2>
          <p className="section-header-sub">
            A chronological timeline of my career history, focusing on complex enterprise applications, data density, and interaction efficiency.
          </p>
        </div>
      </div>

      <div className="experience-body">
        <div className="experience-sticky">
          <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Career timeline</p>
          <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: "1.6" }}>
            My work spans various industries, but the objective remains consistent: design tools that make complex operations manageable and reduce mental fatigue for expert operators.
          </div>
        </div>

        <div className="experience-timeline">
          {experience.map((job, idx) => (
            <ScrollReveal
              key={job.company}
              as="div"
              delay={idx * 0.05}
              className="experience-entry"
            >
              <div className="experience-years">{job.years}</div>
              <h3 className="experience-role">{job.role}</h3>
              <div className="experience-company">{job.company}</div>
              <p className="experience-description">{job.description}</p>
              <div className="experience-tags" role="list" aria-label="Skills applied">
                {job.tags.map((tag) => (
                  <span key={tag} className="experience-tag" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
