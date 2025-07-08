<script>
  import { page } from '$app/stores';

  // Dados do formulário vindos da resposta do backend
  const erro = $page.form?.error;
  const sucesso = $page.form?.sucesso;
  const nome = $page.form?.nome ?? '';
  const preco = $page.form?.preco ?? '';
  const quantidade = $page.form?.quantidade ?? '';
  const produto = $page.form?.produto ?? '';
</script>

<h1>Cadastro de Produto</h1>

<form method="POST">
  <label>
    Nome do Produto:
    <input type="text" name="nome" value={nome} />
  </label><br />

  <label>
    Preço:
    <input type="number" step="0.01" name="preco" value={preco} />
  </label><br />

  <label>
    Quantidade em Estoque:
    <input type="number" name="quantidade" value={quantidade} />
  </label><br />

  <button type="submit">Cadastrar</button>
</form>

{#if erro}
  <p style="color: red;">{erro}</p>
{/if}

{#if sucesso}
  <p style="color: green;">Produto {produto} cadastrado com sucesso!</p>
{/if}
