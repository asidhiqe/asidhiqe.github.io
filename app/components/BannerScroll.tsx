"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FRAME_COUNT = 125;

const getFramePath = (index: number) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/my-portfolio-banner/ezgif-frame-${frameNumber}.jpg`;
};

export default function BannerScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const stateRef = useRef({ frame: 0, progress: 0 });
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload 125 frame images
  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      const handleLoad = () => {
        if (!mounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      mounted = false;
    };
  }, []);

  // Draw frame with correctly anchored left-edge gradient dissolve
  const renderFrame = (index: number, progress: number = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const isLightMode =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("light");

    const bgHex = isLightMode ? "#f5f5f7" : "#050505";

    // Clear canvas background
    ctx.fillStyle = bgHex;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (rect.width >= 1024) {
      // ── DESKTOP PIPELINE (Shifted Right + Left-Edge Blend Anchored) ────
      const targetAreaWidth = rect.width * 0.52;
      const targetRatio = targetAreaWidth / rect.height;

      if (targetRatio > imgRatio) {
        drawWidth = targetAreaWidth;
        drawHeight = targetAreaWidth / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
        offsetX = rect.width - drawWidth + (rect.width * 0.16);
      } else {
        drawHeight = rect.height;
        drawWidth = rect.height * imgRatio;
        offsetX = rect.width - drawWidth + (rect.width * 0.18);
        offsetY = 0;
      }

      // Footer shrink phase: scale down anchored to BOTTOM RIGHT corner
      let scaleFactor = 1;

      if (progress > 0.65) {
        const shrinkProgress = Math.min(1, (progress - 0.65) / 0.35);
        const eased = 1 - Math.pow(1 - shrinkProgress, 2.2);
        scaleFactor = 1 - eased * 0.20;
      }

      ctx.save();

      const transformOriginX = rect.width;
      const transformOriginY = rect.height;

      ctx.translate(transformOriginX, transformOriginY);
      ctx.scale(scaleFactor, scaleFactor);
      ctx.translate(-transformOriginX, -transformOriginY);

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Desktop Composite Alpha Mask: Left-side blend anchored to offsetX
      ctx.globalCompositeOperation = "destination-in";

      // Gradient starts at image's left edge (offsetX) and fades over left 42% of image
      const horizAlpha = ctx.createLinearGradient(
        offsetX,
        0,
        offsetX + (drawWidth * 0.42),
        0
      );
      horizAlpha.addColorStop(0, "rgba(0,0,0,0)");
      horizAlpha.addColorStop(0.45, "rgba(0,0,0,0.6)");
      horizAlpha.addColorStop(1.0, "rgba(0,0,0,1)");

      ctx.fillStyle = horizAlpha;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.restore();
    } else {
      // ── MOBILE & TABLET PIPELINE (Zoomed Frameless Bottom Dissolve) ─
      const zoomFactor = 1.18;
      if (canvasRatio > imgRatio) {
        drawWidth = rect.width * zoomFactor;
        drawHeight = (rect.width * zoomFactor) / imgRatio;
        offsetY = (rect.height - drawHeight) / 2 - 12;
        offsetX = (rect.width - drawWidth) / 2;
      } else {
        drawHeight = rect.height * zoomFactor;
        drawWidth = (rect.height * zoomFactor) * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = -15;
      }

      ctx.save();
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Bottom-Only Linear Gradient Dissolve over lower 45%
      ctx.globalCompositeOperation = "destination-in";

      const vertDissolve = ctx.createLinearGradient(0, 0, 0, rect.height);
      vertDissolve.addColorStop(0, "rgba(0,0,0,1)");
      vertDissolve.addColorStop(0.55, "rgba(0,0,0,1)");
      vertDissolve.addColorStop(0.80, "rgba(0,0,0,0.45)");
      vertDissolve.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = vertDissolve;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.restore();
    }

    ctx.restore();
  };

  // Initial draw & resize listener
  useEffect(() => {
    if (!isLoaded) return;
    renderFrame(0, 0);

    const handleResize = () => {
      renderFrame(
        Math.round(stateRef.current.frame),
        stateRef.current.progress
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  // Synchronize GSAP ScrollTrigger to full document scroll depth
  useGSAP(
    () => {
      if (!isLoaded) return;

      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          const currentFrame = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(self.progress * (FRAME_COUNT - 1)))
          );
          stateRef.current.frame = currentFrame;
          stateRef.current.progress = self.progress;
          renderFrame(currentFrame, self.progress);
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { dependencies: [isLoaded] }
  );

  return (
    <aside className="banner-fixed-wrapper" aria-label="Animated Portfolio Visual Banner">
      {!isLoaded && (
        <div className="banner-loading-overlay">
          <div className="banner-loading-pulse" />
          <p className="banner-loading-text">
            Loading Sequence... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </p>
          <div className="banner-loading-bar-bg">
            <div
              className="banner-loading-bar-fill"
              style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
            />
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="banner-fixed-canvas" />
    </aside>
  );
}
