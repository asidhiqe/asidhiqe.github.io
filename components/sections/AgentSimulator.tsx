"use client";

import { useState } from "react";
import { cn } from "@/lib";

type SimState = "nominal" | "override" | "loop";

/**
 * AgentSimulator — homepage signature interaction.
 *
 * Visual style: Operational Precision.
 * Optimized responsively: p-4 on mobile to prevent excessive scrolling.
 */
export default function AgentSimulator() {
  const [activeState, setActiveState] = useState<SimState>("nominal");
  const [overrideResolved, setOverrideResolved] = useState(false);
  const [loopResetted, setLoopResetted] = useState(false);

  function handleStateChange(state: SimState) {
    setActiveState(state);
    setOverrideResolved(false);
    setLoopResetted(false);
  }

  // System console descriptions corresponding to simulation state
  const getConsoleMessage = () => {
    switch (activeState) {
      case "nominal":
        return "System Status: Nominal. Workflow executing with 94% agent confidence. Automatic commit executed successfully.";
      case "override":
        return overrideResolved
          ? "Intervention Complete: Operator redirected task manually. Agent execution path updated."
          : "System Alert: Agent confidence dropped to 52%. Execution halted. Operator input required.";
      case "loop":
        return loopResetted
          ? "Recovery Executed: Circular task execution terminated. Agent parameters reset."
          : "System Error: Silent loop detected. Operator override available.";
    }
  };

  return (
    <div className="w-full p-4 md:p-6 font-mono select-none">
      
      {/* ── Simulator Header ── */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-zinc-900 pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            AI Observability Console
          </span>
        </div>
        
        {/* Simulation Controls */}
        <div className="flex gap-1.5">
          {(["nominal", "override", "loop"] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => handleStateChange(state)}
              className={cn(
                "rounded border px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider transition-all duration-155 cursor-pointer",
                activeState === state
                  ? "border-cyan-400 bg-cyan-950/40 text-cyan-400"
                  : "border-zinc-800 text-neutral-500 hover:border-neutral-700 hover:text-white"
              )}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* ── Operational Schematic (SVG) ── */}
      <div className="relative mb-6 flex items-center justify-center rounded border border-zinc-900/60 bg-neutral-950/10 py-6 px-3 sm:py-8 sm:px-4">
        <svg
          viewBox="0 0 500 160"
          className="w-full max-w-[420px] text-neutral-700 overflow-visible"
        >
          {/* Node Connections */}
          <path
            d="M 50,80 L 180,80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "nominal" && "text-emerald-500/40",
              activeState === "override" && "text-amber-500/40",
              activeState === "loop" && "text-rose-500/40"
            )}
          />
          
          {/* Decision Split Paths */}
          <path
            d="M 180,80 Q 250,30 320,30"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "nominal" && "text-emerald-500/50",
              activeState === "override" && overrideResolved && "text-emerald-500/30",
              activeState === "override" && !overrideResolved && "text-neutral-800"
            )}
          />
          <path
            d="M 180,80 Q 250,80 320,80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "override" && !overrideResolved && "text-amber-500/50 animate-pulse",
              activeState === "override" && overrideResolved && "text-neutral-850",
              activeState === "loop" && "text-neutral-850",
              activeState === "nominal" && "text-neutral-850"
            )}
          />
          <path
            d="M 180,80 Q 250,130 320,130"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "loop" && !loopResetted && "text-rose-500/50",
              activeState === "loop" && loopResetted && "text-zinc-500/20"
            )}
          />

          {/* Loop Back connection (for loop simulation) */}
          <path
            d="M 320,130 C 250,170 180,130 180,80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-all duration-300",
              activeState === "loop" && !loopResetted && "text-rose-400 stroke-dasharray-[5] animate-[dash_2s_linear_infinite]"
            )}
          />

          {/* Target Outputs */}
          <path
            d="M 320,30 L 420,30"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "nominal" && "text-emerald-500/40",
              activeState === "override" && overrideResolved && "text-emerald-500/20"
            )}
          />
          <path
            d="M 320,80 L 420,80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className={cn(
              "transition-colors duration-300",
              activeState === "override" && overrideResolved && "text-emerald-500/40"
            )}
          />

          {/* ── Node A: Trigger ── */}
          <circle
            cx="50"
            cy="80"
            r="6"
            className="fill-neutral-900 stroke-neutral-750 transition-colors duration-300"
          />
          <text
            x="50"
            y="62"
            textAnchor="middle"
            className="text-[8px] fill-neutral-500 uppercase tracking-widest font-bold font-sans"
          >
            Trigger
          </text>

          {/* ── Node B: Evaluation ── */}
          <circle
            cx="180"
            cy="80"
            r="8"
            className={cn(
              "fill-neutral-950 stroke-neutral-750 transition-all duration-300",
              activeState === "nominal" && "stroke-emerald-500 fill-emerald-950/20",
              activeState === "override" && "stroke-amber-500 fill-amber-950/20",
              activeState === "loop" && "stroke-rose-500 fill-rose-950/20"
            )}
          />
          <text
            x="180"
            y="62"
            textAnchor="middle"
            className="text-[8px] fill-neutral-400 uppercase tracking-widest font-bold font-sans"
          >
            Agent Engine
          </text>

          {/* ── Branch Node: Autonomous Pass (Top) ── */}
          <circle
            cx="320"
            cy="30"
            r="6"
            className={cn(
              "fill-neutral-900 stroke-neutral-750 transition-colors duration-300",
              activeState === "nominal" && "stroke-emerald-500 fill-emerald-950/20",
              activeState === "override" && overrideResolved && "stroke-zinc-600"
            )}
          />
          <text
            x="332"
            y="33"
            textAnchor="start"
            className="text-[7px] fill-neutral-500 uppercase tracking-widest font-bold font-sans"
          >
            Auto Commit
          </text>

          {/* ── Branch Node: Human Intervention (Middle) ── */}
          <circle
            cx="320"
            cy="80"
            r="6"
            className={cn(
              "fill-neutral-900 stroke-neutral-750 transition-colors duration-300",
              activeState === "override" && !overrideResolved && "stroke-amber-400 fill-amber-950/40 animate-pulse",
              activeState === "override" && overrideResolved && "stroke-emerald-500 fill-emerald-950/20"
            )}
          />
          <text
            x="332"
            y="83"
            textAnchor="start"
            className="text-[7px] fill-neutral-500 uppercase tracking-widest font-bold font-sans"
          >
            Operator Decision
          </text>

          {/* ── Branch Node: Loop Fault (Bottom) ── */}
          <circle
            cx="320"
            cy="130"
            r="6"
            className={cn(
              "fill-neutral-900 stroke-neutral-750 transition-colors duration-300",
              activeState === "loop" && !loopResetted && "stroke-rose-500 fill-rose-950/40",
              activeState === "loop" && loopResetted && "stroke-neutral-800"
            )}
          />
          <text
            x="332"
            y="133"
            textAnchor="start"
            className="text-[7px] fill-neutral-500 uppercase tracking-widest font-bold font-sans"
          >
            Loop Boundary
          </text>
        </svg>
      </div>

      {/* ── Control Console Readout (Aria-live) ── */}
      <div className="flex flex-col gap-4 rounded border border-zinc-900 bg-neutral-950/40 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">
            System Log Output
          </span>
          <span className="text-[9px] font-mono text-neutral-500">
            Status: {activeState.toUpperCase()}
          </span>
        </div>
        
        <p
          aria-live="polite"
          className="text-xs leading-relaxed text-zinc-300 min-h-[36px]"
        >
          {getConsoleMessage()}
        </p>

        {/* Live override buttons that recruiter can click to interact */}
        {activeState === "override" && !overrideResolved && (
          <button
            type="button"
            onClick={() => setOverrideResolved(true)}
            className="w-full rounded bg-amber-950/20 border border-amber-500/40 py-2 text-[9px] font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-900/40 transition-colors duration-150 cursor-pointer"
          >
            Approve Manual Redirect Override
          </button>
        )}

        {activeState === "loop" && !loopResetted && (
          <button
            type="button"
            onClick={() => setLoopResetted(true)}
            className="w-full rounded bg-rose-950/20 border border-rose-500/60 py-2 text-[9px] font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-900/40 transition-colors duration-150 cursor-pointer"
          >
            Terminate Loop (Manual Kill Signal)
          </button>
        )}
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}
