<script>
    export let form;
  </script>
  
  <form method="POST">
    <input name="nome" placeholder="Nome" value={form?.nome || ''}>
    {#if form?.error && form.error.includes('Nome')}
      <p style="color:red">{form.error}</p>
    {/if}
  
    <input name="preco" type="number" step="0.01" placeholder="Preço" value={form?.preco || ''}>
    {#if form?.error && form.error.includes('Preço')}
      <p style="color:red">{form.error}</p>
    {/if}
  
    <input name="quantidade" type="number" placeholder="Quantidade" value={form?.quantidade || ''}>
    {#if form?.error && form.error.includes('Quantidade')}
      <p style="color:red">{form.error}</p>
    {/if}
  
    <button>Cadastrar</button>
  </form>
  
  {#if form?.sucesso}
    <p style="color:green">Produto {form.produto} cadastrado com sucesso!</p>
  {/if}
  
  <style>
    form {
      max-width: 400px;
      margin: 2rem auto;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    label {
      font-weight: bold;
      display: flex;
      flex-direction: column;
    }
  
    input {
      padding: 0.5rem;
      font-size: 1rem;
    }
  
    button {
      background-color: #0984e3;
      color: white;
      border: none;
      padding: 0.6rem;
      border-radius: 6px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #74b9ff;
    }
  </style>
  