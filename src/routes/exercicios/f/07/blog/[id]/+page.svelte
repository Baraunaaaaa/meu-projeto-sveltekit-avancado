<script>
  import { page } from '$app/stores';

  const status = $page.url.searchParams.get('status');
</script>

<h1>Título do Artigo</h1>
<p>Este é o conteúdo do artigo publicado.</p>

{#if status === 'artigo_publicado'}
  <p style="color: green;">Artigo publicado com sucesso!</p>
{/if}