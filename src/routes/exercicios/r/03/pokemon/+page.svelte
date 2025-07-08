<script>
  export let data;
  const { pokemons, offset, limit, total } = data;

  const prevOffset = Math.max(offset - limit, 0);
  const nextOffset = offset + limit;
</script>

<div class="row">
  {#each pokemons as p}
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100">
        <img src={p.image} alt={p.name} class="card-img-top" />
        <div class="card-body">
          <a href={`/03/pokemon/${p.name}`} class="stretched-link text-decoration-none">
            <h5 class="card-title text-capitalize">{p.name}</h5>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="d-flex justify-content-between my-4">
  {#if offset > 0}
    <a href="?offset={prevOffset}" class="btn btn-primary">Anterior</a>
  {/if}

  {#if nextOffset < total}
    <a href="?offset={nextOffset}" class="btn btn-primary ms-auto">Próximo</a>
  {/if}
</div>
