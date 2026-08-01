"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;

      const isHoverCapable = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
      if (!isHoverCapable) return;

      const links = headerRef.current?.querySelectorAll(
        ".header-nav-link, .header-wordmark"
      );

      if (!links) return;

      links.forEach((link) => {
        const onMouseMove = contextSafe((e: MouseEvent) => {
          const rect = (link as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(link, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        const onMouseLeave = contextSafe(() => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "elastic.out(1.1, 0.4)",
            overwrite: "auto",
          });
        });

        link.addEventListener("mousemove", onMouseMove as EventListener);
        link.addEventListener("mouseleave", onMouseLeave);
      });
    },
    { scope: headerRef }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (typeof document !== "undefined") {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
        setTimeout(() => ScrollTrigger.refresh(), 400);
      });
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      {/* Prominent Gold-to-Cyan Gradient Logo Wordmark */}
      <Link
        href="/"
        className="header-wordmark"
        aria-label="Aboobacker Sidhiqe, home"
      >
        <span className="header-wordmark-text gradient-text">AS</span>
        <span className="header-wordmark-dot" aria-hidden="true">.</span>
      </Link>

      {/* Spacious Floating Frosted Nav Pill Bar */}
      <nav className="header-nav" aria-label="Primary navigation">
        <Link href="/#selected-work" className="header-nav-link">Work</Link>
        <Link href="/#about" className="header-nav-link">About</Link>
        <Link href="/#contact" className="header-nav-link">Contact</Link>
      </nav>
    </header>
  );
}
