<script>
  let { data } = $props();
  console.log("melancia");
</script>

<h2>Usuários cadastrados</h2>
<ul>
  {#each data.usuarios as usuario}
      <li><strong>{usuario.name}:</strong> {usuario.email}</li>
  {/each}
</ul>