<script>
    export let form;
  </script>
  
  <form method="POST">
    <input
      name="nome"
      type="text"
      placeholder="Nome do produto"
      value={form?.nome || ''}
      required
    />
  
    <input
      name="preco"
      type="number"
      step="0.01"
      placeholder="Preço"
      value={form?.preco || ''}
      required
    />
  
    <input
      name="quantidade"
      type="number"
      step="1"
      placeholder="Quantidade em estoque"
      value={form?.quantidade || ''}
      required
    />
  
    <button>Cadastrar</button>
  </form>
  
  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}
  
  {#if form?.sucesso}
    <p style="color: green">Produto {form.produto} cadastrado com sucesso!</p>
  {/if}
  