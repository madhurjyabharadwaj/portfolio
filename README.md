# Madhurjya Bharadwaj, portfolio

Static Astro site, plain CSS, vanilla JS. No SSR, no framework, two dependencies.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves dist/ on http://localhost:4321
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project", import the repo. Vercel detects Astro. Confirm:
   - Framework preset: Astro
   - Build command: `astro build`
   - Output directory: `dist`
3. Deploy. `vercel.json` in this repo turns on clean URLs (so `/about.html` is served at `/about`) and long cache headers for hashed assets and fonts.
4. Add the domain under Settings, Domains, and point DNS at Vercel as instructed there. Set the domain as the primary so the `.vercel.app` address redirects to it.

Every push to `main` deploys production. Pull requests get preview URLs.

## Before going live

| What | Where |
|---|---|
| Site URL | `SITE_URL` in `astro.config.mjs`, one line. Drives canonical links, Open Graph tags, `robots.txt` and `sitemap.xml`. It must match the address the site is actually served from, or link previews break. |
| Formspree endpoint | `formEndpoint` in `src/site.ts`. Create a form at formspree.io and paste its URL. |
| Entalpic deck | Upload the cleaned PDF to `public/decks/` and set `deck:` in `src/content/work/entalpic.md` to its path. Remove the `deck:` line to hide the button. |
| CV | Replace `public/cv/Madhurjya-Bharadwaj-CV.pdf` with a newer file of the same name. |

## Adding work

Create one markdown file in `src/content/work/`. That is the whole change: a tile appears on the home page and on `/work`, and a page is built at `/work/<filename>`.

```markdown
---
title: "The question the piece answers"
name: "Client or product name"
type: "case-study"        # or "project". Sets the tile label.
order: 5                  # lower comes first
links:                    # optional, rendered as buttons at the end
  - label: "Repo"
    href: "https://..."
deck: "/decks/file.pdf"   # optional, adds a download button
---

First paragraph is set larger as the lead.

## Sub-headings become h2

Body copy. Blockquotes and inline code are styled.
```

Smaller pieces that don't need a page go in `src/content/also-built/` with `name`, `order` and `links`. They list under "Also built" on `/work`.

## Where things live

| Path | What |
|---|---|
| `src/styles/tokens.css` | Colours, type scale, spacing, radii, easing. Change the look here. |
| `src/styles/base.css` | Fonts, reset, headings, buttons, pills, tags, prose. |
| `src/styles/motion.css` | Hero entrance, reveal, card lift, cursor, nav blur, reduced-motion overrides. |
| `src/scripts/motion.js` | Reveal observer, cursor, nav scroll state. Everything is gated on `prefers-reduced-motion`. |
| `src/site.ts` | Name, contact links, CV path, form endpoint, nav items. |
| `src/content.config.ts` | Collection schemas. |
| `src/pages/` | One file per route. Page copy for About, Experience and Connect lives in these files. |
| `public/fonts/` | Self-hosted Young Serif and Bricolage Grotesque, latin subset. |
| `public/og.png` | Square Open Graph image (the avatar on butter). |

## Checks that were run

Lighthouse on the production build, mobile emulation: home, a case study, Experience and Connect all score 100 on performance, accessibility, best practices and SEO. No horizontal overflow at 320, 375 or 1280 on any page. One `h1` per page and heading order intact. Reduced motion verified by emulation: no reveal classes, no cursor, no hero animation.
