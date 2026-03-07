# Agent Rules for Consenza Estates (Top Realtor)

This project follows March 2026 best practices for a top realtor: conversion, compliance, GBP alignment, and lead speed.

## Always On

- **NAP and identity:** Dr. Jan Duffy (never "Janet"), license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. NAP must match Google Business Profile. Single source: `src/config/settings.js`.
- **Schema:** RealEstateAgent and Person JSON-LD in `src/components/head/BaseHead.astro` use settings; no conflicting NAP in visible text.
- **MLS disclaimer and listing attribution:** Required wherever listings (RealScout) are shown.

## RealScout (IDX)

- **RealScout is the office IDX** (MLS listing display). Do not modify RealScout widget/integration without explicit approval.
- Script loaded once in `src/layouts/Base.astro`. CSP in `vercel.json` must include `em.realscout.com` and `www.realscout.com` in `script-src` and `connect-src`.

## Plan Mode

- For complex or compliance-touching work, use Plan Mode (e.g. Shift+Tab) and save plans under `.cursor/plans/` when useful.

## Rule Files

- `.cursor/rules/realtor-nap-compliance.mdc` — NAP, agent name, license, disclaimer (always apply).
- `.cursor/rules/realscout-idx.mdc` — RealScout = IDX; CSP; script once; no changes without approval (file-scoped).
- `.cursor/rules/plan-mode-and-compliance.mdc` — Plan Mode and compliance-sensitive work (file-scoped).
- `.cursor/rules/feeds-and-external-images.mdc` — External feeds/APIs: extract and display images; allow domains in CSP (file-scoped).
- `.cursor/rules/git-push-workflow.mdc` — When user says "git push", always run: git add → git commit → git push (always apply).

User-level rules (CLAUDE.md, etc.) may add more context; this file is the project-level summary.
