import type { CollectionEntry } from 'astro:content';

export type NewsItemWithDate = CollectionEntry<'news'> & { parsedDate: Date };

export function parseNewsDate(item: CollectionEntry<'news'>): Date {
    if (item.data.date) return item.data.date;

    const match = item.id.match(/^(\d{4}-\d{2}-\d{2})/);
    if (match) return new Date(match[1]);

    return new Date(0);
}

export function getSortedNews(items: CollectionEntry<'news'>[]): NewsItemWithDate[] {
    return items
        .map((item) => ({ ...item, parsedDate: parseNewsDate(item) }))
        .sort((leftItem, rightItem) => rightItem.parsedDate.valueOf() - leftItem.parsedDate.valueOf());
}
