<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let data;

  let results = data.pokemons;
  const offset = data.offset;
  const limit = 12;

  let searchName = '';
  let error = '';

  let types = [];
  let selectedType = '';

  onMount(async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    types = data.results;
  });

  async function search() {
    if (searchName.trim() === '') {
      results = data.pokemons;
      error = '';
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`);
      if (!res.ok) throw new Error('Pokémon não encontrado');
      const poke = await res.json();

      results = [{
        name: poke.name,
        image: poke.sprites.front_default || ''
      }];
      error = '';
    } catch (err) {
      results = [];
      error = 'Pokémon não encontrado.';
    }
  }

  async function filterByType() {
    if (!selectedType) {
      results = data.pokemons;
      error = '';
      return;
    }

    const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
    const dataType = await res.json();

    const filtered = dataType.pokemon.slice(0, 100).map(p => {
      const id = p.pokemon.url.split('/').at(-2);
      return {
        name: p.pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      };
    });

    results = filtered;
    error = '';
  }

  function goToPage(newOffset) {
    goto(`?offset=${newOffset}`);
  }
</script>

<input
  type="text"
  bind:value={searchName}
  on:input={search}
  placeholder="Buscar Pokémon pelo nome"
  class="form-control mb-3"
/>

<select bind:value={selectedType} on:change={filterByType} class="form-select mb-3">
  <option value="">Filtrar por tipo</option>
  {#each types as type}
    <option value={type.name}>{type.name}</option>
  {/each}
</select>

{#if error}
  <div class="alert alert-danger">{error}</div>
{/if}

<div class="row">
  {#each results as p}
    <div class="col-md-3 col-sm-6 mb-3">
      <div class="card">
        <img src="{p.image}" alt="{p.name}" class="card-img-top" />
        <div class="card-body">
          <a href="/03/pokemon/{p.name}" class="stretched-link text-decoration-none">
            <h5 class="card-title text-capitalize">{p.name}</h5>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>


{#if !data.search}
  <div class="mt-4">
    {#if data.hasPrev}
      <a href="?offset={data.offset - data.limit}">Anterior</a>
    {/if}

    {#if data.hasNext}
      <a href="?offset={data.offset + data.limit}" style="margin-left: 1rem;">Próximo</a>
    {/if}
  </div>
{/if}