"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const domains = [
  "Healthcare",
  "AI Systems",
  "Airport Analytics",
  "FinTech",
  "Logistics",
  "Marketplaces",
];

const phrases = [
  "better decisions.",
  "critical judgments.",
  "clearer choices.",
  "confident actions.",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".hero-rotating-phrase", {
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          gsap.fromTo(
            ".hero-rotating-phrase",
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
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Headline + eyebrow
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          ".hero-domain-tag",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          "-=0.4"
        )
        .fromTo(
          ".hero-meta-item",
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
        tl.to(
          obj,
          {
            value: stat.val,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              const el = containerRef.current?.querySelector(stat.el);
              if (el) {
                (el as HTMLElement).innerText = Math.floor(obj.value) + stat.suffix;
              }
            },
          },
          "-=0.3"
        );
      });

      tl.fromTo(
        ".hero-cta",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      );

      // SVG: draw paths
      const paths = containerRef.current?.querySelectorAll(".diagram-path");
      if (paths && paths.length > 0) {
        paths.forEach((path) => {
          const length = (path as SVGPathElement).getTotalLength?.() ?? 200;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });
        tl.to(
          paths,
          {
            strokeDashoffset: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power1.inOut",
          },
          "-=0.6"
        );
      }

      // SVG: fade in nodes
      tl.fromTo(
        ".diagram-node, .diagram-node-accent, .diagram-node-teal",
        { opacity: 0, scale: 0, transformOrigin: "center" },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
        "-=0.6"
      );

      // Magnetic hover CTA
      if (contextSafe) {
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
          Designing systems that help experts make{" "}
          <em className="hero-rotating-phrase" style={{ display: "inline-block" }}>
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
            <span className="hero-meta-value stat-years">0+</span>
            <span className="hero-meta-label">Years</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value stat-domains">0</span>
            <span className="hero-meta-label">Domains</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value stat-products">0+</span>
            <span className="hero-meta-label">Products</span>
          </div>
        </div>

        <a href="#selected-work" className="hero-cta">
          View the work <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Right — decision-flow diagram */}
      <div className="hero-right" aria-hidden="true">
        <div className="hero-diagram">
          <svg
            viewBox="0 0 480 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
          >
            {/* Connecting paths */}
            <path className="diagram-path" d="M60 90 L200 180" />
            <path className="diagram-path" d="M420 90 L280 180" />
            <path className="diagram-path" d="M60 350 L200 260" />
            <path className="diagram-path" d="M420 350 L280 260" />
            <path className="diagram-path" d="M200 180 L280 180" />
            <path className="diagram-path" d="M200 260 L280 260" />
            <path className="diagram-path" d="M200 180 L200 260" />
            <path className="diagram-path" d="M280 180 L280 260" />
            {/* Outer corner indicators */}
            <path className="diagram-crosshair" d="M44 90 L76 90 M60 74 L60 106" />
            <path className="diagram-crosshair" d="M404 90 L436 90 M420 74 L420 106" />
            <path className="diagram-crosshair" d="M44 350 L76 350 M60 334 L60 366" />
            <path className="diagram-crosshair" d="M404 350 L436 350 M420 334 L420 366" />
            {/* Center frame */}
            <rect className="diagram-center" x="180" y="160" width="120" height="120" rx="2" />
            {/* Center crosshair */}
            <path className="diagram-crosshair" d="M230 220 L250 220 M240 210 L240 230" />
            {/* Node dots */}
            <circle className="diagram-node" cx="60" cy="90" r="8" />
            <circle className="diagram-node" cx="420" cy="90" r="8" />
            <circle className="diagram-node" cx="60" cy="350" r="8" />
            <circle className="diagram-node" cx="420" cy="350" r="8" />
            <circle className="diagram-node-accent" cx="200" cy="180" r="5" />
            <circle className="diagram-node-accent" cx="280" cy="180" r="5" />
            <circle className="diagram-node-teal" cx="200" cy="260" r="5" />
            <circle className="diagram-node-teal" cx="280" cy="260" r="5" />
            {/* Center dot */}
            <circle className="diagram-node-accent" cx="240" cy="220" r="4" />
            {/* Labels */}
            <text className="diagram-label" x="44" y="76">01 / Signal</text>
            <text className="diagram-label" x="390" y="76">02 / Context</text>
            <text className="diagram-label" x="30" y="374">03 / Judgment</text>
            <text className="diagram-label" x="382" y="374">04 / Action</text>
          </svg>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
