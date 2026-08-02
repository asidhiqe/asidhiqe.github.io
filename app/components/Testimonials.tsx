"use client";

import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sidhiqe is an exceptional Principal Designer who transforms dense, complex enterprise workflows into intuitive, high-trust digital experiences. His design leadership on AI Agent Garden and quotation modules accelerated our product delivery tremendously.",
    author: "Enterprise Product Director",
    role: "VP of Product & Engineering",
    company: "GlobalLogic / Client SaaS",
    avatar: "PD",
  },
  {
    id: "2",
    quote:
      "When it comes to designing complex FinTech and logistics platforms for the Middle East, Sidhiqe is world-class. He built scalable design systems for Moxey.ai and led our prepaid Visa driver card integration seamlessly.",
    author: "FinTech Operations Lead",
    role: "Head of Logistics Products",
    company: "TruKKer / Moxey.ai",
    avatar: "FL",
  },
  {
    id: "3",
    quote:
      "Sidhiqe solely architected Algaeh’s Healthcare ERP across 10+ clinical modules. His QR onboarding app cut patient registration times by 70%, proving his ability to bridge strategic UX vision with technical execution.",
    author: "Chief Technology Officer",
    role: "Co-Founder & CTO",
    company: "Algaeh Technologies",
    avatar: "CT",
  },
  {
    id: "4",
    quote:
      "From internal offer generation tools to Jira/Confluence license management dashboards, Sidhiqe's attention to accessibility, design systems, and cross-functional clarity made him a standout senior designer.",
    author: "Design Systems Manager",
    role: "Lead Product Manager",
    company: "Atlassian Collaboration Tools",
    avatar: "DM",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <ScrollReveal as="div" className="testimonials-header">
          <p className="testimonials-eyebrow">STAKEHOLDER FEEDBACK</p>
          <h2 id="testimonials-title" className="testimonials-title">
            Endorsements & <span className="gradient-text">Impact Reviews</span>
          </h2>
          <p className="testimonials-subtitle">
            Direct feedback from product directors, engineering leaders, and founders on system performance, architectural design, and operational outcome.
          </p>
        </ScrollReveal>

        {/* Carousel Showcase Track */}
        <div
          className="testimonials-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="testimonials-cards-wrapper">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = idx === (activeIndex + 1) % testimonials.length;

              let cardClass = "testimonial-card";
              if (isActive) cardClass += " active";
              else if (isPrev) cardClass += " prev";
              else if (isNext) cardClass += " next";
              else cardClass += " hidden";

              return (
                <div key={t.id} className={cardClass} onClick={() => setActiveIndex(idx)}>
                  <div className="testimonial-quote-mark" aria-hidden="true">
                    “
                  </div>
                  <p className="testimonial-quote-text">{t.quote}</p>

                  <div className="testimonial-author-block">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div className="testimonial-author-info">
                      <h3 className="testimonial-author-name">{t.author}</h3>
                      <p className="testimonial-author-role">
                        {t.role} · <span className="testimonial-company">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="testimonials-controls">
            <button
              onClick={prevSlide}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonial-dots" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`testimonial-dot ${idx === activeIndex ? "active" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  role="tab"
                  aria-selected={idx === activeIndex}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
