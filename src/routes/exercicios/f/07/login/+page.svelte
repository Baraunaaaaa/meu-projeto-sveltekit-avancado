<script>
  import { page } from '$app/stores';
</script>

<h1>Login</h1>

{#if $page.url.searchParams.get('status') === 'conta_desativada'}
  <p style="color: green;">Conta desativada com sucesso.</p>
{/if}

<form>
  <label>
    E-mail:
    <input type="email" />
  </label>

  <label>
    Senha:
    <input type="password" />
  </label>

  <button>Entrar</button>
</form>