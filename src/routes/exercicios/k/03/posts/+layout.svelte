<script>
    import { page } from '$app/state';
  
    let { data, children } = $props();
  </script>
  
  <svelte:head>
    <title>{page.data.post?.title || page.url.pathname}</title>
  </svelte:head>
  
  <div class="row">
    <div class="col-4 bg-body-secondary">
      <aside>
        <h4>Últimos Posts</h4>
        <ul>
          {#each data.posts.slice(0, 2) as post}
            <li>
              <a href="/03/posts/{post.slug}">
                {post.title}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
    </div>
    <div class="col">
      <main>
        {@render children()}
      </main>
    </div>
  </div>