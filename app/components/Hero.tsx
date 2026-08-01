"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BannerScroll from "./BannerScroll";

gsap.registerPlugin(useGSAP);

const services = [
  {
    title: "UI/UX Design",
    count: "117 Projects",
    desc: "Crafting intuitive digital product experiences for complex enterprise domains.",
  },
  {
    title: "Front End Develop",
    count: "84 Projects",
    desc: "Building high-performance React & Next.js web applications with fluid animations.",
  },
  {
    title: "Mobile App Develop",
    count: "32 Projects",
    desc: "Designing cross-platform native iOS & Android interfaces built for scale.",
  },
];

const brands = [
  { name: "Meta", icon: "∞", color: "#0668E1" },
  { name: "Google", icon: "G", color: "#EA4335" },
  { name: "LinkedIn", icon: "in", color: "#0A66C2" },
  { name: "Slack", icon: "✦", color: "#E01E5A" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        scope.querySelectorAll(".hero-greeting"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          scope.querySelectorAll(".hero-name"),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.2"
        )
        .fromTo(
          scope.querySelectorAll(".mobile-sequence-container"),
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          scope.querySelectorAll(".hero-subtitle"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          scope.querySelectorAll(".brand-badge"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        )
        .fromTo(
          scope.querySelectorAll(".hero-stat-box"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section id="top" className="hero-mockup-section" ref={containerRef}>
      <div className="hero-left-content">
        <span className="hero-greeting">Hello, I&apos;m</span>
        <h1 className="hero-name">
          Aboobacker Sidhiqe
          <span className="hero-yellow-bar" aria-hidden="true" />
        </h1>

        {/* Dedicated Mobile & Tablet Sequence Card Slot (< 1024px) */}
        <div className="mobile-sequence-container">
          <BannerScroll />
        </div>

        <p className="hero-subtitle">
          Principal Product Designer who crafts high-trust decision systems, digital programming, and design solutions with 13+ years of experience across healthcare, AI, and enterprise SaaS.
        </p>

        {/* Brand Badges */}
        <div className="brand-badges-row">
          {brands.map((b) => (
            <div key={b.name} className="brand-badge">
              <span className="brand-icon" style={{ color: b.color }}>
                {b.icon}
              </span>
              <span className="brand-name">{b.name}</span>
            </div>
          ))}
        </div>

        {/* Metrics Overview */}
        <div className="hero-stats-grid">
          <div className="hero-stat-box">
            <span className="hero-stat-num">250+</span>
            <span className="hero-stat-lbl">Projects Completed</span>
          </div>
          <div className="hero-stat-box">
            <span className="hero-stat-num">100+</span>
            <span className="hero-stat-lbl">Enterprise Clients</span>
          </div>
          <div className="hero-stat-box">
            <span className="hero-stat-num">30+</span>
            <span className="hero-stat-lbl">Global Domains</span>
          </div>
          <div className="hero-stat-box">
            <span className="hero-stat-num">13+</span>
            <span className="hero-stat-lbl">Years Experience</span>
          </div>
        </div>

        {/* Service Cards Showcase */}
        <div className="hero-services-block">
          <h2 className="hero-services-title">What I Can Do For Your Needs</h2>
          <div className="hero-services-list">
            {services.map((s) => (
              <div key={s.title} className="hero-service-card">
                <div className="hero-service-header">
                  <h3 className="hero-service-name">{s.title}</h3>
                  <span className="hero-service-count">{s.count}</span>
                </div>
                <p className="hero-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
