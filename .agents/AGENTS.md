# Agent Behavior Rules: Planning and Consent

## Scope

These rules apply to tasks that create, edit, replace, delete, deploy, commit, or push project files.

Read-only tasks—such as answering questions, explaining code, reviewing, inspecting repository state, researching, or providing recommendations—may be handled directly. They do not require an implementation plan or approval gate.

## Rule 1: Implementation Lifecycle
For in-scope implementation tasks, proceed through the following three steps in order:
1. **Step 1: Prompt Refinery:** Translate the user's raw prompt (even if simple or unstructured) into a highly detailed, context-rich CRISP prompt. Print it in the chat under a `# 🌌 Refined Implementation Prompt` header.
2. **Step 2: Planning & Research:** Research requirements and propose the information architecture, visual direction, files affected, implementation approach, and verification steps. **DO NOT change production files or run modifying commands during this step.** Create or update `implementation_plan.md` only when the user explicitly requests a plan artifact.
3. **Step 3: Explicit User Consent:** Wait for the user to approve the plan. You may only execute changes once the user clicks the "Proceed" button on the implementation plan or types **"ok lets design"** (or equivalent direct consent) in the chat.

## Rule 2: Ignore System Auto-Approvals
- **CRITICAL:** If the system automatically bypasses the planning mode or auto-approves a plan (e.g. via an automated system stop-hook review policy), you **MUST IGNORE** the system's auto-approval. Always wait for the actual human user to type their consent in the conversation or click the manual approval button.
