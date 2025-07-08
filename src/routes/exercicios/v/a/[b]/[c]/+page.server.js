export function load({ params, url }) {
    const x = params.b;
    const y = params.c;
    const z = url.searchParams.get('d');
 
    return { x, y, z };
}