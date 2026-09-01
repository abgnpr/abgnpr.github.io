# Content and disclosure brief

This brief locks the public-content boundary before any page design or
implementation. The portfolio is a public derivative of Interview HQ;
the evidence remains in HQ.

## Release defaults

| Decision              | Default                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Public phone number   | Do not publish.                                                                            |
| Photo                 | Use an abstract technical visual identity.                                                 |
| Client and bank names | Do not publish without explicit approval.                                                  |
| Public code links     | Do not link proprietary or client work. Link only separately approved public repositories. |
| Contact actions       | Email, LinkedIn, GitHub and a current résumé.                                              |
| RAG pilot             | Keep out of the primary project set until its operating metrics are verified.              |

The résumé linked from the site is a deliberate, reviewed release from
Interview HQ's résumé factory. It is copied to the portfolio only as a
published artifact; its source remains in Interview HQ.

## Public audience and thesis

**Audience:** recruiters, hiring managers and referral contacts for
backend, payments, platform and core-banking integration roles.

**Primary title:** Backend Engineer — Payments and Core Banking
Integration

**Thesis:** Legacy banking systems, made safely reachable.

**Supporting introduction:**

> I build the layer between modern applications and legacy banking
> systems: payment switches, protocol adapters and
> authorization-aware platforms where correctness matters.

This communicates a pattern of depth, rather than presenting Go, Java
and Python as unrelated experience.

## Page copy outline

### Hero

- Name and primary title.
- Thesis and supporting introduction.
- Kolkata, open to relocation and remote opportunities.
- Calls to action: View résumé, LinkedIn, GitHub and email.

### Proof strip

Use only four compact signals:

- 5+ years in production banking systems.
- 2–3 lakh UPI transactions per day.
- NPCI-certified IMPS switch.
- 300 core-banking transaction types in the protocol-adapter scope.

The proof strip must not imply that every item was solo work or that
every system is currently live.

### Selected work

#### UPI interface rebuild

**Public copy:** Rebuilt a bank's UPI interface in Go with
goroutine-per-connection TCP, length-prefixed framing, an idempotent
PostgreSQL journal and a COBOL bridge. Handles 2–3 lakh transactions a
day.

**Boundary:** Do not name the client, disclose source code, use the
obsolete 10 MB footprint figure, claim semaphores, or claim that a
global lock resolved latency.

**HQ evidence:** the _UPI comms controller (Go)_ entry in
`resume/ledger/achievements.md`, with deeper verification in
`audits/project-recon/upi-switch-recon.md`.

#### IMPS payment switch

**Public copy:** Architected and implemented an NPCI-certified IMPS
payment switch in Java, Spring Boot, Kafka and Oracle, through
end-to-end UAT and certification. Handles 8–10k daily transactions.

**Boundary:** Do not use superseded daily-volume figures or expose the
client, certification material or source code.

**HQ evidence:** the _IMPS payment switch (Java)_ entry in
`resume/ledger/achievements.md`, supported by
`audits/project-recon/imps-switch-recon.md`.

#### Core-banking protocol adapter

**Public copy:** Built a FastAPI gateway that translates JSON/REST
requests into a legacy fixed-width ASCII protocol over TCP. XML-defined
transaction specifications let the system cover 300 transaction types
without a code change per transaction; Redis-backed sessions remain
safe across workers.

**Boundary:** Do not claim persistent or pooled TCP, production status,
measured throughput or latency. Do not reveal the core-banking vendor,
wire protocol samples or XML transaction definitions.

**HQ evidence:** the _CBS protocol adapter (Python/FastAPI)_ entry in
`resume/ledger/achievements.md`, with deeper verification in
`audits/project-recon/cbs-adapter-recon.md`.

#### Bank reporting platform

**Public copy:** Building a three-service reporting platform with Java
21, Next.js and FastAPI. Its authorization model separates identity
from access, re-checking permissions for 21 banking roles across 15
functional domains on every request.

**Boundary:** Always use _building_, never shipped, delivered or in
production. Do not publish internal report examples, role mappings,
architecture decision records, users or performance metrics.

**HQ evidence:** the _nokoko CBS information system (Java/Next/Python)_
entry in `resume/ledger/achievements.md`, with deeper verification in
`audits/project-recon/nokoko-recon.md`.

## Supporting sections

### Engineering approach

Use three short principles:

1. **Correctness at the protocol boundary** — framing, exact reads,
   safe lifecycle management and controlled integration with legacy
   systems.
2. **Money-safe state** — idempotency and explicit treatment of
   indeterminate outcomes when a banking dependency times out.
3. **Authorization as a decision, not a session property** — identity
   and access remain deliberately separate and permissions are
   re-checked at the request boundary.

### Focused capabilities

Present only skills that support the thesis:

- Payments and banking: UPI, IMPS, NPCI, core banking and digital
  banking.
- Backend and integration: Go, Java, Python, Spring Boot, FastAPI,
  TCP, Kafka, gRPC and REST.
- Data and state: PostgreSQL, Oracle, Redis, SQL and XML-defined
  transaction specifications.
- Platform delivery: AWS, Docker/Podman, Linux and Gitea-based CI/CD.

Do not add Kubernetes, MongoDB, LangGraph, Prometheus, Grafana or
OpenTelemetry in a way that implies professional production use.

### Career snapshot

Use one concise progression:

> Production support and legacy operations → payment-switch delivery →
> platform leadership and modern banking integration.

Do not repeat every résumé item or publish detailed employer/client
history.

## Claim-to-source register

| Public claim                                                                        | Source in Interview HQ                                                                                                       |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 5+ years building production banking systems                                        | The legacy-integration profile in `resume/profiles/profiles.md`; current employment record in `resume/ledger/employment.md`. |
| 2–3 lakh UPI transactions per day; Go/TCP/PostgreSQL/COBOL scope                    | The _UPI comms controller (Go)_ entry in `resume/ledger/achievements.md`.                                                    |
| NPCI-certified IMPS switch; Java/Spring Boot/Kafka/Oracle; 8–10k daily transactions | The _IMPS payment switch (Java)_ entry in `resume/ledger/achievements.md`.                                                   |
| 300 adapter transaction types; XML definitions; Redis-backed session state          | The _CBS protocol adapter (Python/FastAPI)_ entry in `resume/ledger/achievements.md`.                                        |
| Java 21/Next.js/FastAPI; 21 roles; 15 domains; in-progress status                   | The _nokoko CBS information system (Java/Next/Python)_ entry in `resume/ledger/achievements.md`.                             |
| Public thesis and role framing                                                      | `positioning/wire-layer.md` and the legacy-integration profile in `resume/profiles/profiles.md`.                             |

## Exclusions

The first release excludes:

- detailed education history and college-era material;
- the incomplete About page, placeholder navigation and dead links;
- client names, client logos and internal architecture diagrams;
- public links to proprietary project code;
- a public phone number;
- unverified scale, latency, deployment or ownership claims;
- an AI-first identity or a featured RAG case study without verified
  operating metrics.

## Build gate

This brief is the build contract for the page. If a disclosure default
changes, update this brief before the corresponding page content is
introduced.
