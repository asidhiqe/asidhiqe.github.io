"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollReveal from "./ScrollReveal";

const aboutPhrases = ["clarity.", "confidence.", "control."];

export default function About() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".about-rotating-phrase", {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setPhraseIndex((prev) => (prev + 1) % aboutPhrases.length);
          gsap.fromTo(
            ".about-rotating-phrase",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        },
      });
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-body">
        {/* Left Column: Design Philosophy */}
        <div className="about-left">
          <ScrollReveal as="div">
            <p className="about-eyebrow-mini">Design Philosophy</p>
            <h2 id="about-title" className="about-statement-bold">
              I design systems that help experts move with <em className="about-rotating-phrase" style={{ display: "inline-block" }}>{aboutPhrases[phraseIndex]}</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1}>
            <p className="about-description-text">
              In healthcare, too much information kills speed. Too little kills safety. In airport operations, real-time chaos requires organized complexity. In AI governance, probabilistic systems need human-legible control.
            </p>
            <p className="about-description-text">
              My work: designing systems where experts can see what&apos;s happening, understand why it matters, and act with confidence. Not by hiding complexity, but by organizing it into patterns that scale from doctors to controllers to financial analysts.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Author Portrait with Seamless Gradient Blend */}
        <div className="about-right" aria-label="Aboobacker Sidhiqe Profile Visual">
          <div className="about-portrait-blend-container">
            <Image
              src="/Aboobacker_Sidhiqe_Principal_Product_Designer_profile_image.png"
              alt="Aboobacker Sidhiqe - Principal Product Designer"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="about-portrait-blend-img"
            />
            <div className="about-portrait-blend-gradient" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
