<script>
    export let form;
  </script>
  
  <form method="POST">
    <label>
      Nome no cartão:
      <input name="nome" value={form?.nome || ''} />
      {#if form?.errors?.nome}
        <p style="color: red">{form.errors.nome}</p>
      {/if}
    </label>
  
    <label>
      Número do cartão:
      <input name="numero" inputmode="numeric" maxlength="16" value={form?.numero || ''} />
      {#if form?.errors?.numero}
        <p style="color: red">{form.errors.numero}</p>
      {/if}
    </label>
  
    <label>
      Data de validade (MM/AA):
      <input name="validade" placeholder="MM/AA" value={form?.validade || ''} />
      {#if form?.errors?.validade}
        <p style="color: red">{form.errors.validade}</p>
      {/if}
    </label>
  
    <label>
      CVV:
      <input name="cvv" inputmode="numeric" maxlength="3" value={form?.cvv || ''} />
      {#if form?.errors?.cvv}
        <p style="color: red">{form.errors.cvv}</p>
      {/if}
    </label>
  
    <label>
      Plano:
      <select name="plano">
        <option disabled selected={!form?.plano}>Selecione um plano</option>
        <option value="basico" selected={form?.plano === 'basico'}>Plano Bit (básico)</option>
        <option value="intermediario" selected={form?.plano === 'intermediario'}>Plano Byte (intermediário)</option>
        <option value="premium" selected={form?.plano === 'premium'}>Plano Quantum (premium)</option>
      </select>
      {#if form?.errors?.plano}
        <p style="color: red">{form.errors.plano}</p>
      {/if}
    </label>
  
    <button>Pagar</button>
  </form>
  