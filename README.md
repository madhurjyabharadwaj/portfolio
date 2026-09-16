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
| Formspree endpoint | `formEndpoint` in `src/site.ts`. See "Connecting the contact form" below. |
| Entalpic deck | Upload the cleaned PDF to `public/decks/` and set `deck:` in `src/content/work/entalpic.md` to its path. Remove the `deck:` line to hide the button. |
| CV | Replace `public/cv/Madhurjya-Bharadwaj-CV.pdf` with a newer file of the same name. |

## Connecting the contact form

The form posts to Formspree, which forwards each submission to an inbox. There is no backend and no API key in the repo.

1. Sign up at [formspree.io](https://formspree.io) using `mbharadwajofficial@gmail.com`, and confirm the address from the email they send. Submissions are delivered to the account email.
2. Create a new form. Name it anything, "Portfolio" is fine.
3. Formspree shows an endpoint like `https://formspree.io/f/xdkoqwer`. Copy it.
4. Paste it over the `formEndpoint` value in `src/site.ts`, replacing the whole `PLACEHOLDER` URL.
5. Commit and push. Vercel redeploys and the form goes live.
6. Send yourself a test message from the live site and confirm it arrives.

**Until step 4 is done the form does not render at all.** The Connect page shows a plain email link instead, so nobody can type a message that goes nowhere. That switch is automatic, driven by `isFormConfigured` in `src/site.ts`.

The free tier allows 50 submissions a month, which is ample for a portfolio. The first submission from a new form may need a one-off confirmation click in your inbox, depending on Formspree's current flow.

## Adding work

Create one markdown file in `src/content/work/` and one cover image in `src/assets/work/`. That is the whole change: a card appears on the home page and on `/work`, a page is built at `/work/<filename>`, and if `product: true` is set the "products built" figure on the home page goes up by one.

```markdown
---
title: "The question the piece answers"
subtitle: "One line under the title"
name: "Client or product name"
type: "case-study"          # or "project". Sets the label on the card.
category: "GTM strategy"    # shown next to the label
year: 2026
order: 6                    # lower comes first; also the card number
problem: "The quoted problem statement shown in the highlighted block."
role: "What you did"
outcome: "The key outcome, two or three sentences."
tags: ["Tag one", "Tag two"]
product: true               # counts towards "products built"; omit for analysis work
cover: "../../assets/work/my-piece.png"
coverAlt: "What the image shows, for people who cannot see it."
links:                      # optional, rendered as buttons at the end of the page
  - label: "Repo"
    href: "https://..."
deck: "/decks/file.pdf"     # optional, adds a download button
---

First paragraph is set larger as the lead.

## Sub-headings become h2

Body copy. Blockquotes and inline code are styled.
```

Cover images are 1200 by 900. The current ones are screenshots of the live products in a browser or phone frame, and, for the two analysis pieces, a chart and a diagram built from the numbers in the write-up. Replace any of them by overwriting the file with the same name.

Smaller pieces that need a card but no page go in `src/content/also-built/` with `name`, `subtitle`, `problem`, `role`, `outcome`, `tags`, `links` and `order`. They render under "Also built" on `/work`, and the card links to the first link in the list.

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
| `src/assets/work/` | Cover image for each work card and page, one per markdown file. |
| `src/components/WorkCard.astro` | The rich work card. Whole card is one link. |

## Checks that were run

Lighthouse on the production build, mobile emulation: home, a case study, Experience and Connect all score 100 on performance, accessibility, best practices and SEO. No horizontal overflow at 320, 375 or 1280 on any page. One `h1` per page and heading order intact. Reduced motion verified by emulation: no reveal classes, no cursor, no hero animation.
