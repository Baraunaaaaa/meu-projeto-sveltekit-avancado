<script>
  import { page } from '$app/stores';
  const numero = $page.form?.numero;
</script>

<h1>Formulário</h1>

<form method="POST" action="/06/ifms/a">
  <label>
    Número:
    <input name="umnumero" type="number" placeholder="Digite um número" />
  </label><br />

  <label>
    Texto:
    <input name="umtexto" type="text" placeholder="Digite um texto" />
  </label><br />

  <label>
    Data:
    <input name="umadata" type="date" />
  </label><br />

  <button>Enviar 1</button>
  <button formaction="/06/ifms/b">Enviar 2</button>
  <button formaction="/06/ifms/c">Enviar 3</button>
</form>

<!-- Resultado exibido após envio -->
{#if numero}
  <p>Você enviou o número: {numero}</p>
{:else if $page.form}
  <p style="color:red;">Preencha o formulário!</p>
{/if}

<a href="/06/ifms/a">Voltar</a>