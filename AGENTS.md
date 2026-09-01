# Portfolio operating instructions

This repository is Abhigyan Prakash's official public portfolio. It is
an external public surface of Interview HQ, not an independent source
of career facts or a learning theater.

## Start here

1. Read `docs/portfolio-revival-plan.md` in full before proposing or
   making portfolio changes.
2. Read `~/Documents/interview-hq/CLAUDE.md` in full when that path is
   available. Its operating priorities and claim discipline apply.
3. For public content, use Interview HQ as the source of truth:
   - `resume/ledger/achievements.md` for verified facts, metrics and
     claim restrictions;
   - `resume/profiles/profiles.md` for audience-specific emphasis;
   - `positioning/wire-layer.md` for public positioning;
   - `audits/project-recon/` for technical evidence.

If Interview HQ is unavailable, do not invent, strengthen or publish
professional claims. State the dependency and ask for direction.

## Scope and claim rules

- Work through the numbered portfolio plan one step at a time. Do not
  start visual or technical implementation before the content and
  disclosure brief is approved.
- The site is for Track A backend, payments, platform and core-banking
  integration roles. Keep its thesis focused on safe integration
  between modern applications and legacy banking systems.
- A portfolio sentence is published derivative copy, never evidence.
  Update the HQ ledger first when a fact changes.
- Do not publish client or bank names without explicit approval,
  proprietary source code, internal URLs, credentials, internal
  diagrams, non-public incident detail or unverified metrics.
- Respect explicit status qualifiers: the reporting platform is
  _building_, the core-banking adapter must not claim persistent/pooled
  TCP or unmeasured throughput, and the RAG pilot remains secondary
  until its metrics are verified.

## Delivery rules

- Keep the static site lean, accessible, mobile-first and easy to
  maintain.
- Use the agreed React-first Vite + TypeScript stack with native CSS
  and targeted Anime.js motion. Do not add Tailwind, a UI library,
  routing or a server runtime to the first release without approval.
- Do not preserve obsolete Webpack/Tailwind/Pug machinery merely for
  compatibility when the planned supported replacement is introduced.
- Before deployment, verify every claim, links, résumé artifact,
  responsiveness, keyboard navigation, metadata, image privacy and
  the published GitHub Pages output.
