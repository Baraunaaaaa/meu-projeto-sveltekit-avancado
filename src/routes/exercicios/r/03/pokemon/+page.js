/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const limit = 12;
    const offset = parseInt(url.searchParams.get("offset") || "0");
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();
  
    const pokemons = data.results.map((pokemon) => {
      const id = pokemon.url.split("/").at(-2);
      return {
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      };
    });
  
    return {
      pokemons,
      offset,
      limit,
      total: data.count
    };
  }