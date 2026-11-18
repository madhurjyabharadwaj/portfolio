import type { CollectionEntry } from 'astro:content';

// The visible label for each work type. Change wording here, nowhere else.
export const WORK_TYPE_LABEL: Record<CollectionEntry<'work'>['data']['type'], string> = {
  'case-study': 'Case study',
  project: 'Project',
};

// The intro to Product Teardowns, on /teardowns and on the home page.
export const TEARDOWNS_INTRO =
  'I take products I use and pull them apart: what they do well, where people get stuck, and what I would change first, with how I would know it worked.';

export const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;
