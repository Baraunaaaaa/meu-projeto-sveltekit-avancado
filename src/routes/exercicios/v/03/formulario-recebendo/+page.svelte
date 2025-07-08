<script>
    let { data } = $props();
  </script>
   
  {#if data.fruta && data.legume}
    Você gosta da fruta {data.fruta} e do legume {data.legume}
  {:else}
    Informe uma fruta e um legume...
  {/if}
   
  <p><a href="/03/formulario-enviando">Voltar ao formulário</a></p>
  