<script lang="ts">
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';

  let nome = $page.form?.nome ?? '';
  let email = $page.form?.email ?? '';
  let confirmarDesativacao = false;

  // Mensagens de erro vindas do backend
  $: erro = $page.form?.error;
</script>

<h1>Minha Conta</h1>

<form method="POST" use:enhance>

  <label>
    Nome:
    <input type="text" name="nome" bind:value={nome} />
  </label>

  <label>
    E-mail:
    <input type="email" name="email" bind:value={email} />
  </label>

  <label>
    Senha Atual:
    <input type="password" name="senhaAtual" />
  </label>

  <label>
    Nova Senha:
    <input type="password" name="novaSenha" />
  </label>

  <label>
    Confirmar Nova Senha:
    <input type="password" name="confirmarNovaSenha" />
  </label>

  <label>
    <input type="checkbox" name="confirmarDesativacao" bind:checked={confirmarDesativacao} />
    Confirmo que desejo desativar minha conta
  </label>

  <div style="margin-top: 1em;">
    <button name="action" value="atualizarPerfil">Salvar Alterações</button>
    <button name="action" value="alterarSenha">Alterar Senha</button>
    <button name="action" value="desativarConta">Desativar Minha Conta</button>
  </div>

  {#if erro}
    <p style="color: red;">{erro}</p>
  {/if}
</form>

{#if $page.url.searchParams.get('status') === 'perfil_atualizado'}
  <p style="color: green;">Perfil atualizado com sucesso!</p>
{:else if $page.url.searchParams.get('status') === 'senha_alterada'}
  <p style="color: green;">Senha alterada com sucesso!</p>
{/if}