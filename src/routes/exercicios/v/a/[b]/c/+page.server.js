export function load({ params, url }) {
    const b = params.b;
    const d = url.searchParams.get('d');
    const e = url.searchParams.get('e');
   
    return { b, d, e };
  }