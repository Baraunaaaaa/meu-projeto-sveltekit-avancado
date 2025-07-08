<script>
    import { onMount } from 'svelte';
   

    let contador = 10;
 
    function bloquear(segundos) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, segundos * 1000);
        });
    }
 
    async function iniciar() {
        for (let i = 10; i >= 0; i--) {
            contador = i;
            await bloquear(1);
        }
        confetti({
            particleCount: 100,
            spread: 70, 
            origin: { y: 0.6 } 
        });
    }
    
    onMount(() => {
        iniciar();
    });
</script>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
</svelte:head>
 
<div class="text-center">
    <h3>Contador regressivo</h3>
    <p>
        {#if contador > 0}
            {contador}...
        {:else}
            Feliz {new Date().toLocaleDateString()}!
        {/if}
    </p>
</div>
<style>
    * {
    background-color: #4d202f;
    color: white;
    font-family: Arial, sans-serif;
}
</style>