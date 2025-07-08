<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let email = '';
  
    // Pega o parâmetro de consulta "email" da URL
    $: email = $page.url.searchParams.get('email') || '';
  </script>
  
  <h1>Bem-vindo(a)!</h1>
  {#if email}
    <p>Olá, <strong>{email}</strong>, você está logado.</p>
  {:else}
    <p>Você está logado, mas seu email não foi informado.</p>
  {/if}
  