<script>
    let { form } = $props();
  </script>
  
  <form method="POST" action="?/multiplicar">
    <label>
      x: <input name="x" type="number" step="0.01" value={form?.x ?? ''} required />
    </label>
    <br />
    <label>
      y: <input name="y" type="number" step="0.01" value={form?.y ?? ''} required />
    </label>
    <br />
    <button type="submit">Multiplicar</button>
    <button type="submit" formaction="?/dividir">Dividir</button>
  </form>
  
  {#if form && form.error != undefined}
    <p style="color: red">{form.error}</p>
  {/if}
  
  {#if form && form.result != undefined}
    <p style="color: green">Resultado: {form.result}</p>
  {/if}