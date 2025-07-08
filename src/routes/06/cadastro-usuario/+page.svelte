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
  p {
    margin: 0px;
    padding: 0px;
    color: red;
    display: inline;
  }
</style>
