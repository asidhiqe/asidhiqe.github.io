"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
