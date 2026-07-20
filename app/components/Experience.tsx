"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
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

const activeRoles: Job[] = [
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
  }
];

const historicalRoles: Job[] = [
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    const isCurrentlyExpanded = expandedIndex === index;
    const nextIndex = isCurrentlyExpanded ? null : index;

    // Retrieve references to content wrappers
    const content = containerRef.current?.querySelector(`.accordion-content-${index}`);
    const arrow = containerRef.current?.querySelector(`.accordion-arrow-${index}`);

    if (content) {
      if (isCurrentlyExpanded) {
        // Slide Up
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
        if (arrow) gsap.to(arrow, { rotation: 0, duration: 0.3 });
      } else {
        // Slide Down (Auto calculate scroll height)
        gsap.set(content, { height: "auto" });
        gsap.from(content, {
          height: 0,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        });
        if (arrow) gsap.to(arrow, { rotation: 45, duration: 0.3 }); // Rotate 45deg for 'x' feel
      }
    }

    // Slide up previous active one if exists
    if (expandedIndex !== null && expandedIndex !== index) {
      const prevContent = containerRef.current?.querySelector(`.accordion-content-${expandedIndex}`);
      const prevArrow = containerRef.current?.querySelector(`.accordion-arrow-${expandedIndex}`);
      if (prevContent) {
        gsap.to(prevContent, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
      if (prevArrow) gsap.to(prevArrow, { rotation: 0, duration: 0.3 });
    }

    setExpandedIndex(nextIndex);
  };

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="experience-body" ref={containerRef}>
        {/* Left Column: Sticky Title */}
        <div className="experience-sticky">
          <ScrollReveal as="div">
            <p className="experience-eyebrow-mini">Career Pathway</p>
            <h2 id="experience-title" className="experience-title-bold">
              15+ Years Designing Complex Systems
            </h2>
            <p className="experience-subtitle">
              A timeline showing progression from hands-on frontend web layout scripting to principal design leadership across critical enterprise domains.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Timeline Track */}
        <div className="experience-timeline">
          
          {/* Active Senior Roles */}
          {activeRoles.map((job, idx) => (
            <ScrollReveal
              key={job.company}
              as="div"
              delay={idx * 0.05}
              className="experience-entry"
            >
              <div className="experience-timeline-dot" />
              <div className="experience-time">{job.years}</div>
              <h3 className="experience-role">{job.role}</h3>
              <div className="experience-company-meta">
                <span className="experience-company">{job.company}</span>
                <span className="experience-meta-sep">·</span>
                <span className="experience-type-loc">{job.location}</span>
              </div>
              
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
            </ScrollReveal>
          ))}

          {/* Collapsible Earlier Roles */}
          <div className="experience-accordion-section">
            <ScrollReveal as="h4" className="experience-accordion-heading">
              Earlier Professional History
            </ScrollReveal>

            {historicalRoles.map((job, idx) => {
              const globalIdx = idx + activeRoles.length;
              const isExpanded = expandedIndex === globalIdx;

              return (
                <ScrollReveal
                  key={job.company}
                  as="div"
                  className={`experience-accordion-row ${isExpanded ? "is-expanded" : ""}`}
                >
                  <button
                    className="experience-accordion-trigger"
                    onClick={() => toggleExpand(globalIdx)}
                    aria-expanded={isExpanded}
                    aria-controls={`accordion-panel-${globalIdx}`}
                  >
                    <span className="experience-accordion-years">{job.years}</span>
                    <span className="experience-accordion-role">{job.role}</span>
                    <span className="experience-accordion-company">{job.company}</span>
                    <span
                      className={`experience-accordion-icon accordion-arrow-${globalIdx}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`accordion-panel-${globalIdx}`}
                    className={`experience-accordion-panel accordion-content-${globalIdx}`}
                    style={{ height: 0, overflow: "hidden", opacity: 0 }}
                  >
                    <div className="experience-accordion-inner">
                      <div className="experience-type-loc" style={{ marginBottom: "0.5rem" }}>
                        {job.location} · {job.type}
                      </div>
                      
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
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
