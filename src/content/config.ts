import { defineCollection, z } from 'astro:content';

const team = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        role: z.string().optional(),
        subtitle: z.string().optional(),
        profile: z.string().optional(),
        order: z.number().optional().default(999),
        linkedin: z.string().url().optional().or(z.literal('')),
        scholar: z.string().url().optional().or(z.literal('')),
        twitter: z.string().url().optional().or(z.literal('')),
        github: z.string().url().optional().or(z.literal('')),
        CV: z.string().optional(),
        collection: z.string().optional(),
        permalink: z.string().optional(),
    })
});

const tutorials = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        summary: z.string().optional(),
        date: z.coerce.date().optional(),
        teaser: z.string().optional(),
        author: z.string().optional(),
        permalink: z.string().optional(),
    }).catchall(z.any())
});

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        permalink: z.string().optional(),
    }).catchall(z.any())
});

const news = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date().optional(),
        permalink: z.string().optional(),
    }).catchall(z.any())
});

export const collections = {
    team,
    tutorials,
    pages,
    news
};
