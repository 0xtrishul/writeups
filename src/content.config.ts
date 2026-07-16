import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  // load every markdown file under src/content/writeups
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    platform: z.string().optional(),
    draft: z.boolean().default(false),
    // dev-log series grouping — both optional, so existing posts are untouched
    series: z.string().optional(), // slug that ties parts together, e.g. "padasentry"
    part: z.number().optional(),   // ordering within a series (1, 2, 3...)
  }),
});

export const collections = { writeups };
