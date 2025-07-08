
export async function load({ params }) {
    const name = params.name;
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      throw new Error(`Não foi possível carregar o Pokémon ${name}`);
    }
  
    const data = await res.json();
  
    return {
      pokemon: {
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map(t => t.type.name),
        abilities: data.abilities.map(a => a.ability.name)
      }
    };
  }