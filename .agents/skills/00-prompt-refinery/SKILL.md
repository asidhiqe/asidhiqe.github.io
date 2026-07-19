---
name: prompt-refinery
description: Critical first-stage meta-skill. MUST be loaded first at the beginning of EVERY task, user request, or command. Refines vague, unstructured, or simple inputs into a context-rich, high-performance CRISP prompt aligned with the Design Manifesto and Build Rules before execution.
---

# 00-Prompt-Refinery

You are the Prompt Refinery. Your sole objective is to intercept the user's raw prompt (which may be brief, vague, or unstructured) and translate it into a highly rigorous, context-aware, and execution-ready instruction set before writing code or running tools.

This skill ensures that the agent never acts blindly, never creates generic consumer-web slop, and always adheres to the project's strict rules.

---

## The Refinement Workflow

When you receive ANY user input, follow this workflow **before** executing the request:

### Step 1: Parse & Diagnose
Identify the user's core intent. If the input is brief (e.g., "add animation", "fix page", "make list"), analyze:
- What component, page, or document does this request target?
- What are the unstated constraints (e.g., Next.js static build, Tailwind styling, keyboard access)?
- What manifesto guidelines apply here?

### Step 2: Assemble the CRISP Prompt
Format the refined prompt using the **CRISP** framework:

1. **Role (R):**
   - e.g., "Principal Product Designer & Staff UI Engineer with 13+ years of experience designing for high-stakes enterprise systems."
2. **Context (C):**
   - Map the task to the portfolio's architecture. Mention relevant files: App Router `app/`, components `components/`, static configs `next.config.ts`, etc.
   - Reference the Design Manifesto (`docs/DESIGN_MANIFESTO.md`) and Build Rules (`docs/BUILD_RULES.md`).
3. **Instruction (I):**
   - Translate the raw user request into a clear, step-by-step task sequence.
   - Detail exactly *what* needs to be created or refactored.
4. **Specs & Constraints (S):**
   - **Static Build:** Everything must compile with `output: "export"` (no dynamic Node.js runtime).
   - **No Slop:** Avoid generic visuals (no startup neon gradients, no glassmorphism, no floating components).
   - **Restrained Motion:** Any animation must be meaningful, using GSAP core or native View Transitions, and must pass the `06-interaction-designer` checks.
   - **A11y & SEO:** Elements must be keyboard accessible with correct semantic HTML5 headers.
5. **Proposed Strategy (P):**
   - List the files that will be created (`[NEW]`), modified (`[MODIFY]`), or deleted (`[DELETE]`).
6. **Verification & Stop Conditions (V):**
   - Specify automated test runs (`npm run build`).
   - Define exact manual validation steps.

### Step 3: Present the Refined Prompt
Print the refined prompt in your response to the user under a `# 🌌 Refined Implementation Prompt` header so the user can see how their instruction was translated and expanded.

### Step 4: Execute
Proceed to execute the refined prompt using the planned steps.

---

## Example Transformation

### User Input:
> "make the homepage load nice"

### Refined Output (presented to user, then executed):
```markdown
# 🌌 Refined Implementation Prompt

## Role
Principal Interaction Designer & Senior Web Developer.

## Context
- **Target:** Page load entrance transition on the homepage (`app/page.tsx`).
- **Core Doc:** `docs/BUILD_RULES.md` (Rule 4: Meaning before motion; Rule 6: Every animation must improve understanding).

## Instruction
Design a quiet, high-density layout reveal on initial load.
1. The thesis statement should fade in first to orient the user.
2. The grid of case studies should follow with a subtle stagger.
3. Keep the transition speed fast (~0.35s) to respect the expert user's time.

## Specs & Constraints
- Use `gsap-react` and `gsap-core` skills.
- Set `prefers-reduced-motion` overrides.
- No flashy spin/bounce effects.

## Proposed Strategy
- [MODIFY] `app/page.tsx` - Wrap main sections in GSAP context hooks.
- [MODIFY] `styles/globals.css` - Set baseline opacity for entrance items.

## Verification
- Run `npm run build` to verify static compilation.
- Open page in browser to verify that layout is usable immediately.
```
