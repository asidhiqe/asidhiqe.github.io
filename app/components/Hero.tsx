"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const domains = [
  "Healthcare",
  "AI Governance",
  "Airport Operations",
  "FinTech",
  "Enterprise SaaS",
];

const phrases = [
  "faster clinical decisions.",
  "confident operations.",
  "trustworthy financial choices.",
  "governed AI workflows.",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current?.querySelector(".hero-rotating-phrase");
    if (!el) return;

    const interval = setInterval(() => {
      gsap.to(el, {
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          gsap.fromTo(
            el,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
          );
        },
      });
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    (_, contextSafe) => {
      const scope = containerRef.current;
      if (!scope) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Headline + eyebrow
      tl.fromTo(
        scope.querySelectorAll(".hero-eyebrow"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          scope.querySelectorAll(".hero-headline"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          scope.querySelectorAll(".hero-domain-tag"),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          "-=0.4"
        )
        .fromTo(
          scope.querySelectorAll(".hero-meta-item"),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        );

      const stats = [
        { el: ".stat-years", val: 13, suffix: "+" },
        { el: ".stat-domains", val: 6, suffix: "" },
        { el: ".stat-products", val: 20, suffix: "+" },
      ];

      stats.forEach((stat) => {
        const obj = { value: 0 };
        const el = scope.querySelector(stat.el) as HTMLElement | null;

        tl.to(
          obj,
          {
            value: stat.val,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              if (el) {
                el.innerText = Math.floor(obj.value) + stat.suffix;
              }
            },
          },
          "-=0.3"
        );
      });

      tl.fromTo(
        scope.querySelectorAll(".hero-cta"),
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      );

      // Magnetic hover CTA
      const isHoverCapable = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
      if (contextSafe && isHoverCapable) {
        const cta = containerRef.current?.querySelector(".hero-cta");
        if (cta) {
          const onMouseMove = contextSafe((e: MouseEvent) => {
            const rect = (cta as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(cta, {
              x: x * 0.25,
              y: y * 0.25,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const onMouseLeave = contextSafe(() => {
            gsap.to(cta, {
              x: 0,
              y: 0,
              duration: 0.55,
              ease: "elastic.out(1.1, 0.4)",
              overwrite: "auto",
            });
          });

          cta.addEventListener("mousemove", onMouseMove as EventListener);
          cta.addEventListener("mouseleave", onMouseLeave);
        }
      }

      const waves = containerRef.current?.querySelectorAll(".wave-line");
      const waveGroup = containerRef.current?.querySelector(".hero-waves-group") as SVGElement | null;

      if (waveGroup) {
        gsap.to(waveGroup, {
          x: -6,
          y: 4,
          duration: 6.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (waves && waves.length > 0) {
        gsap.to(waves, {
          opacity: 0.8,
          strokeWidth: 1.8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.22,
        });
      }

      if (contextSafe && isHoverCapable && waveGroup) {
        const heroSurface = containerRef.current?.querySelector(".hero-right");
        if (heroSurface) {
          const onWaveMove = contextSafe((e: MouseEvent) => {
            const rect = heroSurface.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(waveGroup, {
              x: x * 10,
              y: y * 10,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const onWaveLeave = contextSafe(() => {
            gsap.to(waveGroup, {
              x: 0,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          heroSurface.addEventListener("mousemove", onWaveMove as EventListener);
          heroSurface.addEventListener("mouseleave", onWaveLeave);
        }
      }

      // Organic Breathing Background Ambient Glows
      gsap.to(".glow-1", {
        x: "20%",
        y: "-15%",
        scale: 1.1,
        opacity: 0.28,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".glow-2", {
        x: "-15%",
        y: "20%",
        scale: 0.9,
        opacity: 0.18,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      className="hero"
      aria-labelledby="hero-title"
      ref={containerRef}
    >
      {/* Background ambient glows */}
      <div className="hero-ambient-glow glow-1" aria-hidden="true" />
      <div className="hero-ambient-glow glow-2" aria-hidden="true" />

      {/* Left */}
      <div className="hero-left">
        <p className="hero-eyebrow" aria-label="Aboobacker Sidhiqe · Principal Product Designer">
          Aboobacker Sidhiqe&nbsp;·&nbsp;Principal Product Designer
        </p>

        <h1 id="hero-title" className="hero-headline">
          Designing decision systems for{" "}
          <em className="hero-rotating-phrase">
            {phrases[phraseIndex]}
          </em>
        </h1>

        <div className="hero-domains" role="list" aria-label="Domain expertise">
          {domains.map((d) => (
            <span key={d} className="hero-domain-tag" role="listitem">
              {d}
            </span>
          ))}
        </div>

        <div className="hero-meta" aria-label="Experience summary">
          <div className="hero-meta-item">
            <span className="hero-meta-value stat-years">13+</span>
            <span className="hero-meta-label">Years Experience</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value stat-domains">6</span>
            <span className="hero-meta-label">Core Domains</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value stat-products">20+</span>
            <span className="hero-meta-label">Products Shipped</span>
          </div>
        </div>

        <a href="#selected-work" className="hero-cta">
          View the work <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Right — Casual image background blend */}
      <div className="hero-right" aria-label="Aboobacker Sidhiqe Casual Visual">
        <div className="hero-portrait-blend-container">
          <Image
            src="/Aboobacker_Sidhiqe_Principal_Product_Designer_casual_image.png"
            alt="Aboobacker Sidhiqe - Principal Product Designer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="hero-portrait-blend-img"
          />
          <div className="hero-portrait-blend-gradient" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
