# CLAUDE.md — HausFit NRW website (ecliptic-ephemera)

## Project

Static, SEO-driven site for **HausFit NRW** (Handwerker/renovation company in North Rhine-Westphalia, Germany). Production: **https://www.hausfit.nrw**. Repo name: `ecliptic-ephemera`.

## Stack

- **Astro 6**, static output (no server adapter)
- **Node.js ≥22.12** (see `package.json` `engines`)
- **TypeScript** in `.astro` frontmatter (e.g. `as keyof typeof ...` casts); no standalone `.ts` modules
- `@astrojs/sitemap` integration, tuned via `src/config/sitemap-priorities.js`
- All content and copy is in **German** — this is the only locale (no `/en/` mirror, unlike the BiFoDe site)

## Commands

Run from repository root:

| Command | Purpose |
|--------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | `astro build` + `scripts/sync-sitemap-to-public.mjs` (copies generated sitemap XML into `public/`) |
| `npm run preview` | Preview production build locally |

No separate lint/test script; after substantive changes, run `npm run build` and fix errors. If `dist/sitemap-index.xml` doesn't exist yet, the sync script expects a prior `astro build` — don't run it standalone.

## Repository layout

```text
src/
  pages/                    # File-based routes, German only
  pages/[service]-[city].astro   # Programmatic SEO: one page per service×city combo
  pages/leistungen.astro, leistungen/   # Service landing pages
  pages/einsatzgebiet.astro, einsatzgebiet/  # City/coverage-area pages
  pages/ratgeber/            # Guide/advice articles
  layouts/                  # BaseLayout.astro, Layout.astro
  components/               # Reusable .astro components (Hero, Services, Reviews, ServiceSchema, ...)
  data/                     # Plain JS data modules driving the programmatic pages (see below)
  config/sitemap-priorities.js   # Controls sitemap inclusion/priority per page
public/                     # Static assets
scripts/sync-sitemap-to-public.mjs  # Post-build step, see Commands
hausfit-nrw/                 # Gitignored local scratch copy — not part of the deployed site, ignore
```

## Data-driven / programmatic SEO pages

The `[service]-[city].astro` route cross-joins two data sources at build time:

- `src/data/services.js` — service catalog (`services`, `serviceUrlBySlug`) and combo copy (`serviceCombos`)
- `src/data/cities.js` — per-city content: name, meta title/description, hero image, local `leistungen` links, local `faq`
- `src/data/page-meta.js` — `getComboPageMeta(service, city)` builds page `<title>`/description
- `src/data/serviceCityCombos.js`, `service-city-urls.js` — combo/URL bookkeeping used by sitemap filtering and internal links

When adding a new service or city, update the relevant `data/*.js` file rather than hand-writing new `.astro` pages — the dynamic route and sitemap pick it up automatically. Keep German copy formal-but-approachable (regional tradesperson tone, not corporate).

## Coding conventions

- Match existing patterns in neighboring files (Astro frontmatter style, scoped styles, minimal abstractions).
- Prefer small, focused diffs; do not refactor unrelated code.
- Comments only for non-obvious behavior.
- Keep all user-facing copy in German; do not introduce English strings into rendered pages.

## Safety and workflow

- Do **not** create git commits or push unless the user explicitly asks.
- Do **not** add production dependencies without confirmation.
- Legal pages (`impressum`, `datenschutz`, `cookie-richtlinie`): change carefully; preserve legal accuracy.

## Deployment

- Static build (`npm run build` → `dist/`); confirm hosting target with the user before assuming Vercel/Netlify/other, since no adapter is configured here (unlike the BiFoDe/absent-altitude repo).
