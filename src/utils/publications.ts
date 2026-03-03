export interface Publication {
    title: string;
    authors: string;
    venue: string;
    date?: string;
    image?: string;
    link?: string;
    code?: string;
    website?: string;
    pdf?: string;
}

export function getSortedPublications(items: Publication[]): Publication[] {
    return [...items].sort((leftPublication, rightPublication) => {
        const leftDateMs = leftPublication.date ? new Date(leftPublication.date).getTime() : 0;
        const rightDateMs = rightPublication.date ? new Date(rightPublication.date).getTime() : 0;
        return rightDateMs - leftDateMs;
    });
}
