<script>
    export let form;
  </script>
  
  <form method="POST">
    <input name="mensagem" placeholder="Digite uma mensagem" value={form?.mensagem || ''}>
    <button>Enviar</button>
  </form>
  
  {#if form?.error}
    <p style="color:red">{form.error}</p>
  {:else if form?.mensagem}
    <p style="color:green">Mensagem recebida: {form.mensagem}</p>
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
      background-color: #00b894;
      color: white;
      border: none;
      padding: 0.6rem;
      border-radius: 6px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #55efc4;
    }
  </style>
  