"use client";

import { useState } from "react";
import { cn } from "@/lib";

type WorkflowState = "siloed" | "unified";

/**
 * DoctorWorkflow — Interactive clinical workflow comparison widget.
 *
 * Visual style: Operational Precision.
 * Optimized for layout cell flushing.
 */
export default function DoctorWorkflow() {
  const [activeState, setActiveState] = useState<WorkflowState>("siloed");

  const getStatusMessage = () => {
    return activeState === "siloed"
      ? "Siloed Mode: 8 disconnected applications active. Doctor context-switching required. Administrative overhead: High."
      : "Unified Mode: Single clinical workspace context active. Consolidated patient records. Context-switches: 0.";
  };

  return (
    <div className="w-full p-6 font-mono select-none">
      
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-zinc-900 pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className={cn(
            "h-1.5 w-1.5 rounded-full animate-pulse",
            activeState === "siloed" ? "bg-amber-500" : "bg-cyan-400"
          )} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Clinical Workspace Map
          </span>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex gap-1.5">
          {(["siloed", "unified"] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => setActiveState(state)}
              className={cn(
                "rounded border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer",
                activeState === state
                  ? "border-cyan-400 bg-cyan-950/40 text-cyan-400"
                  : "border-zinc-800 text-neutral-500 hover:border-neutral-700 hover:text-white"
              )}
            >
              {state === "siloed" ? "Siloed (Original)" : "Unified Workbench"}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Workflow Diagram */}
      <div className="relative mb-6 flex items-center justify-center rounded border border-zinc-900/60 bg-neutral-950/10 py-8 px-4">
        <svg
          viewBox="0 0 500 160"
          className="w-full max-w-[420px] text-neutral-700 overflow-visible"
        >
          {activeState === "siloed" ? (
            /* ── Siloed State Diagram ── */
            <>
              {/* Complex crossing pathways */}
              <path d="M 50,80 Q 120,20 180,30" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.3" />
              <path d="M 180,30 Q 250,140 320,130" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.3" />
              <path d="M 320,130 Q 220,80 180,130" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.3" />
              <path d="M 180,130 Q 120,140 50,80" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.3" />
              <path d="M 50,80 Q 250,20 450,80" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity="0.5" className="stroke-dasharray-[4]" />

              {/* 8 Disconnected System Nodes */}
              <circle cx="50" cy="80" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="50" y="66" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">EMR</text>

              <circle cx="180" cy="30" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="180" y="18" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">PACS</text>

              <circle cx="320" cy="30" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="320" y="18" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Labs</text>

              <circle cx="450" cy="80" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="450" y="66" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Billing</text>

              <circle cx="320" cy="130" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="320" y="146" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Meds</text>

              <circle cx="180" cy="130" r="5" className="fill-neutral-950 stroke-amber-500" />
              <text x="180" y="146" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Admin</text>
            </>
          ) : (
            /* ── Unified State Diagram ── */
            <>
              {/* Single direct flow */}
              <path d="M 50,80 H 450" stroke="#22d3ee" strokeWidth="1.8" fill="none" opacity="0.6" />
              
              {/* Dynamic flow indicator dot */}
              <circle cx="250" cy="80" r="3" className="fill-cyan-400 animate-ping" />

              {/* Unified Node Layout */}
              <circle cx="50" cy="80" r="6" className="fill-neutral-950 stroke-neutral-750" />
              <text x="50" y="62" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Patient Round</text>

              <g className="translate-x-[200px] translate-y-[45px]">
                <rect x="0" y="0" width="100" height="70" rx="3" className="fill-neutral-950 stroke-cyan-500/40" />
                <text x="50" y="20" textAnchor="middle" className="text-[8px] fill-cyan-400 font-sans font-bold uppercase tracking-wider">Workbench</text>
                <text x="50" y="40" textAnchor="middle" className="text-[6px] fill-neutral-500 font-sans">EMR + Labs + PACS</text>
                <text x="50" y="52" textAnchor="middle" className="text-[6px] fill-neutral-500 font-sans">Integrated Context</text>
              </g>

              <circle cx="450" cy="80" r="6" className="fill-neutral-950 stroke-neutral-750" />
              <text x="450" y="62" textAnchor="middle" className="text-[7px] fill-neutral-500 font-sans font-bold">Action Signed</text>
            </>
          )}
        </svg>
      </div>

      {/* Log output */}
      <div className="rounded border border-zinc-900 bg-neutral-950/40 p-4">
        <p className="text-xs leading-relaxed text-zinc-300 min-h-[36px]">
          {getStatusMessage()}
        </p>
      </div>

    </div>
  );
}
