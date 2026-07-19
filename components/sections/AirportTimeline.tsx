"use client";

import { useState } from "react";
import { cn } from "@/lib";

type TimelineState = "conflict" | "resolved";

export default function AirportTimeline() {
  const [activeState, setActiveState] = useState<TimelineState>("conflict");

  const getStatusMessage = () => {
    return activeState === "conflict"
      ? "Conflict Alert: Flight LH402 arrival delayed. Overlaps with UA901 at Gate 11. Overlap duration: 18 minutes."
      : "Conflict Resolved: Flight UA901 redirected to Gate 12. Gate conflict resolved. Ground assets updated.";
  };

  return (
    <div className="w-full p-4 md:p-6 font-mono select-none text-foreground">
      
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className={cn(
            "h-2 w-2 rounded-full animate-pulse",
            activeState === "conflict" ? "bg-rose-500" : "bg-teal-500"
          )} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
            Real-Time Gate Allocation (Control Room Interface)
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
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {state === "conflict" ? "Gate Conflict" : "Resolve Conflict"}
            </button>
          ))}
        </div>
      </div>

      {/* ── High-Fidelity Airport Gate Grid Gantt Chart ── */}
      <div className="border border-border rounded-lg bg-background/30 p-4 mb-6">
        
        {/* Time ruler markings */}
        <div className="grid grid-cols-5 text-[7px] text-muted border-b border-border/40 pb-2 mb-3 text-center pl-16">
          <span>08:00</span>
          <span>09:00</span>
          <span>10:00</span>
          <span>11:00</span>
          <span>12:00</span>
        </div>

        {/* Schedule grid tracks */}
        <div className="space-y-3">
          
          {/* Gate 10 track */}
          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] font-bold text-muted">GATE 10</span>
            <div className="flex-1 h-8 bg-background/25 border border-border rounded relative">
              <div className="absolute left-[10%] w-[40%] h-6 top-1 rounded bg-background border border-border flex items-center justify-center text-[8px] text-foreground/80 font-semibold">
                LH203 (Nominal)
              </div>
            </div>
          </div>

          {/* Gate 11 track */}
          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] font-bold text-muted">GATE 11</span>
            <div className="flex-1 h-8 bg-background/25 border border-border rounded relative overflow-hidden sm:overflow-visible">
              {/* LH402 Delayed Block */}
              <div className={cn(
                "absolute left-[20%] w-[50%] h-6 top-1 rounded border flex items-center justify-center text-[8px] font-semibold transition-all duration-300",
                activeState === "conflict" 
                  ? "bg-rose-500/10 border-rose-500 text-rose-500" 
                  : "bg-background border-border text-foreground/80"
              )}>
                {activeState === "conflict" ? "LH402 (Delayed)" : "LH402"}
              </div>

              {/* UA901 overlapping block */}
              {activeState === "conflict" ? (
                <div className="absolute left-[62%] w-[30%] h-6 top-1 rounded bg-rose-500/20 border border-rose-500 text-rose-600 flex items-center justify-center text-[7px] font-bold animate-pulse shadow-sm shadow-rose-950/20">
                  UA901 (Conflict)
                </div>
              ) : (
                <span className="absolute left-[72%] top-2.5 text-[7px] text-muted uppercase tracking-wider font-bold">Slot Free</span>
              )}
            </div>
          </div>

          {/* Gate 12 track */}
          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] font-bold text-muted">GATE 12</span>
            <div className="flex-1 h-8 bg-background/25 border border-border rounded relative">
              {activeState === "resolved" ? (
                <div className="absolute left-[62%] w-[30%] h-6 top-1 rounded bg-accent-tint border border-accent/40 text-accent flex items-center justify-center text-[7px] font-bold shadow-sm">
                  UA901 (Reallocated)
                </div>
              ) : (
                <span className="absolute left-4 top-2 text-[7px] text-muted">No schedule assignments</span>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Log Output & Interactive Resolve Trigger */}
      <div className="border border-border rounded bg-background/50 p-4">
        <div className="flex items-center justify-between text-[8px] font-bold text-muted uppercase tracking-widest mb-2">
          <span>Real-Time Controller log</span>
          <span>Buffer: SYNC</span>
        </div>
        
        <p className="text-xs leading-relaxed text-foreground min-h-[36px] font-mono">
          {getStatusMessage()}
        </p>

        {activeState === "conflict" && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setActiveState("resolved")}
              className="w-full rounded bg-rose-500/10 border border-rose-500/30 py-2.5 text-[9px] font-bold uppercase tracking-wider text-rose-600 hover:bg-rose-500/20 transition-colors duration-150 cursor-pointer focus:outline-none"
            >
              Resolve Conflict (Shift UA901 to Gate 12)
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
