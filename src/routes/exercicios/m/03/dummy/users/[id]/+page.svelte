<script>
    let { data } = $props();
</script>

<div class="container my-5">
    <div class="card shadow p-4">
        <div class="row align-items-center">
            <div class="col-md-3 text-center">
                <img src={data.user.image} alt="Foto do usuário" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;">
            </div>
            <div class="col-md-9">
                <h2 class="mb-3">Usuário: <b>{data.user.firstName} {data.user.lastName}</b></h2>
                <p><strong>Idade:</strong> {data.user.age} anos</p>
                <p><strong>Número de telefone:</strong> {data.user.phone}</p>
                <p><strong>Endereço:</strong> {data.user.address.address}, {data.user.address.city} - {data.user.address.state}</p>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <h3 class="mb-3">Posts:</h3>
        <ul class="list-group">
            {#each data.posts.posts as post}
                <li class="list-group-item">
                    <a href="/03/dummy/posts/{post.id}" class="text-decoration-none">{post.title}</a>
                </li>
            {/each}
        </ul>
    </div>

    <div class="text-center mt-4">
        <button class="btn btn-secondary" on:click={() => history.back()}>
            Voltar
        </button>
    </div>
</div>
