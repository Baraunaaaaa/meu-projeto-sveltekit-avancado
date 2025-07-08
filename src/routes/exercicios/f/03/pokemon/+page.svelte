<script>
  export let data;
  let termoBusca = '';
  let tipoSelecionado = data.tipoSelecionado || '';
  
  $: totalPaginas = Math.ceil(data.total / data.porPagina);
  
  function aplicarFiltros() {
    const params = new URLSearchParams();
    if (termoBusca) params.set('busca', termoBusca);
    if (tipoSelecionado) params.set('tipo', tipoSelecionado);
    params.set('pagina', '1');
    window.location.search = params.toString();
  }
</script>

<div class="container">

  <div class="barra-busca">
    <div class="grupo-busca">
      <input
        type="text"
        bind:value={termoBusca}
        placeholder="Buscar Pokémon por nome..."
        on:keydown={(e) => e.key === 'Enter' && aplicarFiltros()}
      />
      <button on:click={aplicarFiltros}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
    
    <select bind:value={tipoSelecionado} on:change={aplicarFiltros}>
      <option value="">Todos os Pokémons</option>
      <option value="fire">Fogo</option>
      <option value="water">Água</option>
      <option value="grass">Planta</option>
    </select>
  </div>

  <div class="lista-pokemons">
    {#each data.pokemons as pokemon}
      <div class="pokemon-item">
        <a href={`/03/pokemon/${pokemon.nome}`}>
          <img src={pokemon.imagem} alt={pokemon.nome} loading="lazy">
          <span>{pokemon.nome}</span>
        </a>
      </div>
    {/each}
  </div>

  <div class="paginacao">
    <a
      href={`?pagina=${data.paginaAtual - 1}${termoBusca ? `&busca=${termoBusca}` : ''}${tipoSelecionado ? `&tipo=${tipoSelecionado}` : ''}`}
      class:desabilitado={data.paginaAtual <= 1}
    >
      Anterior
    </a>
    
    <span>Página {data.paginaAtual} de {totalPaginas}</span>
    
    <a
      href={`?pagina=${data.paginaAtual + 1}${termoBusca ? `&busca=${termoBusca}` : ''}${tipoSelecionado ? `&tipo=${tipoSelecionado}` : ''}`}
      class:desabilitado={data.paginaAtual >= totalPaginas}
    >
      Próximo
    </a>
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .barra-busca {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  .grupo-busca {
    display: flex;
    flex-grow: 1;
  }
  
  .grupo-busca input {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
  }
  
  .grupo-busca button {
    padding: 0 15px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  select {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 150px;
  }
  
  .lista-pokemons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .pokemon-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s;
  }
  
  .pokemon-item:hover {
    transform: translateY(-3px);
  }
  
  .pokemon-item a {
    display: block;
    text-decoration: none;
    color: #333;
    text-align: center;
    padding: 15px 10px;
  }
  
  .pokemon-item img {
    width: 100%;
    height: 96px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  .pokemon-item span {
    display: block;
    font-weight: 500;
    text-transform: capitalize;
  }
  
  .paginacao {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .paginacao a {
    padding: 8px 16px;
    border: 1px solid #3b82f6;
    border-radius: 4px;
    color: #3b82f6;
    text-decoration: none;
  }
  
  .paginacao a.desabilitado {
    opacity: 0.5;
    pointer-events: none;
  }
</style>