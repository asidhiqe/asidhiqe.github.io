"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const statusMessages = [
  "INITIALIZING DECISION SYSTEMS...",
  "LOADING HEALTHCARE & AI MODULES...",
  "SYNCHRONIZING GOVERNANCE FRAMEWORKS...",
  "SYSTEM READY"
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In dev mode, or if testing loader, clear session storage to guarantee preview
    if (typeof window !== "undefined" && window.location.search.includes("loader=true")) {
      sessionStorage.removeItem("preloader_shown");
    }

    const hasLoaded = sessionStorage.getItem("preloader_shown");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Status message & progress incrementer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 8;
        return next > 100 ? 100 : next;
      });

      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 220);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100 && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("preloader_shown", "true");
          setLoading(false);
        }
      });

      tl.to(".preloader-text-wrap", {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: "power2.in"
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, [progress]);

  if (!loading) return null;

  return (
    <div ref={overlayRef} className="preloader-overlay" role="dialog" aria-label="System loading">
      <div className="preloader-content">
        <div className="preloader-text-wrap">
          <div className="preloader-monogram">
            AS<span className="preloader-dot">.</span>
          </div>

          <div className="preloader-status-ticker">
            <span className="preloader-status-text">{statusMessages[statusIndex]}</span>
          </div>

          <div className="preloader-progress-track">
            <div className="preloader-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <div className="preloader-percentage">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
