# Abhigyan Prakash — Portfolio

The official public portfolio for Abhigyan Prakash: backend, payments,
platform and core-banking integration work.

## Stack

- React + TypeScript
- Vite
- Native CSS
- Anime.js for reduced-motion-safe, targeted motion
- GitHub Pages through GitHub Actions

## Local development

Use the Node version in `.nvmrc`.

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run check
npm run build
npm run format:check
npm run preview
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds
and deploys the site after pushes to `main`. In the repository's Pages
settings, select **GitHub Actions** as the publishing source. Generated
`dist/` output is an artifact, never source.

## Content governance

Read `AGENTS.md` and `docs/portfolio-revival-plan.md` before changing
content. The site is a public derivative of Interview HQ; professional
claims, metrics and scope restrictions remain owned by the HQ ledger
and positioning files.
