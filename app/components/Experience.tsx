"use client";

import { useState, useRef } from "react";
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

const roles: Job[] = [
  {
    years: "Mar 2023 - Present",
    role: "Product Experience Specialist",
    company: "GlobalLogic",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India · Hybrid",
    bullets: [
      "Led UX across two SaaS platforms: Client-1 (ITSM) and Client-2 (Integration & AI).",
      "For Client-1, redesigned procurement and quotation modules; conducted heuristic reviews and usability testing.",
      "For Client-2, drove UX for partner portals, AI Agent Garden, and Agent Control Tower for governance and compliance.",
      "Collaborated across time zones with global teams using agile workflows and accessible, scalable design solutions."
    ],
    tags: ["Figma", "SaaS UX", "AI Governance", "Usability Testing"]
  },
  {
    years: "Oct 2022 - Mar 2023",
    role: "Senior Product Designer",
    company: "Atlassian",
    type: "Part-time",
    location: "Bengaluru, Karnataka, India · Remote",
    bullets: [
      "Designed three internal platforms used by Atlassian’s HR, Sales, and Hackathon teams globally.",
      "Developed a resume review and offer generation system tailored to regional hiring policies across multiple geographies.",
      "Created a license management dashboard to help enterprise clients consolidate usage of Jira, Confluence, and other tools.",
      "Built a hackathon event tool for internal teams to submit projects and manage judging workflows.",
      "Ensured all solutions aligned with Atlassian’s design system and accessibility guidelines."
    ],
    tags: ["Atlassian Design System", "Enterprise UX", "Internal Tooling", "Accessibility"]
  },
  {
    years: "Dec 2021 - Oct 2022",
    role: "Senior Product Designer",
    company: "TruKKer",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India · On-site",
    bullets: [
      "Led UX design for digital financial platforms under Moxey.ai, focusing on logistics and payments across the Middle East (UAE, KSA).",
      "Built scalable design systems and intuitive user flows for Fleet Partners (real-time payments, wallet, 24x7 transfers), Transporters (expense tracking, dashboard, invoice factoring), and Merchants.",
      "Designed a prepaid driver card in collaboration with ADIB and Visa, launched as a new revenue stream.",
      "Delivered flows for working capital optimization, micro-entrepreneurship, and financial inclusion while supporting Arabic localization."
    ],
    tags: ["Moxey.ai", "FinTech Logistics", "Arabic Localization", "Visa ADIB Integration"]
  },
  {
    years: "Aug 2018 - Dec 2021",
    role: "Product Lead / Founding Team Member",
    company: "Algaeh Technologies",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India · On-site",
    bullets: [
      "Solely led the design of Algaeh’s Healthcare ERP, spanning 10+ modules: Hospital Information Management, Radiology, Laboratory, Pharmacy, Billing, and Insurance Claims.",
      "Designed UI/UX for Web + iOS/Android, including a mobile patient app with QR onboarding that cut registration time by 70%.",
      "Created all sales and product decks for stakeholders in Saudi Arabia and India.",
      "Delivered multilingual UI, local regulations compliance, and implemented HL7 support, barcode tracking, and MySQL report generation."
    ],
    tags: ["Healthcare ERP", "Product Ownership", "Mobile App Design", "React Prototyping"]
  },
  {
    years: "Oct 2015 - Aug 2018",
    role: "Lead UX/UI Designer",
    company: "GrayMatter Software Services",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India · On-site",
    bullets: [
      "Led UX for analytics platforms across insurance, aviation, and enterprise domains.",
      "Built BI dashboards used for operational forecasting, airport traffic planning, and agent performance optimization.",
      "Designed and launched a mobile app for insurance agents using PhoneGap/Cordova, enabling lead tracking, product sales, and visit logging.",
      "Mentored junior designers through weekly feedback loops and collaborative design reviews."
    ],
    tags: ["BI Dashboards", "Aviation Analytics", "PhoneGap Cordova", "Team Mentorship"]
  },
  {
    years: "Jul 2011 - Oct 2015",
    role: "UX Engineer",
    company: "Manthan Systems",
    type: "Full-time",
    location: "Bangalore · On-site",
    bullets: [
      "Designed core UX flows for Merchandise, Supply Chain, and Vendor Link analytics products used by enterprise clients.",
      "Collaborated with mobile teams to build tablet-optimized dashboards during the rise of iPad adoption in BI environments.",
      "Developed interaction flows and working HTML5/CSS3/JavaScript prototypes to support engineering handoff and early-stage testing."
    ],
    tags: ["UX Engineering", "HTML5 Prototypes", "Tablet UX", "BI Analytics"]
  },
  {
    years: "Jul 2010 - Jun 2011",
    role: "UI Designer",
    company: "Aptus",
    type: "Full-time",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Delivered completed design concepts for both Corporate and E-commerce portals, including wireframes, mockups, and user testing.",
      "Collaborated closely with cross-functional teams to ensure that design intent is preserved throughout the project lifecycle.",
      "Developed and implemented a program to clearly define Interaction Design's deliverables and role in the design process."
    ],
    tags: ["Interaction Design", "Responsive Design", "Web Standards"]
  },
  {
    years: "Nov 2008 - Feb 2010",
    role: "Graphic & Web Designer",
    company: "Ipix solutions",
    type: "Full-time",
    location: "Kozhikode, Kerala, India · On-site",
    bullets: [
      "Designed and developed static and dynamic websites using HTML, CSS, JavaScript, and XML, working within the standards of that time.",
      "Delivered multiple projects for Middle East-based clients, giving early exposure to localization needs, visual preferences, and client communication.",
      "Created supporting print materials (flyers, brochures, banners) to align digital presence with brand identity."
    ],
    tags: ["Web Design", "Graphic Design", "Localization Basics", "HTML CSS Javascript"]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open: Index 0 (GlobalLogic)
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="experience-body" ref={containerRef}>
        {/* Left Column: Sticky Title & Highlights Widget */}
        <div className="experience-sticky">
          <ScrollReveal as="div">
            <p className="experience-eyebrow-mini">Career Pathway</p>
            <h2 id="experience-title" className="experience-title-bold">
              15+ Years Designing Complex Systems
            </h2>
            <p className="experience-subtitle">
              A timeline showing progression from hands-on frontend web layout scripting to principal design leadership across critical enterprise domains.
            </p>

            {/* Career Summary Highlights Card */}
            <div className="experience-summary-card">
              <span className="experience-summary-label">Key Systems Shipped</span>
              <ul className="experience-summary-list">
                <li>
                  <span className="summary-dot" />
                  <span>3 Enterprise SaaS Platforms</span>
                </li>
                <li>
                  <span className="summary-dot" />
                  <span>4 Global Logistics & FinTech Products</span>
                </li>
                <li>
                  <span className="summary-dot" />
                  <span>1 AI Agent Governance Hub</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Interactive Accordion Timeline Track */}
        <div className="experience-timeline">
          {roles.map((job, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal
                key={job.company}
                as="div"
                delay={idx * 0.03}
                className={`experience-entry ${isOpen ? "is-open" : "is-collapsed"}`}
              >
                <div className="experience-timeline-dot" />
                
                {/* Header Row (Clickable Accordion Trigger) */}
                <button
                  type="button"
                  className="experience-entry-trigger"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="experience-time">{job.years}</div>
                  <div className="experience-title-row">
                    <h3 className="experience-role">{job.role}</h3>
                    <span className="experience-company-chip">{job.company}</span>
                    <span className="experience-accordion-toggle-icon">{isOpen ? "−" : "+"}</span>
                  </div>
                  <div className="experience-company-meta">
                    <span className="experience-type-loc">{job.location} · {job.type}</span>
                  </div>
                </button>

                {/* Collapsible Details Body */}
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
