<script>
    let {form}= $props ();
</script>

<h2> Cadastro de usuário</h2>
<form method="POST">
    <imput name="nome" type="text" placeholder="Nome de usuário" value={form?.nome || ''} required >
    <imput name="email" type="email" placeholder="E-mail de usuário" value={form?.email || ''} required>
    <imput name="senha" type="passoword" placeholder="Senha" value={form?.senha || ''} required>
    <imput name="confimarcaosenha" type="passoword" placeholder="Confirmarção de senha" value={form?.confirmacaosenha || ''} required>
    <imput name="nascimento" type="date"  value={form?.nascimento || ''} required>
    <button>Cadastrar</button>
</form>

{#if form?.erros.length >0}
{#each form.erros as erros}
<p style= "color:red">{erro}</p>
{/each}
{/if}