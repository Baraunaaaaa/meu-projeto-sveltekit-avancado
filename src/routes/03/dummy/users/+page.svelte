<script>
    let {data} =$props();
</script>

<h1>Usuários</h1>
<form>
    <input name="idade" type="number" placeholder="Digite uma idade" />
    <button>Filtrar</button>
</form>
<ul>
    {#each data.users.users as user}
    <li>
        <a href= "03/dummy/users/{user.id}">
            {user.firstName} {user.lastname} ({user.age} anos)
        </a>
    </li>
  {/each}
</ul>