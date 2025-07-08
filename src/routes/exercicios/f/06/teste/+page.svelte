<script>
    import { enhance } from '$app/forms';
  
    let mensagem = '';
    let feedback = '';
    let isError = false;
  
    function handleEnhance(form) {
      const enhanced = enhance(form);
  
      enhanced.result = (event) => {
        const result = event.detail;
  
        if (result.type === 'failure') {
          isError = true;
          feedback = result.data?.error || 'Erro desconhecido.';
        } else if (result.type === 'success') {
          isError = false;
          feedback = `Mensagem recebida: ${result.data.mensagem}`;
          mensagem = '';
        }
      };
  
      return enhanced;
    }
  </script>
  
  <form method="POST" use:handleEnhance>
    <label>
      Mensagem:
      <input name="mensagem" type="text" bind:value={mensagem} />
    </label>
    <button type="submit">Enviar</button>
  </form>
  
  {#if feedback}
    <p style="color: {isError ? 'red' : 'green'}">{feedback}</p>
  {/if}
  