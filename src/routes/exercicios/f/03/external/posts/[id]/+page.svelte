<script>
	export let data;
	const { post, comments } = data;
</script>

<h1>{post.title}</h1>
<p>{post.body}</p>

<h2>Comentários</h2>
{#if comments.length > 0}
	<ul>
		{#each comments as comment}
			<li>
				<strong>{comment.name}</strong> ({comment.email}):<br />
				{comment.body}
			</li>
		{/each}
	</ul>
{:else}
	<p>Nenhum comentário encontrado.</p>
{/if}