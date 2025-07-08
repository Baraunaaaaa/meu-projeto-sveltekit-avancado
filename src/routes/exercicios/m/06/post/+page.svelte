<script>
  let { form } = $props();
</script>
 
<form method="POST">
  <input name="email" type="email" placeholder="E-mail de usuário" value={form?.email || ''} required />
  <input name="senha" type="password" placeholder="Senha" required />
  <button>Entrar</button>
</form>
 
{#if form?.error}
  <p style="color: red">{form.error}</p>
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
  