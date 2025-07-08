<script>
    export let data;
</script>

<h1>{data.user.firstName} {data.user.lastName}</h1>
<p><strong>Username:</strong> {data.user.username}</p>
<p><strong>Email:</strong> {data.user.email}</p>
<p><strong>Telefone:</strong> {data.user.phone}</p>
<p><strong>Endereço:</strong> {data.user.address.address}, {data.user.address.city}</p>

<h2>Postagens:</h2>
<ul>
    {#each data.posts as post}
        <li>
            <a href={`/03/dummy/posts/${post.id}`}>{post.title}</a>
        </li>
    {/each}
</ul>

<a href="/03/dummy/users">← Voltar para usuários</a>