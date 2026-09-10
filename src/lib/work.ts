import type { CollectionEntry } from 'astro:content';

// The visible label for each work type. Change wording here, nowhere else.
export const WORK_TYPE_LABEL: Record<CollectionEntry<'work'>['data']['type'], string> = {
  'case-study': 'Case study',
  project: 'Project',
};

export const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;
