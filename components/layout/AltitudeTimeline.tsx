"use client";

import { useEffect, useState, useRef } from "react";

// Configurable experience parameter (in years)
const YEARS_OF_EXPERIENCE = 13;

const SECTION_IDS = ["hero", "metrics", "manifesto", "work", "about", "footer"];

// Human-friendly mapping for active location readouts
const SECTION_LABELS: Record<string, string> = {
  hero: "SYS_INIT / HERO",
  metrics: "STAT_STRIP / CRDT",
  manifesto: "CORE_THES / MNFST",
  work: "EXEC_PROJ / WORK",
  about: "EXEC_SUMM / ABT",
  footer: "SYS_TERM / FOOT",
};

export default function AltitudeTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [verticalSpeed, setVerticalSpeed] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // References for Vertical Speed (V/S) calculation in Years Per Minute (Y/MIN)
  const lastTimeRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const smoothedVRef = useRef<number>(0);
  const decayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine active section using scroll spy logic
  const getActiveSection = () => {
    if (typeof window === "undefined") return "hero";

    // Scan from bottom to top
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the top of the section is scrolled past 40% of viewport height
        if (rect.top <= window.innerHeight * 0.4) {
          return SECTION_IDS[i];
        }
      }
    }
    return "hero";
  };

  useEffect(() => {
    setIsClient(true);
    lastTimeRef.current = performance.now();
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      // 1. Calculate Scroll Progress
      const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // 2. Active Section Scroll Spy (with at-bottom check for footer reliability)
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );
      const isAtBottom = window.innerHeight + currentScroll >= docHeight - 24;

      if (isAtBottom) {
        setActiveSection("footer");
      } else {
        setActiveSection(getActiveSection());
      }

      // 3. Dynamic Vertical Speed (V/S) Calculation in Years Per Minute (Y/MIN)
      const now = performance.now();
      const dt = now - lastTimeRef.current; // in milliseconds
      const dy = currentScroll - lastScrollYRef.current; // in pixels

      if (dt > 16 && totalHeight > 0) {
        // Pixel delta mapped to years: dy * (YEARS_OF_EXPERIENCE / totalHeight)
        // Rate in years/ms = (dy * YEARS_OF_EXPERIENCE) / (totalHeight * dt)
        // Rate in years/min = Rate in years/ms * 60,000
        // Downward scroll dy > 0 represents descent (back in time), hence negative V/S
        const yearsScrolled = -dy * (YEARS_OF_EXPERIENCE / totalHeight);
        const currentV = (yearsScrolled / dt) * 60000;

        // Exponential smoothing filter for hud readout stability
        smoothedVRef.current = smoothedVRef.current * 0.8 + currentV * 0.2;

        // Visual threshold decay: ignore tiny microscopic tremors
        if (Math.abs(smoothedVRef.current) < 0.08) {
          smoothedVRef.current = 0;
        }

        // Clamp extreme speeds for visual constraints (e.g., 200 Y/MIN max)
        const clampedV = Math.min(Math.max(smoothedVRef.current, -200), 200);
        setVerticalSpeed(Math.round(clampedV * 10) / 10); // round to 1 decimal place

        lastTimeRef.current = now;
        lastScrollYRef.current = currentScroll;
      }

      // Reset velocity to 0 when scrolling stops
      if (decayTimeoutRef.current) {
        clearTimeout(decayTimeoutRef.current);
      }
      decayTimeoutRef.current = setTimeout(() => {
        setVerticalSpeed(0);
        smoothedVRef.current = 0;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial trigger
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (decayTimeoutRef.current) {
        clearTimeout(decayTimeoutRef.current);
      }
    };
  }, []);

  if (!isClient) return null;

  // Calculate current experience years value (Top = Years of Exp, Bottom = 0)
  const currentYears = (1 - scrollProgress) * YEARS_OF_EXPERIENCE;

  // Generate tick marks for time tape (every 2 years)
  const tickInterval = 2;
  const ticks: number[] = [];
  for (let val = YEARS_OF_EXPERIENCE; val >= 0; val -= tickInterval) {
    ticks.push(val);
  }
  // Ensure ground level 0 is explicitly included
  if (ticks[ticks.length - 1] !== 0) {
    ticks.push(0);
  }

  // Smooth scroll handler to jump directly to sections
  const handleLabelClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-3 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-none select-none font-mono"
      aria-label="Cockpit experience timeline navigation instrument"
    >
      {/* ── Operational Location Header ── */}
      <button
        onClick={() => handleLabelClick(activeSection)}
        className="pointer-events-auto cursor-pointer border border-zinc-800/80 bg-neutral-950/90 hover:border-cyan-500/50 hover:bg-neutral-900 px-2 py-1 text-[8px] uppercase tracking-widest text-zinc-400 hover:text-cyan-400 backdrop-blur-md rounded-[2px] transition-all duration-200 shadow-sm"
        title={`Current viewport location. Click to focus section.`}
      >
        LOC: <span className="font-bold text-zinc-300">{SECTION_LABELS[activeSection] || activeSection}</span>
      </button>

      {/* ── Experience Scale Tape ── */}
      <div className="relative h-[250px] w-28 flex items-center justify-end">
        {/* Scale vertical bar */}
        <div className="absolute right-[4px] top-0 bottom-0 w-[1px] bg-zinc-800/60" />

        {/* Dynamic scale tick marks */}
        {ticks.map((tickVal) => {
          const progress = 1 - tickVal / YEARS_OF_EXPERIENCE;
          const topPercent = progress * 100;
          const isTarget = activeSection === "hero" && tickVal === YEARS_OF_EXPERIENCE || 
                           activeSection === "footer" && tickVal === 0 ||
                           (tickVal > 0 && tickVal < YEARS_OF_EXPERIENCE && 
                            Math.abs(currentYears - tickVal) < 1.1);

          return (
            <div
              key={tickVal}
              className="absolute right-0 flex items-center"
              style={{ top: `${topPercent}%` }}
            >
              {/* Tick label */}
              <span
                onClick={() => {
                  // Map specific tick marks to navigation targets
                  if (tickVal === YEARS_OF_EXPERIENCE) handleLabelClick("hero");
                  else if (tickVal === 12) handleLabelClick("metrics"); // close approximation
                  else if (tickVal === 10) handleLabelClick("metrics");
                  else if (tickVal === 8) handleLabelClick("manifesto");
                  else if (tickVal === 6) handleLabelClick("work");
                  else if (tickVal === 2) handleLabelClick("about");
                  else if (tickVal === 0) handleLabelClick("footer");
                }}
                className={`pointer-events-auto cursor-pointer absolute right-3 text-[7px] font-semibold transition-colors duration-200 ${
                  isTarget ? "text-cyan-500/80 font-bold" : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {tickVal === 0 ? "START" : `${tickVal} YR`}
              </span>

              {/* Tick marker line */}
              <div
                className={`h-[1px] ${
                  isTarget ? "w-2 bg-cyan-500/70" : "w-1 bg-zinc-800"
                } transition-all duration-200`}
              />
            </div>
          );
        })}

        {/* ── Floating Time HUD Indicator ── */}
        <div
          className="absolute right-0 flex items-center gap-1.5 transition-all duration-75 ease-out pointer-events-auto"
          style={{ top: `${scrollProgress * 100}%` }}
        >
          {/* Readout bubble */}
          <div className="flex items-center gap-1 text-[10px] bg-neutral-950/95 border border-cyan-500/30 px-2 py-0.5 rounded-[2px] shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="font-bold text-cyan-400">
              {currentYears.toFixed(1)}
            </span>
            <span className="text-[7px] font-bold text-cyan-500/60 uppercase">YRS</span>
          </div>

          {/* Pointer Chevron pointing right towards scale */}
          <div className="w-1.5 h-1.5 flex items-center justify-center">
            <svg
              className="w-1.5 h-1.5 text-cyan-400 fill-current drop-shadow-[0_0_2px_rgba(34,211,238,0.5)]"
              viewBox="0 0 8 8"
            >
              <path d="M0,4 L6,8 L6,0 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Vertical Speed (V/S) indicator box ── */}
      <div
        className={`border border-zinc-800/80 bg-neutral-950/90 px-2 py-0.5 text-[8px] uppercase tracking-wider backdrop-blur-md rounded-[2px] transition-colors duration-300 ${
          verticalSpeed !== 0 ? "text-cyan-400 border-cyan-500/20" : "text-zinc-500"
        }`}
      >
        V/S:{" "}
        <span className={`font-mono font-bold ${verticalSpeed !== 0 ? "text-cyan-300" : "text-zinc-400"}`}>
          {verticalSpeed > 0 ? `+${verticalSpeed.toFixed(1)}` : verticalSpeed.toFixed(1)}
        </span>{" "}
        Y/MIN
      </div>
    </div>
  );
}
