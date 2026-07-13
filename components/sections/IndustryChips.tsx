"use client";

import { useState } from "react";
import { cn } from "@/lib";

/**
 * Core Domains listed in DESIGN_MANIFESTO.md and AI_CONTEXT.md.
 * Updated to reflect specific, high-differentiation domain tags.
 */
const INDUSTRIES = [
  "Healthcare",
  "Artificial Intelligence",
  "Airport Analytics",
  "Finance Analytics",
  "Logistics",
  "Marketplace",
  "Enterprise SaaS",
] as const;

type Industry = (typeof INDUSTRIES)[number];

/**
 * IndustryChips — interactive domain tags.
 *
 * Toggles single active domain selection.
 * Sprint 3: Lift state or connect to router query parameters
 * to filter the selected work section contextually.
 */
export default function IndustryChips() {
  const [active, setActive] = useState<Industry | null>(null);

  function handleSelect(industry: Industry) {
    setActive((prev) => (prev === industry ? null : industry));
  }

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Industry domains — click to toggle highlight"
    >
      {INDUSTRIES.map((industry) => {
        const isActive = active === industry;
        return (
          <button
            key={industry}
            type="button"
            onClick={() => handleSelect(industry)}
            aria-pressed={isActive}
            className={cn(
              // Base styling
              "rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
              // Inactive state
              !isActive &&
                "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white",
              // Active state
              isActive &&
                "border-white bg-white text-neutral-950"
            )}
          >
            {industry}
          </button>
        );
      })}
    </div>
  );
}
