<script>
    let { form } = $props();
  </script>
  
  <form method="POST">
    <input name="nome" type="text" placeholder="Nome do usuário" value={form?.nome || ''} required />
    {#if form?.erros[0]}
      <p>{form.erros[0]}</p>
    {/if}
    <br />
    <input name="email" type="email" placeholder="E-mail do usuário" value={form?.email || ''} required />
    {#if form?.erros[1]}
      <p>{form.erros[1]}</p>
    {/if}
    <br />
    <input name="senha" type="password" placeholder="Senha do usuário" value={form?.senha || ''} required />
    {#if form?.erros[2]}
      <p>{form.erros[2]}</p>
    {/if}
    <br />
    <input name="confirmacaosenha" type="password" placeholder="Confirmação de senha" value={form?.confirmacaoSenha || ''} required />
    {#if form?.erros[3]}
      <p>{form.erros[3]}</p>
    {/if}
    <br />
    <input name="nascimento" type="date" required value={form?.nascimento || ''} />
    {#if form?.erros[4]}
      <p>{form.erros[4]}</p>
    {/if}
    <br />
    <button>Cadastrar</button>
  </form>
  
  
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
  