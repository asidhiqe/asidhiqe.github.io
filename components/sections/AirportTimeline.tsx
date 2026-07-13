"use client";

import { useState } from "react";
import { cn } from "@/lib";

type TimelineState = "conflict" | "resolved";

/**
 * AirportTimeline — Interactive airport gate schedule visualizer.
 *
 * Visual style: Operational Precision.
 * Optimized responsively: p-4 on mobile screens.
 */
export default function AirportTimeline() {
  const [activeState, setActiveState] = useState<TimelineState>("conflict");

  const getStatusMessage = () => {
    return activeState === "conflict"
      ? "Conflict Alert: Flight LH402 arrival delayed. Overlaps with UA901 at Gate 11. Overlap duration: 18 minutes."
      : "Conflict Resolved: Flight UA901 redirected to Gate 12. Gate conflict resolved. Secondary ground resources updated.";
  };

  return (
    <div className="w-full p-4 md:p-6 font-mono select-none">
      
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-zinc-900 pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className={cn(
            "h-1.5 w-1.5 rounded-full animate-pulse",
            activeState === "conflict" ? "bg-rose-500" : "bg-cyan-400"
          )} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Real-Time Gate Allocation
          </span>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex gap-1.5">
          {(["conflict", "resolved"] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => setActiveState(state)}
              className={cn(
                "rounded border px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider transition-all duration-155 cursor-pointer",
                activeState === state
                  ? "border-cyan-400 bg-cyan-950/40 text-cyan-400"
                  : "border-zinc-800 text-neutral-500 hover:border-neutral-700 hover:text-white"
              )}
            >
              {state === "conflict" ? "Gate Conflict" : "Resolve Conflict"}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Timeline Grid */}
      <div className="relative mb-6 flex items-center justify-center rounded border border-zinc-900/60 bg-neutral-950/10 py-6 px-3 sm:py-8 sm:px-4">
        <svg
          viewBox="0 0 500 160"
          className="w-full max-w-[420px] text-neutral-800 overflow-visible"
        >
          {/* Time markings */}
          <line x1="80" y1="20" x2="80" y2="140" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="3" />
          <text x="80" y="15" textAnchor="middle" className="text-[6px] fill-neutral-600 font-sans">08:00</text>
          
          <line x1="180" y1="20" x2="180" y2="140" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="3" />
          <text x="180" y="15" textAnchor="middle" className="text-[6px] fill-neutral-600 font-sans">09:00</text>

          <line x1="280" y1="20" x2="280" y2="140" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="3" />
          <text x="280" y="15" textAnchor="middle" className="text-[6px] fill-neutral-600 font-sans">10:00</text>

          <line x1="380" y1="20" x2="380" y2="140" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="3" />
          <text x="380" y="15" textAnchor="middle" className="text-[6px] fill-neutral-600 font-sans">11:00</text>

          {/* Gate Row 10 */}
          <text x="20" y="44" className="text-[8px] fill-neutral-550 font-sans font-bold">GATE 10</text>
          <rect x="80" y="32" width="160" height="18" rx="2" className="fill-neutral-900 stroke-neutral-800" />
          <text x="160" y="44" textAnchor="middle" className="text-[7px] fill-neutral-400 font-sans font-semibold">LH203 (Nominal)</text>

          {/* Gate Row 11 */}
          <text x="20" y="84" className="text-[8px] fill-neutral-555 font-sans font-bold">GATE 11</text>
          {/* LH402 Block (delayed, stretches right) */}
          <rect
            x="140"
            y="72"
            width="170"
            height="18"
            rx="2"
            className={cn(
              "transition-colors duration-300",
              activeState === "conflict"
                ? "fill-rose-950/10 stroke-rose-500"
                : "fill-neutral-900 stroke-neutral-800"
            )}
          />
          <text x="225" y="84" textAnchor="middle" className="text-[7px] fill-neutral-400 font-sans font-semibold">
            {activeState === "conflict" ? "LH402 (Delayed)" : "LH402"}
          </text>

          {/* UA901 Block */}
          {activeState === "conflict" ? (
            /* Overlapping block in Gate 11 */
            <>
              <rect x="290" y="76" width="100" height="10" rx="1.5" className="fill-rose-500/10 stroke-rose-400" />
              <text x="340" y="83" textAnchor="middle" className="text-[6px] fill-rose-300 font-sans font-semibold animate-pulse">UA901 (Conflict)</text>
            </>
          ) : (
            /* Non-overlapping block left behind */
            <text x="340" y="84" className="text-[6px] fill-neutral-600 font-sans">Slot Free</text>
          )}

          {/* Gate Row 12 */}
          <text x="20" y="124" className="text-[8px] fill-neutral-555 font-sans font-bold">GATE 12</text>
          {activeState === "resolved" ? (
            /* Resolved UA901 slot shifted to Gate 12 */
            <>
              <rect x="290" y="112" width="100" height="18" rx="2" className="fill-cyan-950/20 stroke-cyan-400" />
              <text x="340" y="124" textAnchor="middle" className="text-[7px] fill-cyan-400 font-sans font-semibold">UA901 (Shifted)</text>
            </>
          ) : (
            <text x="290" y="124" className="text-[6px] fill-neutral-700 font-sans">Empty Slot</text>
          )}

        </svg>
      </div>

      {/* Log Output & Interactive Resolve Trigger */}
      <div className="flex flex-col gap-4 rounded border border-zinc-900 bg-neutral-950/40 p-4">
        <p className="text-xs leading-relaxed text-zinc-300 min-h-[36px]">
          {getStatusMessage()}
        </p>

        {activeState === "conflict" && (
          <button
            type="button"
            onClick={() => setActiveState("resolved")}
            className="w-full rounded bg-rose-950/20 border border-rose-500/60 py-2 text-[9px] font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-900/40 transition-colors duration-155 cursor-pointer"
          >
            Resolve Overlap Conflict (Shift UA901 to Gate 12)
          </button>
        )}
      </div>

    </div>
  );
}
