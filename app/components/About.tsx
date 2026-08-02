"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollReveal from "./ScrollReveal";

interface Job {
  years: string;
  role: string;
  company: string;
  type: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const aboutPhrases = ["clarity.", "confidence.", "control."];

const primaryRoles: Job[] = [
  {
    years: "2023 – Present",
    role: "Product Experience Specialist",
    company: "GlobalLogic",
    type: "Full-time",
    location: "Bengaluru, India · Hybrid",
    bullets: [
      "Led UX across two SaaS platforms: Client-1 (ITSM) and Client-2 (Integration & AI).",
      "For Client-1, redesigned procurement and quotation modules; conducted heuristic reviews and usability testing.",
      "For Client-2, drove UX for partner portals, AI Agent Garden, and Agent Control Tower for governance and compliance.",
      "Collaborated across time zones with global teams using agile workflows and accessible, scalable design solutions."
    ],
    tags: ["Figma", "SaaS UX", "AI Governance", "Usability Testing"]
  },
  {
    years: "2022 – 2023",
    role: "Senior Product Designer",
    company: "Atlassian",
    type: "Part-time",
    location: "Bengaluru, India · Remote",
    bullets: [
      "Designed three internal platforms used by Atlassian’s HR, Sales, and Hackathon teams globally.",
      "Developed a resume review and offer generation system tailored to regional hiring policies across multiple geographies.",
      "Created a license management dashboard to help enterprise clients consolidate usage of Jira, Confluence, and other tools.",
      "Built a hackathon event tool for internal teams to submit projects and manage judging workflows."
    ],
    tags: ["Atlassian Design System", "Enterprise UX", "Internal Tooling", "Accessibility"]
  },
  {
    years: "2021 – 2022",
    role: "Senior Product Designer",
    company: "TruKKer / Moxey.ai",
    type: "Full-time",
    location: "Bengaluru, India · On-site",
    bullets: [
      "Led UX design for digital financial platforms under Moxey.ai, focusing on logistics and payments across the Middle East (UAE, KSA).",
      "Built scalable design systems and intuitive user flows for Fleet Partners, Transporters, and Merchants.",
      "Designed a prepaid driver card in collaboration with ADIB and Visa, launched as a new revenue stream.",
      "Delivered flows for working capital optimization and financial inclusion while supporting Arabic localization."
    ],
    tags: ["Moxey.ai", "FinTech Logistics", "Arabic Localization", "Visa ADIB Integration"]
  },
  {
    years: "2018 – 2021",
    role: "Product Lead / Founding Team Member",
    company: "Algaeh Technologies",
    type: "Full-time",
    location: "Bengaluru, India · On-site",
    bullets: [
      "Solely led the design of Algaeh’s Healthcare ERP, spanning 10+ modules: Hospital Information Management, Radiology, Laboratory, Pharmacy, Billing, and Insurance Claims.",
      "Designed UI/UX for Web + iOS/Android, including a mobile patient app with QR onboarding that cut registration time by 70%.",
      "Created all sales and product decks for stakeholders in Saudi Arabia and India.",
      "Delivered multilingual UI, local regulations compliance, and implemented HL7 support."
    ],
    tags: ["Healthcare ERP", "Product Ownership", "Mobile App Design", "React Prototyping"]
  },
  {
    years: "2015 – 2018",
    role: "Lead UX/UI Designer",
    company: "GrayMatter Software Services",
    type: "Full-time",
    location: "Bengaluru, India · On-site",
    bullets: [
      "Led UX for analytics platforms across insurance, aviation, and enterprise domains.",
      "Built BI dashboards used for operational forecasting, airport traffic planning, and agent performance optimization.",
      "Designed and launched a mobile app for insurance agents using PhoneGap/Cordova.",
      "Mentored junior designers through weekly feedback loops and collaborative design reviews."
    ],
    tags: ["BI Dashboards", "Aviation Analytics", "PhoneGap Cordova", "Team Mentorship"]
  },
  {
    years: "2011 – 2015",
    role: "UX Engineer",
    company: "Manthan Systems",
    type: "Full-time",
    location: "Bangalore · On-site",
    bullets: [
      "Designed core UX flows for Merchandise, Supply Chain, and Vendor Link analytics products used by enterprise clients.",
      "Collaborated with mobile teams to build tablet-optimized dashboards during the rise of iPad adoption in BI environments.",
      "Developed interaction flows and working HTML5/CSS3/JavaScript prototypes."
    ],
    tags: ["UX Engineering", "HTML5 Prototypes", "Tablet UX", "BI Analytics"]
  }
];

const earlyRoles: Job[] = [
  {
    years: "2010 – 2011",
    role: "UI Designer",
    company: "Aptus",
    type: "Full-time",
    location: "Bengaluru, India",
    bullets: [
      "Delivered completed design concepts for both Corporate and E-commerce portals.",
      "Collaborated with cross-functional teams to preserve design intent through project lifecycle."
    ],
    tags: ["Interaction Design", "Responsive Design", "Web Standards"]
  },
  {
    years: "2008 – 2010",
    role: "Graphic & Web Designer",
    company: "Ipix Solutions",
    type: "Full-time",
    location: "Kozhikode, India · On-site",
    bullets: [
      "Designed and developed static and dynamic websites using HTML, CSS, JavaScript, and XML.",
      "Delivered multiple projects for Middle East-based clients with early exposure to localization needs."
    ],
    tags: ["Web Design", "Graphic Design", "Localization Basics"]
  }
];

export default function About() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("detailed");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [showEarlyCareer, setShowEarlyCareer] = useState(false);

  const handleToggleMode = (mode: "simple" | "detailed") => {
    setViewMode(mode);
    if (mode === "detailed") {
      setOpenIndices(primaryRoles.map((_, i) => i));
    } else {
      setOpenIndices([0]);
    }
  };

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".about-rotating-phrase", {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setPhraseIndex((prev) => (prev + 1) % aboutPhrases.length);
          gsap.fromTo(
            ".about-rotating-phrase",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        },
      });
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-body">
        {/* Left Column: Design Philosophy */}
        <div className="about-left">
          <ScrollReveal as="div">
            <p className="about-eyebrow-mini">Design Philosophy</p>
            <h2 id="about-title" className="about-statement-bold">
              I design systems that help experts move with <em className="about-rotating-phrase gradient-text" style={{ display: "inline-block" }}>{aboutPhrases[phraseIndex]}</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1}>
            <p className="about-description-text">
              In healthcare, too much information kills speed. Too little kills safety. In airport operations, real-time chaos requires organized complexity. In AI governance, probabilistic systems need human-legible control.
            </p>
            <p className="about-description-text">
              My work: designing systems where experts can see what&apos;s happening, understand why it matters, and act with confidence. Not by hiding complexity, but by organizing it into patterns that scale from doctors to controllers to financial analysts.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Integrated Career Pathway */}
        <div className="about-right-timeline">
          <ScrollReveal as="div">
            <p className="experience-eyebrow-mini">CAREER PATHWAY</p>

            {/* Clean Simple ↔ Detailed Toggle Pill Switch */}
            <div className="experience-toggle-wrapper">
              <div className="experience-toggle-pill">
                <button
                  type="button"
                  className={`experience-toggle-btn ${viewMode === "simple" ? "active" : ""}`}
                  onClick={() => handleToggleMode("simple")}
                >
                  Simple
                </button>
                <button
                  type="button"
                  className={`experience-toggle-btn ${viewMode === "detailed" ? "active" : ""}`}
                  onClick={() => handleToggleMode("detailed")}
                >
                  Detailed
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="experience-timeline">
            {primaryRoles.map((job, idx) => {
              const isOpen = openIndices.includes(idx);

              return (
                <ScrollReveal
                  key={job.company}
                  as="div"
                  delay={idx * 0.03}
                  className={`experience-entry ${isOpen ? "is-open" : "is-collapsed"}`}
                >
                  <div className="experience-timeline-dot" />

                  {/* Header Row */}
                  <div
                    role="button"
                    tabIndex={0}
                    className="experience-entry-trigger"
                    onClick={() => toggleAccordion(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleAccordion(idx);
                      }
                    }}
                    aria-expanded={isOpen}
                  >
                    <div className="experience-time">{job.years}</div>
                    <div className="experience-title-row">
                      <h4 className="experience-role">
                        {job.role} <span className="experience-at">at</span> <span className="experience-company-name">{job.company}</span>
                      </h4>
                      <span className="experience-accordion-toggle-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    <div className="experience-type-loc">{job.location} · {job.type}</div>
                  </div>

                  {/* Collapsible Detailed Body */}
                  {isOpen && (
                    <div className="experience-entry-details">
                      <ul className="experience-bullets">
                        {job.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>

                      <div className="experience-tags" role="list" aria-label="Skills applied">
                        {job.tags.map((tag) => (
                          <span key={tag} className="experience-tag" role="listitem">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              );
            })}

            {/* Early Career Expandable Drawer */}
            {showEarlyCareer && (
              <div className="early-career-group">
                {earlyRoles.map((job) => (
                  <div key={job.company} className="experience-entry is-open early-career-item">
                    <div className="experience-timeline-dot early-dot" />
                    <div className="experience-entry-trigger">
                      <div className="experience-time">{job.years}</div>
                      <div className="experience-title-row">
                        <h4 className="experience-role">
                          {job.role} <span className="experience-at">at</span> <span className="experience-company-name">{job.company}</span>
                        </h4>
                      </div>
                      <div className="experience-type-loc">{job.location} · {job.type}</div>
                    </div>
                    <div className="experience-entry-details">
                      <ul className="experience-bullets">
                        {job.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Early Career Toggle Button */}
            <div className="early-career-action">
              <button
                type="button"
                className="early-career-btn"
                onClick={() => setShowEarlyCareer((prev) => !prev)}
              >
                {showEarlyCareer ? "↑ Hide Early Career" : "↓ Early Career (2008 – 2011)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
