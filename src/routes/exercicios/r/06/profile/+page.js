/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    const email = url.searchParams.get('email') || 'Usuário';
    return { email };
  }
  