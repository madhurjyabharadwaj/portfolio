import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file in src/content/work = one tile on the home page and /work,
// plus one page at /work/<filename>. Nothing else needs to change.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),                       // the question headline
    name: z.string(),                        // Entalpic, TeamZero, ...
    type: z.enum(['case-study', 'project']), // drives the tile label
    order: z.number(),                       // lower comes first
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    deck: z.string().optional(),             // path to a downloadable deck, if any
  }),
});

// Smaller pieces listed under "Also built" on /work. A file here adds a list
// entry, not a page.
const alsoBuilt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/also-built' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { work, alsoBuilt };
