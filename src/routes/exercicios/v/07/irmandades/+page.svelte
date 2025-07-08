<script>
    let { form } = $props();
</script>

<form method="post">
    Nome: <input name="nome" type="text" placeholder="Nome do aprendiz" /><br />
    Nascimento: <input name="nascimento" type="date" /><br />
    Força: <input name="força" type="number" min="1" max="10" /><br />
    Inteligencia: <input name="inteligencia" type="number" min="1" max="10" /><br />
    Destreza: <input name="destreza" type="number" min="1" max="10" /><br />
    Conehcimento de magia: <input name="magia" type="checkbox" /><br />
    Ferramentas de artesão: <input name="ferramentas" type="checkbox" /><br />
    <button formaction="?/guerreiris">Inscrever na Ordem dos Guerreiros</button><br />
    <button formaction="?/magos">Inscrever no Círculo dos Magos</button><br />
    <button formaction="?/artesões">Inscrever na Guilda dos Artesões</button><br />
</form>

{#if form?.error}
    <p style="color:red ">{form.error}</p>
{/if}