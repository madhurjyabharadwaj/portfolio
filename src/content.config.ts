import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file in src/content/work = one card on the home page and /work,
// plus one page at /work/<filename>. Nothing else needs to change.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                       // the question headline
      subtitle: z.string(),                    // one line under the title
      name: z.string(),                        // Entalpic, TeamZero, ...
      type: z.enum(['case-study', 'project']), // drives the label
      category: z.string(),                    // "GTM strategy", "Marketplace", ...
      year: z.number(),
      order: z.number(),                       // lower comes first; also the card number
      problem: z.string(),                     // quoted problem statement on the card
      role: z.string(),
      outcome: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image(),                          // card and page image
      coverAlt: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      // Files offered for download at the end of the page: deck, model, anything.
      downloads: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      // A short launch video, shown beside the cover and flagged on the card.
      video: z
        .object({
          src: z.string(),                     // file in public/videos/
          poster: image(),                     // still frame, used until play
          alt: z.string(),
          seconds: z.number(),
        })
        .optional(),
    }),
});

// Smaller pieces listed under "Also built" on /work. Same card, no page.
const alsoBuilt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/also-built' }),
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    order: z.number(),
    problem: z.string(),
    role: z.string(),
    outcome: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { work, alsoBuilt };
