import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Litigation and expert work. One file per chemical or issue.
// Keep these at the level of chemical, medium, and gist. No client or party names.
const litigation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/litigation' }),
  schema: z.object({
    chemical: z.string(),
    medium: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    group: z.enum(['main', 'other']).default('main'),
  }),
});

// Software and AI projects. One file per project; the body becomes the detail page.
const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Dashboards and data tools', 'Machine learning', 'AI and language models']),
    status: z.enum(['Live', 'Client only', 'In development']),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(100),
    detail: z.boolean().default(false), // true = body is rendered on its own page
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { litigation, software, blog };
