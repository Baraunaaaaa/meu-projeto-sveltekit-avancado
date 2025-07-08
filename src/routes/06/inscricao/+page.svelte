<script>
  import { page } from '$app/stores';

  const form = $page.form;
  const valores = {
    nome: form?.nome ?? '',
    numero: form?.numero ?? '',
    validade: form?.validade ?? '',
    cvv: form?.cvv ?? '',
    plano: form?.plano ?? 'bit'
  };
  const erros = form?.erros ?? {};
</script>

<h1>Pagamento da Inscrição</h1>

<form method="POST">
  <label>
    Nome no cartão:
    <input name="nome" value={valores.nome} />
    {#if erros?.nome}<p style="color:red;">{erros.nome}</p>{/if}
  </label><br />

  <label>
    Número do cartão:
    <input name="numero" maxlength="16" value={valores.numero} />
    {#if erros?.numero}<p style="color:red;">{erros.numero}</p>{/if}
  </label><br />

  <label>
    Validade (MM/AA):
    <input name="validade" placeholder="MM/AA" value={valores.validade} />
    {#if erros?.validade}<p style="color:red;">{erros.validade}</p>{/if}
  </label><br />

  <label>
    Código de segurança (CVV):
    <input name="cvv" maxlength="3" value={valores.cvv} />
    {#if erros?.cvv}<p style="color:red;">{erros.cvv}</p>{/if}
  </label><br />

  <label>
    Plano:
    <select name="plano" bind:value={valores.plano}>
      <option value="bit">Plano Bit (básico)</option>
      <option value="byte">Plano Byte (intermediário)</option>
      <option value="quantum">Plano Quantum (premium)</option>
    </select>
    {#if erros?.plano}<p style="color:red;">{erros.plano}</p>{/if}
  </label><br />

  <button type="submit">Confirmar pagamento</button>
</form>
