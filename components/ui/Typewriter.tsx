"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "expert decisions.",
  "critical workflows.",
  "high-stakes operations.",
  "human-AI collaboration.",
];

export default function Typewriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(PHRASES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullPhrase = PHRASES[currentPhraseIndex];

    if (isWaiting) {
      const pauseDuration = isDeleting ? 400 : 2500;
      timer = setTimeout(() => {
        setIsWaiting(false);
        if (isDeleting) {
          setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          setIsDeleting(false);
        } else {
          setIsDeleting(true);
        }
      }, pauseDuration);
    } else {
      const tick = () => {
        if (isDeleting) {
          if (displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else {
            setIsWaiting(true);
          }
        } else {
          if (displayedText.length < fullPhrase.length) {
            const nextChar = fullPhrase[displayedText.length];
            setDisplayedText((prev) => prev + nextChar);
          } else {
            setIsWaiting(true);
          }
        }
      };

      const typingSpeed = 80;
      const deletingSpeed = 40;
      const jitter = isDeleting ? 0 : Math.random() * 40 - 20;
      const delay = Math.max(25, (isDeleting ? deletingSpeed : typingSpeed) + jitter);

      timer = setTimeout(tick, delay);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isWaiting, currentPhraseIndex]);

  return (
    <span className="relative inline-block align-top">
      {/* Hidden placeholder to reserve space and prevent layout shifts */}
      <span className="invisible pointer-events-none select-none block" aria-hidden="true">
        human-AI collaboration.
      </span>
      {/* Active typewriter animation */}
      <span className="absolute top-0 left-0 w-full block">
        <span>{displayedText}</span>
        <span
          className="ml-1.5 inline-block w-[3px] h-[0.85em] bg-zinc-500 cursor-blink align-baseline"
          style={{ verticalAlign: "-0.05em" }}
        />
      </span>
      <style jsx global>{`
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: typewriter-blink 1s step-end infinite;
        }
      `}</style>
    </span>
  );
}
