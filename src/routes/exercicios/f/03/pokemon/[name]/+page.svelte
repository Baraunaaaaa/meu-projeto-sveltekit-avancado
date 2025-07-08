<script>
  export let data;
  
  $: pokemon = data?.pokemon;
  $: erro = data?.mensagem;
</script>

{#if erro}
  <div class="card erro-card">
    <p>{erro}</p>
    <a href="/03/pokemon" class="btn voltar">Voltar à lista</a>
  </div>
{:else if pokemon}
  <div class="card pokemon-card">
    <img src={pokemon.imagem} alt={pokemon.nome} class="pokemon-img" />
    <h1>{pokemon.nome}</h1>
    <p><strong>Altura:</strong> {pokemon.altura}m</p>
    <p><strong>Peso:</strong> {pokemon.peso}kg</p>
    <p><strong>Tipos:</strong> {pokemon.tipos.join(', ')}</p>
    <div class="card-footer">
      <a href="/03/pokemon" class="btn voltar">Voltar</a>
    </div>
  </div>
{:else}
  <p class="loading">Carregando...</p>
{/if}

<style>
  .card {
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    max-width: 400px;
    margin: 30px auto;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    position: relative;
  }

  .pokemon-img {
    display: block;
    margin: 0 auto 15px;
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  .btn {
    padding: 8px 16px;
    background-color: #4e73df;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
  }

  .btn:hover {
    background-color: #375ab5;
  }

  .erro-card {
    color: #dc3545;
    border-color: #dc3545;
  }

  .loading {
    text-align: center;
    font-style: italic;
    margin-top: 30px;
  }

  .card-footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .voltar {
    background-color: #6c757d;
  }

  .voltar:hover {
    background-color: #5a6268;
  }
</style>
