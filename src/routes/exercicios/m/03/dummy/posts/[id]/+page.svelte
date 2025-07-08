<script>
    let { data } = $props();
</script>

<div class="container my-5">
    <div class="card shadow p-4">
        <h1 class="mb-3">
            Post: <b>{data.post.title}</b>
        </h1>

        <p><strong>ID da postagem:</strong> {data.post.id}</p>

        <div class="mb-3">
            <strong>Tags:</strong>
            <div class="mt-2 d-flex flex-wrap gap-2">
                {#each data.post.tags as tag}
                    <span class="badge rounded-pill text-bg-secondary">{tag}</span>
                {/each}
            </div>
        </div>

        <div class="mb-3">
            <span class="badge rounded-pill text-bg-primary me-2">
                <b>{data.post.views}</b> views
            </span>
            <span class="badge rounded-pill text-bg-success me-2">
                👍 <b>{data.post.reactions.likes}</b>
            </span>
            <span class="badge rounded-pill text-bg-danger">
                👎 <b>{data.post.reactions.dislikes}</b>
            </span>
        </div>

        <hr />

        <p class="fs-5">{data.post.body}</p>

        <div class="text-center mt-4">
            <button class="btn btn-secondary" on:click={() => history.back()}>
                Voltar
            </button>
        </div>
    </div>
</div>
