export async function load({ fetch , url }) {
  const idade = url.searchParams.get('idade');
  let link = `https://dummyjson.com/users`
  if (idade) link += `/filter?key=age&value=${idade}`
    const res = await fetch(`https://dummyjson.com/users`);
    const users = await res.json();
    return {users}; 
  }