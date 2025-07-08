<script>
  let { form } = $props();
</script>

<form method="post">
  Nome: <input name="name" type="text" placeholder="Nome do aprendiz" /> <br />
  Nascimento: <input name="nascimento" type="date" /> <br />
  força: <input name="forca" type="number" min="1" max="10" /> <br />
  Inteligência: <input name="inteligencia" type="number" min="1" max="10" /> <br />
  Destreza: <input name="Destreza" type="number" min="1" max="10" /> <br />
  Conhecimento de magia: <input name="magia" type="checkbox" /> <br />
  Ferramentas de Artesão: <input name="ferramentas" type="checkbox" /> <br />
  <button formaction="?/guerreiros"> Increver na Ordem dos Guerreiros </button>
  <button formaction="?/magos"> Increver no Círculo dos Magos </button>
  <button formaction="?/artesaos"> Increver na Guilda dos Artesões </button>
</form>

{#if form?.error}
  <p style="color:red">{form.error}</p>
{/if}
