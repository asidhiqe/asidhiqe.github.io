"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BannerScroll from "./BannerScroll";

gsap.registerPlugin(useGSAP);

const roles = [
  "Principal Product Designer",
  "Enterprise Systems Architect",
  "AI & High-Trust UI Specialist",
  "Cross-Platform Product Lead",
];

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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roleRef = useRef<HTMLSpanElement>(null);

  // Dynamic Text Changer Interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (roleRef.current) {
        gsap.to(roleRef.current, {
          y: -12,
          opacity: 0,
          duration: 0.35,
          onComplete: () => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            gsap.fromTo(
              roleRef.current,
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
            );
          },
        });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, []);

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
          scope.querySelectorAll(".dynamic-role-badge"),
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3"
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
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="hero-page-wrapper">
      {/* ── FOLD 1: Hero Above-the-Fold View ────────────────── */}
      <section id="top" className="hero-mockup-section fold-one-section">
        <div className="hero-left-content">
          <span className="hero-greeting">Hello, I&apos;m</span>
          <h1 className="hero-name">
            Aboobacker <span className="gradient-text">Sidhiqe</span>
          </h1>

          {/* Dynamic Rotating Role Badge directly below Name Title */}
          <div className="dynamic-role-badge">
            <span className="dynamic-role-prefix">SPECIALIZING IN</span>
            <span ref={roleRef} className="dynamic-role-text">
              {roles[roleIndex]}
            </span>
          </div>

          {/* Dedicated Mobile & Tablet Sequence Card Slot (< 1024px) */}
          <div className="mobile-sequence-container">
            <BannerScroll />
          </div>

          <p className="hero-subtitle">
            Principal Product Designer who crafts high-trust decision systems, digital programming, and design solutions with 13+ years of experience across healthcare, AI, and enterprise SaaS.
          </p>
        </div>
      </section>

      {/* ── FOLD 2: Service Cards Showcase (Below Fold 1) ───── */}
      <section className="hero-services-section">
        <div className="hero-services-block">
          <h2 className="hero-services-title">
            What I Can Do <span className="gradient-text">For Your Needs</span>
          </h2>
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
      </section>
    </div>
  );
}
