export async function load({ params }) {
  const nomePokemon = params.name.toLowerCase();
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);

  if (!resposta.ok) {
    return { status: 404 };
  }

  const dados = await resposta.json();
  
  return {
    pokemon: {
      nome: dados.name,
      imagem: dados.sprites.front_default,
      altura: (dados.height / 10).toFixed(1),
      peso: (dados.weight / 10).toFixed(1),
      tipos: dados.types.map(t => t.type.name)
    }
  };
}