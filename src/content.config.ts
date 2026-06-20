import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    lang: z.enum(['en', 'zh']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
