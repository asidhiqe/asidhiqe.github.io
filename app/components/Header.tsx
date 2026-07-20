"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;

      const links = headerRef.current?.querySelectorAll(
        ".header-nav a, .header-wordmark, .theme-toggle-btn"
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

    // Refresh GSAP ScrollTrigger on web font load to prevent layout-shift clipping on mobile
    if (typeof document !== "undefined") {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
        // Extra fallback: refresh after a small delay
        setTimeout(() => ScrollTrigger.refresh(), 400);
      });
    }

    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <a
        href="#top"
        className="header-wordmark"
        aria-label="Aboobacker Sidhiqe, home"
      >
        AS<span>.</span>
      </a>

      <nav className="header-nav" aria-label="Primary navigation">
        <a href="#selected-work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle light/dark theme"
        >
          {theme === "dark" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
