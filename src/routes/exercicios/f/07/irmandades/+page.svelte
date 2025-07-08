<script>
    let { form } = $props();
</script>
<form method="post">
    nome: <input name='nome' type='text' placeholder="Nome do aprendiz"/> <br> 
    nascimento: <input name='nascimento' type='date'/> <br> 
    força: <input name='forca' type='number' min = '1' max='10'/> <br> 
    inteligência: <input name='inteligencia' type='number'/> <br> 
    destreza: <input name='destreza' type='number' min='1' max='10'/> <br> 
    conhecimento de magias: <input name='magia' type='checkbox'/> <br> 
    ferramentas de artesão: <input name='ferramentas' type='checkbox'/> <br> 
    <button formaction='?/guerreiros'>Inscrever na Ordem dos guerreiros</button><br>
    <button formaction='?/magos'>Inscrever no Circulo dos Magos</button><br>
    <button formaction='?/artesaos'>Inscrever na Guilda dos Artesão</button><br>
</form>
{#if form?.error}
<p style='color:red'> {form.error}</p>
{/if}