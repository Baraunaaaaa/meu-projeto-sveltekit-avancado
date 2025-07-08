<script>
    import { goto } from '$app/navigation';
    let postId = '';
  
    function link() {
      if (postId) {
        goto(`/03/external/posts/${postId}`);
      }
    }
  </script>
  
  <h1>Buscar Postagem</h1>
  
  <input bind:value={postId} placeholder="Digite o ID do post"/>

  <button onclick={link}>Ir para Postagem</button>