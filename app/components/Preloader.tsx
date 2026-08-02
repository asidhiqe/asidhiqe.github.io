"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const TOTAL_FRAMES = 125;

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loadedCount = 0;
    let isCancelled = false;

    // Track real image preloading of the 125 banner sequence frames
    const updateProgress = () => {
      if (isCancelled) return;
      loadedCount++;
      const pct = Math.min(100, Math.floor((loadedCount / TOTAL_FRAMES) * 100));
      setProgress(pct);
    };

    // Preload all 125 images into browser cache
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

      tl.to(".preloader-center-box", {
        opacity: 0,
        scale: 0.85,
        duration: 0.4,
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
      <div className="preloader-center-box">
        {/* Custom Uiverse Animated Polygon SVG Loader */}
        <div className="uiverse-loader">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <mask id="clipping">
                <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                <polygon points="25,25 75,25 50,75" fill="white" />
                <polygon points="50,25 75,75 25,75" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
                <polygon points="35,35 65,35 50,65" fill="white" />
              </mask>
            </defs>
          </svg>
          <div className="box" />
        </div>

        {/* Real Percentage Progress Count */}
        <div className="preloader-percentage-counter">{progress}%</div>
      </div>
    </div>
  );
}
