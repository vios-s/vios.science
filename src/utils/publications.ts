export interface Publication {
    title: string;
    authors: string;
    venue: string;
    date?: string;
    image?: string;
    link?: string;
    code?: string;
    website?: string;
}

export function getSortedPublications(items: Publication[]): Publication[] {
    return [...items].sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da;
    });
}
