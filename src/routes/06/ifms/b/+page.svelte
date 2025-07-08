<script>
  import { page } from '$app/stores';
  const texto = $page.form?.texto;
</script>

<h1>Resultado do Texto</h1>

{#if texto}
  <p>Você enviou o texto: {texto}</p>
{:else if $page.form}
  <p style="color:red;">Preencha o formulário!</p>
{/if}

<a href="/06/ifms/a">Voltar</a>
