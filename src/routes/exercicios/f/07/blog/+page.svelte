<script>
  import { page } from '$app/stores';
  const status = $page.url.searchParams.get('status');
</script>

<h1>Blog</h1>

{#if status === 'artigo_excluido'}
  <p style="color: green;">Artigo excluído com sucesso.</p>
{/if}

<ul>
  <li><a href="/07/blog/123/editar">Editar artigo 123</a></li>
  <li><a href="/07/blog/456/editar">Editar artigo 456</a></li>
</ul>