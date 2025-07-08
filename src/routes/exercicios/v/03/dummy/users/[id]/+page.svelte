<script>
    export let data;
</script>

<style>
    main {
        max-width: 700px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 12px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        font-family: "Segoe UI", sans-serif;
        color: #333;
    }

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
        color: #2c3e50;
    }

    h2 {
        margin-top: 2rem;
        font-size: 1.5rem;
        color: #34495e;
    }

    p {
        margin: 0.3rem 0;
        line-height: 1.6;
    }

    strong {
        color: #555;
    }

    ul {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: #3498db;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .back-link {
        display: inline-block;
        margin-top: 2rem;
        color: #7f8c8d;
    }

    .back-link:hover {
        color: #2c3e50;
    }
</style>

<main>
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

    <a class="back-link" href="/03/dummy/users">← Voltar para usuários</a>
</main>
