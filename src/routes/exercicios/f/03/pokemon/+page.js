export async function load({ url }) {
  const POKEMONS_POR_PAGINA = 12;
  const paginaAtual = Number(url.searchParams.get('pagina')) || 1;
  const termoBusca = url.searchParams.get('busca')?.toLowerCase().trim() || '';
  const tipoSelecionado = url.searchParams.get('tipo')?.toLowerCase().trim() || '';
  const offset = (paginaAtual - 1) * POKEMONS_POR_PAGINA;

    const responseTipos = await fetch('https://pokeapi.co/api/v2/type');
  const { results: tipos } = await responseTipos.json();

  try {

    if (tipoSelecionado) {
      const responseTipo = await fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`);
      const { pokemon: pokemonsDoTipo } = await responseTipo.json();
      
      const pokemonsFiltrados = pokemonsDoTipo.slice(offset, offset + POKEMONS_POR_PAGINA).map(item => {
        const id = item.pokemon.url.split('/').filter(Boolean).pop();
        return {
          nome: item.pokemon.name,
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          id
        };
      });

      return {
        pokemons: pokemonsFiltrados,
        total: pokemonsDoTipo.length,
        paginaAtual,
        porPagina: POKEMONS_POR_PAGINA,
        tipos,
        tipoSelecionado
      };
    }
    if (termoBusca) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${termoBusca}`);
      
      if (!response.ok) {
        return {
          pokemons: [],
          total: 0,
          paginaAtual: 1,
          porPagina: POKEMONS_POR_PAGINA,
          tipos,
          erro: 'Pokémon não encontrado'
        };
      }

      const pokemon = await response.json();
      return {
        pokemons: [{
          nome: pokemon.name,
          imagem: pokemon.sprites.front_default,
          id: pokemon.id
        }],
        total: 1,
        paginaAtual: 1,
        porPagina: POKEMONS_POR_PAGINA,
        tipos
      };
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${POKEMONS_POR_PAGINA}`);
    const dados = await response.json();

    const pokemons = dados.results.map(pokemon => {
      const id = pokemon.url.split('/').filter(Boolean).pop();
      return {
        nome: pokemon.name,
        imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        id
      };
    });

    return {
      pokemons,
      total: dados.count,
      paginaAtual,
      porPagina: POKEMONS_POR_PAGINA,
      tipos
    };
  } catch {
    return {
      pokemons: [],
      total: 0,
      paginaAtual: 1,
      porPagina: POKEMONS_POR_PAGINA,
      tipos,
      erro: 'Erro ao carregar os Pokémons'
    };
  }
}