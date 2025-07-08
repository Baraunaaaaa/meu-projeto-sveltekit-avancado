<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }

  form {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input[type="number"], input[type="checkbox"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="checkbox"] {
    width: auto;
    margin-top: 0;
  }

  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
  }

  button:hover {
    background-color: #218838;
  }

  a {
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }

  p {
    color: red;
    font-weight: bold;
  }
</style>

<script>
  let { form } = $props();
</script>

<form method="POST" action="/solicitarPessoal">
  <label>
    Renda Mensal: <input name="renda" type="number" step="0.01" value={form?.renda ?? ''} required />
  </label>
  <label>
    Score de Crédito: <input name="score" type="number" value={form?.score ?? ''} required />
  </label>
  <label>
    Possui Imóvel para Garantia: <input name="imovel" type="checkbox" />
  </label>
  <label>
    Valor do Veículo a ser Financiado: <input name="valorVeiculo" type="number" step="0.01" value={form?.valorVeiculo ?? ''} />
  </label>
  
  
  <a href="/07/emprestimo/pessoal">
    <button type="button">Solicitar Empréstimo Pessoal</button>
  </a>
  <a href="/07/emprestimo/imobiliario">
    <button type="button">Solicitar Empréstimo Imobiliário</button>
  </a>
  <a href="/07/emprestimo/automotivo">
    <button type="button">Solicitar Empréstimo Automotivo</button>
  </a>
</form>

{#if form && form.error != undefined}
  <p>{form.error}</p>
{/if}
