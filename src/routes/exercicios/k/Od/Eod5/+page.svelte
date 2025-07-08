<script>
    let idUsuario = '';
    let posts = [];
    async function buscarPosts() {
        let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`);
        posts = await resposta.json();
    }
</script>

<input type="number" bind:value={idUsuario} placeholder="ID do usuário" />
<button on:click={buscarPosts}>Buscar Postagens</button>
<ul>
    {#each posts as post}
        <li>{post.title}</li>
    {/each}
</ul>
<style>
    main {
    background-color: #4d202f;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 2rem;
    min-height: 700px;
    max-width: 500px;
    border-radius: 10px;
    align-items: center;
}
</style>