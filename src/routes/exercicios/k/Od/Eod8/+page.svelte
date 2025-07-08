<script>
    let email = '';
    let posts = [];
    async function buscarPorEmail() {
        let respostaUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
        let usuarios = await respostaUsuarios.json();
        let usuario = usuarios.find(user => user.email.toLowerCase() === email.toLowerCase());
        if (usuario) {
            let respostaPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);
            posts = await respostaPosts.json();
        } else {
            posts = [];
        }
    }
</script>

<input type="email" bind:value={email} placeholder="E-mail do usuário" />
<button on:click={buscarPorEmail}>Buscar Postagens</button>
<ul>
    {#each posts as post}
        <li>{post.title}</li>
    {/each}
</ul>
<style>
    * {
    background-color: #4d202f;
    color: white;
    font-family: Arial, sans-serif;
}
</style>