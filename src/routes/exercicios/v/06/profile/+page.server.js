/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    const email = url.searchParams.get('email');
    const usuario = url.searchParams.get('usuario');
    return { email, usuario };
  }
  