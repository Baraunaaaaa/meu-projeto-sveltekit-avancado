<script>
  import { page } from '$app/stores';
  const data = $page.form?.dataEnviada;
</script>

<h1>Resultado da Data</h1>

{#if data}
  <p>Você enviou a data: {data}</p>
{:else if $page.form}
  <p style="color:red;">Preencha o formulário!</p>
{/if}

<a href="/06/ifms/a">Voltar</a>
