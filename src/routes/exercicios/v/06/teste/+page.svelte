<script>
    export let form;
</script>

<form method="POST">
    <input id="mensagem" name="mensagem" type="text" placeholder="Digite sua mensagem." />
    <button type="submit">Enviar</button>
</form>

{#if form?.mensagem && form?.status == '200'}
    <p style="color: green;">Sua mensagem foi: {form.mensagem}</p>
    Status: {form.status}
{:else}
    <p style="color: red;">{form.mensagem}</p>
    Status: {form.status}
{/if}