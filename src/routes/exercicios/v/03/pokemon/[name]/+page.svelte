<script>
    export let data;
    const { pokemon } = data;
  </script>
  
  <div class="card mx-auto mt-4" style="max-width: 400px;">
    <img class="card-img-top p-4" src={pokemon.image} alt={pokemon.name} />
  
    <div class="card-body text-center">
      <h2 class="card-title text-capitalize">{pokemon.name}</h2>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
  
      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
  
      <a href="/03/pokemon" class="btn btn-primary mt-3">Voltar</a>
    </div>
  </div>