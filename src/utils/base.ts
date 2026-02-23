const rawBase = import.meta.env.BASE_URL.replace(/\/$/, ''); // /vios.science

export function base(path: string = '/'): string {
    if (path === '/') return `${rawBase}/`;
    return `${rawBase}${path.startsWith('/') ? path : `/${path}`}`;
}
