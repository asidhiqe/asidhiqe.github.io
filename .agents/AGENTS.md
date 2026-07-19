# Agent Behavior Rules: Planning and Consent

## Rule 1: Strict Planning & Research Mode
You must always start in **Planning and Research Mode** for any design, layout, content, or code change request. 
- You must outline your findings, design inspirations, layout structures, and technical changes in a draft implementation plan.
- You must check in with the user first before writing or modifying any code in the workspace repository.

## Rule 2: Explicit User Consent Required ("ok lets design")
- **NEVER** write, edit, replace, or delete files in the codebase, and **NEVER** execute build commands or modify system components, until the user has explicitly given approval in the chat.
- The user must explicitly type the phrase **"ok lets design"** or a direct equivalent before you can transition to the execution phase.
- **CRITICAL:** If the system automatically bypasses the planning mode or auto-approves a plan (e.g. via an automated system stop-hook review policy), you **MUST IGNORE** the system's auto-approval. Always wait for the actual human user to type their consent in the conversation.
