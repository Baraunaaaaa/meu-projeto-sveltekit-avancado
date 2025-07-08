<script>
    let { data } = $props();
</script>

<div class="container my-5">
    <h1 class="mb-4">Usuários:</h1>
    <form>
        <input name="idade" type="number" placeholder="Digite uma idade" />
        <button>Filtrar</button>
    </form>

    <ul class="list-group">
        {#each data.users.users as user}
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href="/03/dummy/users/{user.id}" class="text-decoration-none">
                    {user.firstName} {user.lastName} 
                </a>
                <span class="badge bg-primary rounded-pill">{user.age} anos</span>
            </li>
        {/each}
    </ul>

    <div class="text-center mt-4">
        <button class="btn btn-secondary" onclick={() => history.back()}>
            Voltar
        </button>
    </div>
</div>