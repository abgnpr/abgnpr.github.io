# Portfolio revival plan

## Purpose

Turn this repository from a college-era landing page into Abhigyan
Prakash's official public portfolio: a fast, trustworthy professional
landing page for Track A backend, payments, platform and core-banking
integration opportunities.

The site exists to help a recruiter or referral contact understand the
professional thesis, see credible proof, and reach the right next step
(résumé, LinkedIn, GitHub or email). It is not a learning project, an
interview-preparation theater, or a second résumé factory.

## Plan

### 1. Establish its HQ position

```text
Interview HQ — truth, positioning and priorities
├── résumé factory → tailored PDFs for applications
├── positioning layer → LinkedIn and Naukri copy
└── this repository → public portfolio and referral landing page
```

The portfolio is an **external public surface**. It lives at
`~/Projects/abgnpr.github.io`; Interview HQ owns the source material
and campaign priorities. This repository owns only presentation and
deployment.

When implementation is scheduled, make these two HQ documentation
changes:

1. Add a **Public surfaces** entry to `MAP.md` for
   `~/Projects/abgnpr.github.io`: the official portfolio for public
   professional proof, recruiter follow-through and referral links.
2. Add a short pointer in `README.md` identifying this as an external,
   presentation-only repository.

The portfolio must not be placed on the normal readiness or
learning-theater board. A scheduled launch is a bounded access task and
must not displace a live interview or application deadline.

### 2. Set the content contract before design

#### Source-of-truth contract

Portfolio copy is a published derivative, never the record of truth.
Every substantive statement must be traceable to one of these HQ
sources:

- `resume/ledger/achievements.md` — verified project facts, metrics,
  scope and claim restrictions.
- `resume/profiles/profiles.md` — the ordering and emphasis for the
  legacy-integration / backend-payments audience.
- `positioning/wire-layer.md` — public professional thesis and
  recruiter-facing wording.
- `audits/project-recon/` — deeper technical evidence when a project
  card needs checking.

When a fact changes, update the HQ ledger first, then the positioning
layer, then this site. The site must never repair, strengthen or invent
a claim on its own.

#### Public positioning

##### Audience

Recruiters, hiring managers and referral contacts for backend,
payments, platform and core-banking integration roles.

##### Thesis

**Legacy banking systems, made safely reachable.**

The public story is not a list of unrelated languages. It is repeated
work at the boundary between modern applications and legacy banking
rails: payment switches, protocol adapters and authorization-aware
platforms.

##### Primary proof

The first release should lead with these four projects, using concise,
ledger-backed wording:

1. **UPI interface rebuild** — Go TCP communication controller,
   length-prefixed framing, an idempotent PostgreSQL journal and a
   COBOL bridge. Public scale: 2–3 lakh transactions per day.
2. **IMPS payment switch** — Java/Spring Boot/Kafka/Oracle,
   NPCI-certified through end-to-end UAT and certification. Public
   scale: 8–10k daily transactions.
3. **Core-banking protocol adapter** — Python/FastAPI gateway from
   JSON/REST to a fixed-width ASCII TCP protocol, with XML-defined
   transaction specifications and Redis-backed session state. Public
   scope: 300 transaction types; do not claim persistent or pooled TCP,
   production status, or unmeasured throughput.
4. **Bank reporting platform** — an in-progress Java 21, Next.js and
   FastAPI system with a 21-role, 15-domain authorization model. It is
   always described as **building**, never shipped or production.

The RAG knowledge pilot may appear as a compact secondary initiative;
it does not lead the page until its operating metrics are verified.

##### Disclosure boundary

The page must not publish client or bank names without an explicit
approval, proprietary source code, internal URLs, credentials, internal
architecture diagrams, non-public incident details, or any unverified
metric. Avoid claims that imply tools were used in production when the
HQ ledger scopes them to personal work or coursework.

Before launch, decide deliberately whether to publish a phone number,
use a current photo, link public code, or name an employer/client.

### 3. Replace the college page with a professional information architecture

#### Information architecture

The replacement page should be a concise professional site, not a
multi-page brochure.

1. **Hero** — name, professional role, the thesis, location/relocation
   status, and primary calls to action.
2. **Proof strip** — a small set of evidence-backed ownership, scale
   and domain signals.
3. **Selected work** — four case-study cards. Each states the problem,
   engineering decision, stack and verified outcome without revealing
   confidential implementation detail.
4. **Engineering approach** — protocol correctness, financial
   idempotency, legacy integration and authorization boundaries.
5. **Focused capabilities** — payments/banking, backend languages and
   frameworks, data/integration, then cloud/operations. This is a
   curated list, not an exhaustive keyword wall.
6. **Career snapshot** — a short progression from production support
   through payment infrastructure and platform leadership.
7. **Contact** — email, LinkedIn, GitHub and a current résumé, with
   only the contact details approved for public use.

No placeholder navigation, dead project links, college biography,
unfinished About page, or decorative social grid survives the rewrite.

#### Design direction

The visual tone should be calm, technical and senior: clear hierarchy,
excellent typography, spacious reading rhythm and subtle system/flow
motifs. It should communicate reliability rather than imitate a bank
dashboard or display confidential architecture.

- Design mobile-first, then enhance for larger screens.
- Keep the résumé and contact actions visible near the top and bottom.
- Use a current professional photo only if chosen; otherwise prefer an
  abstract visual identity over the college-era avatar.
- Provide visible keyboard focus, semantic landmarks, meaningful image
  alternatives and sufficient colour contrast.
- Remove EXIF-bearing source photos or sanitize them before publishing.

### 4. Modernize the build and deployment path

The existing Webpack 5/Tailwind 2/Pug setup is obsolete, has current
Node compatibility failures and has a stale `dist` deployment branch.
Do not patch around it as the long-term solution.

The recommended replacement is a small Astro + TypeScript static site:

- static output with minimal client-side JavaScript;
- a supported, pinned Node LTS version;
- content kept in small local data modules/components, derived from the
  approved HQ brief;
- responsive image handling and no unnecessary third-party scripts;
- a reproducible local build and CI build check;
- GitHub Pages deployment from the default branch through an actions
  workflow, rather than a manually pushed `dist` branch.

Vite with plain HTML/CSS/TypeScript is an acceptable alternative if the
Astro structure proves unnecessary. The implementation should choose
one and remove the unused legacy build machinery instead of preserving
two paths.

#### Content and disclosure brief

- Confirm the public contact, photo and code-link choices.
- Select final wording for the thesis and the four proof cards from HQ
  evidence.
- Record claim-to-source links for every number, ownership statement
  and production-status statement.
- Define the résumé artifact to link and its update path.

#### Design system and content model

- Create the page wireframe, responsive layout and visual direction.
- Define reusable components for the hero, proof strip, project cards,
  skills and contact area.
- Prepare approved copy before styling the final interface.

#### Modern static-site rebuild

- Replace the old toolchain with the selected supported stack.
- Build the page from the approved content model.
- Remove Pug duplicates, empty/placeholder pages and unused legacy
  assets.
- Add local commands, version pinning and repository documentation.

### 5. Validate before launch

#### Quality and claim audit

- Verify each claim against Interview HQ.
- Test current Node builds, production output, internal/external links
  and the résumé download.
- Test common mobile and desktop breakpoints, keyboard navigation,
  accessibility landmarks, visible focus and contrast.
- Check image metadata, performance, page title, description, sitemap,
  robots policy and Open Graph preview.
- Run dependency and supply-chain checks; do not ship known critical
  tooling advisories without a deliberate exception.

#### Deployment and handoff

- Confirm GitHub Pages source and custom-domain needs before cutover.
- Deploy through the documented workflow and verify the published URL,
  routing, assets and social preview.
- Add the planned **Public surfaces** entry to Interview HQ's `MAP.md`
  and the short portfolio pointer to its `README.md`.
- Keep the portfolio copy synchronized only through the source-of-truth
  contract above.

#### Definition of done

The portfolio is complete when it builds on the pinned current toolchain,
deploys reproducibly, presents the Track A thesis in under a minute,
contains only ledger-backed public claims, works accessibly on mobile
and desktop, and gives a recruiter an unambiguous next action.
