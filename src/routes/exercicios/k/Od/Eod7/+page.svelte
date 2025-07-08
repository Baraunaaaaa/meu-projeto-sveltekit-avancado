<script>
    let cidade = '';
    let usuarios = [];
    async function buscarUsuarios() {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        let todosUsuarios = await resposta.json();
        usuarios = todosUsuarios.filter(user => user.address.city.toLowerCase() === cidade.toLowerCase());
    }
</script>

<input type="text" bind:value={cidade} placeholder="Nome da cidade" />
<button on:click={buscarUsuarios}>Buscar Usuários</button>
<ul>
    {#each usuarios as usuario}
        <li>{usuario.name}</li>
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