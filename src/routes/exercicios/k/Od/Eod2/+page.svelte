<script>
    let contador = 10;
    let tempoEscolhido = 10;
    let iniciado = false;
    
    function bloquear(segundos) {
        return new Promise(r => setTimeout(r, segundos * 1000));
    }
    
    async function iniciarContagem() {
        iniciado = true;
        contador = tempoEscolhido;
        for (let i = tempoEscolhido; i > 0; i--) {
            await bloquear(1);
            contador = i - 1;
        }
        iniciado = false;
    }
</script>

<input type="number" bind:value={tempoEscolhido} min="1" disabled={iniciado}>
<button on:click={iniciarContagem} disabled={iniciado}>Iniciar</button>
<h1>{contador}</h1>""
<style>
    main {
    background-color: #4d202f;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 2rem;
    min-height: 700px;
    max-width: 500px;
    border-radius: 10px;
    align-items: center;
}
</style>