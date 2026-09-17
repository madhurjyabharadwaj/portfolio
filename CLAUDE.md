# CLAUDE.md

Working notes for this repo. [README.md](README.md) is the human-facing guide (deploy steps, how to add a piece of work); this file is the context a new session needs before touching anything.

## Project

Madhurjya Bharadwaj's personal portfolio. He is a Product Manager, and this site is what he sends to hiring managers instead of a PDF. It has to load fast, read well on a phone, and make someone want to open a case study.

- **Live:** https://portfolio-olive-seven-27.vercel.app (production, deploys on push to `main`)
- **Repo:** https://github.com/madhurjyabharadwaj/portfolio
- **Source copy:** `D:\Downloads\portfolio-content-v5.md` is the approved wording. Later rounds were agreed in chat, so the site is ahead of that file in places.

## Stack

| Choice | Note |
|---|---|
| Astro 5, `output: 'static'` | No SSR. `build.format: 'file'`, so routes build as `/about.html` and Vercel's `cleanUrls` serves them at `/about`. |
| Plain CSS | No Tailwind, no CSS-in-JS, no component library. Scoped `<style>` blocks per component, three shared stylesheets. |
| Vanilla JS | Two small scripts. No animation library. |
| Content collections | Markdown drives the work section. |
| Dependencies | Exactly two: `astro` and `sharp`. Keep it that way; say what and why before adding anything. |
| Node | Installed at `C:\Program Files\nodejs\node.exe`. Not always on the Bash tool's PATH; call it by full path or use PowerShell. |

## Structure

```
src/
  pages/            one file per route
    index.astro     hero, card menu, scorecard, #roles, #approach, #toolkit, #work
    about.astro     About: bio, education, "How I create leverage"
    experience.astro  four roles on a timeline rail, each as Problem/Action/Product/Outcome
    work/index.astro  all work cards plus "Also built"
    work/[slug].astro one page per markdown file
    connect.astro   contact details and the Formspree form
    sitemap.xml.ts, robots.txt.ts   generated from SITE_URL
  content/work/     one .md per case study or project
  content/also-built/  smaller pieces: a card, no page
  components/       Nav, Footer, WorkCard
  layouts/Base.astro   head, meta, skip link, ambient layer, script tags
  lib/work.ts       type labels and the sort helper
  site.ts           name, contact links, CV path, form endpoint, nav items
  styles/           tokens.css, base.css, motion.css
  scripts/          motion.js, nav.js
  assets/           avatar, work covers, video posters (processed by Astro)
public/             fonts, videos, decks, CV, og.png, favicon (served as-is)
```

Routes: `/`, `/about`, `/experience`, `/work`, `/work/[slug]`, `/connect`.

## Design decisions

**Palette** lives in `tokens.css` and nowhere else. Ink `#141b3d`, slate `#3c4460`, muted `#5b6280`, cobalt `#2748f5`, butter `#ffd23f`, raspberry `#c7264f`, on a frost ground `#f3f5fb` so white surfaces read as cards. Colour is allocated, not decorative: each of the four menu cards owns one, and that colour returns as the rule under that page's title.

**One typeface.** Bricolage Grotesque, variable, self-hosted as a single woff2. Display and body differ by weight and size, not by family. An earlier round used Bodoni Moda for display and it was rejected as hard to read, so do not reintroduce a second face without being asked. `font-variation-settings: 'opsz' 32` is pinned on headings to stop the face turning condensed at large sizes.

**Avoid a page of identical cards.** The four role blocks are one panel divided by hairlines. The scorecard is a strip between two rules. The principles are a list with small diamond markers. Only the menu and the work cards are actual cards.

**Motion is additive.** Content is complete without JavaScript: the reveal works by JS adding a hidden class and then removing it, never by hiding things in base CSS. Everything is off under `prefers-reduced-motion`. `motion.js` holds the nav blur state, scroll reveal, scorecard count-up, ambient light and the custom cursor; `nav.js` holds the mobile menu and the section spy. Scroll-linked effects use native scroll-driven animations behind `@supports (animation-timeline: ...)` and degrade to the finished state elsewhere.

**Browser surfaces are themed**: selection, caret, scrollbar, focus ring.

**Accessibility floor**, checked rather than assumed: body text at 4.5:1 or better, visible focus on everything focusable, one `h1` per page with headings in order, meaningful alt text, real `<nav>` and `<main>`.

## Conventions

- **The copy is his.** Use it verbatim. Do not rewrite, do not invent sections, do not fill gaps with placeholder text. If something is missing, ask. When you do draft wording, say so plainly in the recap so he can edit it.
- **Do not echo other people's sites.** Several sections were rebuilt because the wording matched the reference screenshots too closely.
- **Keep claims tool-neutral.** "I'll write the SQL" was cut for exactly this reason. Tools belong in the toolkit list, not in prose.
- **Do not repeat across pages.** The home roles, the home principles and About's "How I create leverage" must each say something different.
- **Adding work is a content change**, never a layout change: one markdown file plus a cover image. Frontmatter reference is in the README.
- **One source of truth**: `SITE_URL` in `astro.config.mjs` drives canonical links, Open Graph, `robots.txt` and `sitemap.xml`. Contact details and nav live in `src/site.ts`.
- **Verify before reporting.** Build, serve the production build, screenshot at desktop and phone widths, and check the live URL after deploying. Do not claim a score or a fix without the output.
- **Pushing to `main` publishes.** Say so, and confirm first for anything outward-facing.

## Run and deploy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves dist/, use this for Lighthouse
```

Vercel is connected to the GitHub repo. Push to `main` and production updates in about a minute. Other branches get preview URLs, which sit behind Vercel Authentication until that is turned off in the project's Deployment Protection settings. `vercel.json` sets clean URLs and cache headers.

Screenshots in past sessions were taken with a small DevTools-protocol script in the session scratchpad driving headless Edge, because the Browser pane was unreliable for full-page and mobile widths. The scratchpad does not survive between sessions, so expect to rewrite it.

## Known issues

- **Videos have no captions.** All three launch videos carry sound. Transcripts have been requested but not supplied.
- **Entalpic permission is unconfirmed.** His own content file said to confirm the client is happy for the deck to be public. The deck is live minus its final page, a third-party stakeholder logo map that he asked to cut. He has never confirmed the permission itself in writing.
- **No custom domain yet.** `SITE_URL` points at the Vercel address. When a domain is bought, change that one line, or link previews break.
- **Lighthouse on this machine swings between 85 and 99** depending on load. Compare builds interleaved and take a median; a single run means nothing. On quiet runs every page scores 99 or 100 across all four categories.
- **The dev server can serve stale scoped CSS** after edits. If a change is not showing, restart it before debugging the CSS.
- **Git is set to `autocrlf=true`** while `.gitattributes` forces LF, so every commit prints CRLF warnings. Harmless, but noisy.
- **Heredocs in the Bash tool choke on apostrophes** in prose. Write patch scripts to a file with the Write tool and run them instead.
- **Headless browsers can leak.** If screenshots start failing with "no debug target", kill stray `msedge` processes.

## Next steps

Nothing is in flight. Open items, roughly in order of value:

1. Buy the domain and point it at Vercel, then update `SITE_URL`.
2. Caption the three launch videos once transcripts exist.
3. Confirm the Entalpic permission, or pull the deck download.
4. The CV at `public/cv/` still says Apprentice and Intern while the site says Product Manager and Data Product Owner. He was told; it is his call.
5. `astro check` is not installed. Offer it if type checking would help.
