"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const roles = [
  "Principal Product Designer",
  "Enterprise Systems Architect",
  "AI & High-Trust UI Specialist",
  "Cross-Platform Product Lead",
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
        scope.querySelectorAll(".mobile-portrait-wrapper"),
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 }
      )
        .fromTo(
          scope.querySelectorAll(".hero-greeting"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
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
          {/* Mobile Single Static Portrait Image Slot (< 1024px) */}
          <div className="mobile-portrait-wrapper">
            <div className="mobile-portrait-card">
              <Image
                src="/mobile-portrait.jpg"
                alt="Aboobacker Sidhiqe"
                width={600}
                height={800}
                priority
                className="mobile-portrait-img"
              />
            </div>
          </div>

          <span className="hero-greeting">Hello, I&apos;m</span>
          <h1 className="hero-name">
            Aboobacker <span className="gradient-text">Sidhiqe</span>
          </h1>

          {/* Dynamic Rotating Role Badge directly under Name Title in Mobile First Fold */}
          <div className="dynamic-role-badge">
            <span className="dynamic-role-prefix">SPECIALIZING IN</span>
            <span ref={roleRef} className="dynamic-role-text">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="hero-subtitle">
            Principal Product Designer who crafts high-trust decision systems, digital programming, and design solutions with 13+ years of experience across healthcare, AI, and enterprise SaaS.
          </p>
        </div>
      </section>
    </div>
  );
}
