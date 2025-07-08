<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
  
    let email: string = '';
  
    onMount(() => {
      const url = get(page).url;
      const emailParam = url.searchParams.get('email');
      if (emailParam) {
        email = emailParam;
      }
    });
  </script>
  
  <h1>Bem-vindo(a) ao seu perfil!</h1>
  {#if email}
    <p>Você está logado como <strong>{email}</strong>.</p>
  {:else}
    <p>Email não informado.</p>
  {/if}