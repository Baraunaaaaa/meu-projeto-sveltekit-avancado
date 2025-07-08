<script lang="ts">
    let { data } = $props();	
    let email = data.email;
    let usuario = data.usuario
  </script>
  
  <h1>Bem-vindo(a) ao seu perfil!</h1>
  {#if email}
    <p>Você está logado como <strong>{email}</strong>.</p>
    <p>Usuario <strong>{usuario}</strong></p>
  {:else}
    <p>Email não informado.</p>
  {/if}
  
  