<script>
    export let data;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.body}</p>
<p><strong>Tags:</strong> {data.post.tags.join(', ')}</p>

<h2>Comentários:</h2>
{#if data.comments.length > 0}
    <ul>
        {#each data.comments as comment}
            <li>
                <strong>{comment.user.username}:</strong> {comment.body}
            </li>
        {/each}
    </ul>
{:else}
    <p>Sem comentários.</p>
{/if}

<a href={`/03/dummy/users/${data.post.userId}`}>← Voltar para o usuário</a>