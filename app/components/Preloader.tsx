"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const TOTAL_FRAMES = 125;

const statusMessages = [
  "INITIALIZING DECISION SYSTEMS...",
  "PRELOADING PORTRAIT BANNER FRAMES...",
  "SYNCHRONIZING GOVERNANCE FRAMEWORKS...",
  "SYSTEM READY"
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loadedCount = 0;
    let isCancelled = false;

    // Track real image preloading of the 125 banner frames
    const updateProgress = () => {
      if (isCancelled) return;
      loadedCount++;
      const pct = Math.min(100, Math.floor((loadedCount / TOTAL_FRAMES) * 100));
      setProgress(pct);

      if (pct < 35) {
        setStatusIndex(0);
      } else if (pct < 70) {
        setStatusIndex(1);
      } else if (pct < 100) {
        setStatusIndex(2);
      } else {
        setStatusIndex(3);
      }
    };

    // Preload all 125 images into browser image cache
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/my-portfolio-banner/ezgif-frame-${frameNum}.jpg`;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      tl.to(".preloader-text-wrap", {
        opacity: 0,
        y: -15,
        duration: 0.35,
        ease: "power2.in",
      }).to(overlayRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      });
    }
  }, [progress]);

  if (!loading) return null;

  return (
    <div
      ref={overlayRef}
      className="preloader-overlay"
      role="dialog"
      aria-label="System loading"
    >
      <div className="preloader-content">
        <div className="preloader-text-wrap">
          <div className="preloader-monogram">
            <span className="header-wordmark-text gradient-text">AS</span>
            <span className="header-wordmark-dot" aria-hidden="true">
              .
            </span>
          </div>

          <div className="preloader-status-ticker">
            <span className="preloader-status-text">
              {statusMessages[statusIndex]}
            </span>
          </div>

          <div className="preloader-progress-track">
            <div
              className="preloader-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="preloader-percentage">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
