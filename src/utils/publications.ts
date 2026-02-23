import type { CollectionEntry } from 'astro:content';

export function getSortedPublications(
    items: CollectionEntry<'publications'>[]
): CollectionEntry<'publications'>[] {
    return [...items].sort((a, b) => {
        const da = a.data.date ? new Date(a.data.date).getTime() : 0;
        const db = b.data.date ? new Date(b.data.date).getTime() : 0;
        return db - da;
    });
}
