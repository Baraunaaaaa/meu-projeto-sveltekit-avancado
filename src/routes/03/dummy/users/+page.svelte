<script>
    let {data} =$props();
</script>

<h1>Usuários</h1>
<ul>
    {#each data.users.users as user}
    <li>
        <a href= "03/dummy/users/{user.id}">
            {user.firstName} {user.lastname} ({user.age} anos)
        </a>
    </li>
  {/each}
</ul>