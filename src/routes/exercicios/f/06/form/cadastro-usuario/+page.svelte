<script>
  export let form = {};
</script>

<style>
  /* Faz o body ocupar a tela toda com a imagem de fundo */
  :global(body) {
    margin: 0;
    height: 100vh;
    background: url('/image.jpeg') no-repeat center center fixed;
    background-size: cover;
    font-family: Arial, sans-serif;
  }

  /* Container do formulário, com transparência pra destacar */
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);

    max-width: 400px;
    margin: 80px auto;
    color: white;
    text-shadow: 1px 1px 3px black;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    background-color: #FFD700;
    color: black;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
  }

  button:hover {
    background-color: #FFC107;
    transform: scale(1.05);
  }

  .error-messages {
    margin-top: 20px;
    color: #ff6b6b;
    font-weight: bold;
  }
</style>

<div class="form-container">
  <h2>Cadastro de Usuário</h2>
  <form method="POST">
    <input name="nome" type="text" placeholder="Nome de usuário" value={form?.nome || ''} required />
    <input name="email" type="email" placeholder="E-mail" value={form?.email || ''} required />
    <input name="senha" type="password" placeholder="Senha" value={form?.senha || ''} required />
    <input name="confirmacaosenha" type="password" placeholder="Confirmação de senha" value={form?.confirmacaosenha || ''} required />
    <input name="nascimento" type="date" value={form?.nascimento || ''} required />
    <button type="submit">Cadastrar</button>
  </form>

  {#if form?.erros?.length}
    <div class="error-messages">
      {#each form.erros as erro}
        <p>{erro}</p>
      {/each}
    </div>
  {/if}
</div>
