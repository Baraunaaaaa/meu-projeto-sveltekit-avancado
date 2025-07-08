<script>
    let { data } = $props();
  </script>
  
  <h3>Todos os Posts</h3>
  {#each data.posts as post}
    <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
  {/each}