<script>
  export let form;
</script>

<style>
  .container {
    min-height: 100vh;
    background: url('/IMG_0793-scaled-1.jpg') no-repeat center center fixed; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  form {
    background-color: rgba(255, 255, 255, 0.9);
    max-width: 400px;
    width: 100%;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #222;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.6rem 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 0.7rem;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #0056b3;
  }

  p {
    max-width: 400px;
    margin: 1rem auto;
    font-weight: bold;
    text-align: center;
  }
  p[style*="red"] {
    color: #b00020;
  }
  p[style*="green"] {
    color: #2e7d32;
  }
</style>

<div class="container">
  <form method="POST">
    <h2>Cadastro de Produto</h2>
    <input name="nome" type="text" placeholder="Nome do produto" value={form?.nome || ''} />
    <input name="preco" type="number" step="0.01" placeholder="Preço" value={form?.preco || ''} />
    <input name="quantidade" type="number" placeholder="Quantidade em estoque" value={form?.quantidade || ''} />
    <button type="submit">Cadastrar</button>

    {#if form?.error}
      <p style="color: red;">{form.error}</p>
    {/if}

    {#if form?.sucesso}
      <p style="color: green;">Produto {form.produto} cadastrado com sucesso!</p>
    {/if}
  </form>
</div>
