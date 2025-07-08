<script>
    export let form;
  
    let mensagemRetorno = '';
    let erro = '';
  
    $: if (form) {
      if (form.error) {
        erro = form.error;
        mensagemRetorno = '';
      } else if (form.mensagem) {
        mensagemRetorno = form.mensagem;
        erro = '';
      }
    }
  </script>
  
  <form method="POST">
    <textarea name="mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
    <button>Enviar</button>
  </form>
  
  {#if erro}
    <p style="color: red">{erro}</p>
  {/if}
  
  {#if mensagemRetorno}
    <p style="color: green">Mensagem recebida: {mensagemRetorno}</p>
  {/if}
  