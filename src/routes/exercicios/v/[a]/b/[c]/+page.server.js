export function load({ params, url }) {
    const w = params.a;
    const x = params.c;
    const y = url.searchParams.get('d');
    const z = url.searchParams.get('e');
 
    return { w, x, y, z };
}