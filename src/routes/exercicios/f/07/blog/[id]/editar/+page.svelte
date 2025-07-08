<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';

  // Pegando dados preenchidos ou valores fictícios como padrão
  let id = $page.params.id;
  let titulo = $page.form?.titulo ?? 'Título padrão';
  let conteudo = $page.form?.conteudo ?? 'Conteúdo padrão do artigo';

  // Acesso à mensagem de erro ou sucesso retornadas do backend
  $: erro = $page.form?.error;
  $: sucesso = $page.form?.message;
</script>

<h1>Editar Artigo</h1>

<!-- Formulário com três ações possíveis: publicar, salvar como rascunho, excluir -->
<form method="POST" use:enhance>

  <!-- Campo oculto com o ID do artigo -->
  <input type="hidden" name="id" value={id} />

  <!-- Campo de texto para o título -->
  <label>
    Título:
    <input type="text" name="titulo" bind:value={titulo} />
  </label>

  <!-- Área de texto para o conteúdo -->
  <label>
    Conteúdo:
    <textarea name="conteudo" rows="10" bind:value={conteudo}></textarea>
  </label>

  <!-- Botões de ação com nomes diferentes (ação nomeada) -->
  <div style="margin-top: 1em;">
    <button name="action" value="publicar">Publicar</button>
    <button name="action" value="salvarRascunho">Salvar Rascunho</button>
    <button name="action" value="excluir">Excluir Artigo</button>
  </div>

  <!-- Mensagens de erro ou sucesso -->
  {#if erro}
    <p style="color: red;">{erro}</p>
  {/if}

  {#if sucesso}
    <p style="color: green;">{sucesso}</p>
  {/if}
</form>