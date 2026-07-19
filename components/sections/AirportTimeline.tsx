"use client";

import { useState } from "react";
import { cn } from "@/lib";

export default function AirportTimeline() {
  const [activeTab, setActiveTab] = useState<"conflict" | "resolved">("conflict");

  return (
    <div className="w-full p-4 md:p-5 font-mono text-foreground select-none text-[10px]">
      
      {/* ── Airport Operations Header ── */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-muted">
            GRAYMATTER // AIRPORT_GATE_ALLOCATION
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1">
          {(["conflict", "resolved"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-2 py-0.5 rounded-[2px] border text-[7px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer",
                activeTab === tab
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {tab === "conflict" ? "Conflict State" : "Resolved State"}
            </button>
          ))}
        </div>
      </div>

      {/* ── High-Fidelity Gantt Operations Grid ── */}
      <div className="border border-border/40 rounded bg-background/40 p-3 mb-3 min-h-[140px]">
        
        {/* Time ruler scale */}
        <div className="grid grid-cols-4 text-[7px] text-muted border-b border-border/20 pb-1.5 mb-2 pl-12 text-center">
          <span>08:00</span>
          <span>09:00</span>
          <span>10:00</span>
          <span>11:00</span>
        </div>

        {/* Schedule grid tracks */}
        <div className="space-y-2.5">
          
          {/* Gate 10 track */}
          <div className="flex items-center gap-2">
            <span className="w-10 text-[7px] text-muted font-bold">GATE 10</span>
            <div className="flex-1 h-6 bg-background/20 border border-border/30 rounded relative">
              <div className="absolute left-[15%] w-[45%] h-4 top-1 rounded bg-background border border-border/40 flex items-center justify-center text-[7px] text-foreground font-semibold">
                LH203 (Nominal)
              </div>
            </div>
          </div>

          {/* Gate 11 track */}
          <div className="flex items-center gap-2">
            <span className="w-10 text-[7px] text-muted font-bold">GATE 11</span>
            <div className="flex-1 h-6 bg-background/20 border border-border/30 rounded relative">
              <div className="absolute left-[20%] w-[35%] h-4 top-1 rounded bg-background border border-border/40 flex items-center justify-center text-[7px] text-foreground font-semibold">
                LH402
              </div>
              
              {activeTab === "conflict" ? (
                <div className="absolute left-[52%] w-[30%] h-4 top-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-600 flex items-center justify-center text-[7px] font-bold animate-pulse">
                  UA901 (Conflict)
                </div>
              ) : (
                <span className="absolute left-[60%] top-1.5 text-[6px] text-accent font-bold uppercase tracking-wider">Slot Cleared</span>
              )}
            </div>
          </div>

          {/* Gate 12 track */}
          <div className="flex items-center gap-2">
            <span className="w-10 text-[7px] text-muted font-bold">GATE 12</span>
            <div className="flex-1 h-6 bg-background/20 border border-border/30 rounded relative">
              {activeTab === "resolved" && (
                <div className="absolute left-[52%] w-[30%] h-4 top-1 rounded bg-accent-tint border border-accent/40 text-accent flex items-center justify-center text-[7px] font-bold">
                  UA901 (Reallocated)
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Footer Metrics Readout */}
      <div className="border border-border/40 rounded bg-background/50 p-2.5 flex items-center justify-between text-[7px] text-muted tracking-wider">
        <span>AIRPORT: BLR_T2</span>
        <span>OPS_ZONE: NORTH</span>
        <span>AUDIT_CHECK: ACTIVE</span>
      </div>

    </div>
  );
}
