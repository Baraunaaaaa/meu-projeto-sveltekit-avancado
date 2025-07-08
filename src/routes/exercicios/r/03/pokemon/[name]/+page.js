/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    if (!res.ok) {
      throw new Error("Pokémon não encontrado");
    }
  
    const pokemon = await res.json();
  
    return {
      pokemon: {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((t) => t.type.name),
        abilities: pokemon.abilities.map((a) => a.ability.name)
      }
    };
  }