<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';

  let renda = '';
  let score = '';
  let possuiImovel = false;
  let valorVeiculo = '';

  // Acesso ao status de falha (fail) vindo do backend
  $: erro = $page.form?.erro;
</script>

<h1>Solicitação de Empréstimo</h1>

<!-- Formulário genérico -->
<form method="POST" use:enhance>
  <label>
    Renda mensal:
    <input type="number" name="renda" bind:value={renda} required />
  </label>

  <label>
    Score de crédito:
    <input type="number" name="score" bind:value={score} required />
  </label>

  <label>
    Possui imóvel para garantia?
    <input type="checkbox" name="possuiImovel" bind:checked={possuiImovel} />
  </label>

  <label>
    Valor do veículo:
    <input type="number" name="valorVeiculo" bind:value={valorVeiculo} />
  </label>

  <div style="margin-top: 1em">
    <button name="action" value="solicitarPessoal">Solicitar Empréstimo Pessoal</button>
    <button name="action" value="solicitarImobiliario">Solicitar Empréstimo Imobiliário</button>
    <button name="action" value="solicitarAutomotivo">Solicitar Empréstimo Automotivo</button>
  </div>

  {#if erro}
    <p style="color: red;">{erro}</p>
  {/if}
</form>
