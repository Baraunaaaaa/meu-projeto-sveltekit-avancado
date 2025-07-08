<script>
    const tarefasAFazer = $state(['Fazer comida', 'Ir ao mercado', 'Estudar para a prova']);
    const tarefasConcluidas = $state([]);
    let tarefaNova = $state();
    let tarefaEditandoIndice = $state();
    let tarefaEditando = $state();
  
    function adicionarTarefa() {
        if (tarefaNova.trim()) {
            tarefasAFazer.push(tarefaNova);
            tarefaNova = '';
        }
    }
  
    function excluirTarefa(lista, i) {
        lista.splice(i, 1);
    }
  
    function editarTarefa(i) {
        tarefaEditandoIndice = i;
        tarefaEditando = tarefasAFazer[i];
    }
  
    function salvarTarefa(i) {
        tarefasAFazer[i] = tarefaEditando;
        tarefaEditandoIndice = null;
    }
  
    function cancelarEdicao() {
        tarefaEditandoIndice = null;
        tarefaEditando = '';
    }
  
    function marcarComoConcluida(i) {
        tarefasConcluidas.push(tarefasAFazer[i]);
        tarefasAFazer.splice(i, 1);
    }
  
    function desmarcarComoConcluida(i) {
        tarefasAFazer.push(tarefasConcluidas[i]);
        tarefasConcluidas.splice(i, 1);
    }
  </script>
  
  <div class="container">
    <h2 class="titulo">Tarefas para Fazer</h2>
    <p class="input-tarefa">
        <input 
            class="input-nova-tarefa" 
            placeholder="Digite..." 
            bind:value={tarefaNova} 
            
        />
        <button class="btn btn-adicionar" onclick={adicionarTarefa}>➕</button>
    </p>
  
    <h3 class="subtitulo">Tarefas para fazer</h3>
    <ul class="lista">
        {#each tarefasAFazer as tarefa, i}
            <li class="item">
                {#if tarefaEditandoIndice == i}
                    <input class="input-edicao" bind:value={tarefaEditando} />
                    <button class="btn btn-salvar" onclick={() => salvarTarefa(i)}>💾</button>
                    <button class="btn btn-cancelar" onclick={cancelarEdicao}>❌</button>
                {:else}
                    {tarefa}
                    <div class="botoes">
                        <button class="btn btn-editar" onclick={() => editarTarefa(i)}>✏</button>
                        <button class="btn btn-excluir" onclick={() => excluirTarefa(tarefasAFazer, i)}>🗑</button>
                        <button class="btn btn-concluido" onclick={() => marcarComoConcluida(i)}>✔</button>
                    </div>
                {/if}
            </li>
        {/each}
    </ul>
  
    <h3 class="subtitulo">Tarefas Concluídas</h3>
    <ul class="lista lista-concluidas">
        {#each tarefasConcluidas as tarefa, i}
            <li class="item">
                {tarefa}
                <div class="botoes">
                    <button class="btn btn-excluir" onclick={() => excluirTarefa(tarefasConcluidas, i)}>🗑</button>
                    <button class="btn btn-retornar" onclick={() => desmarcarComoConcluida(i)}>↩</button>
                </div>
            </li>
        {/each}
    </ul>
  </div>
  <style>
    .container {
      background: #ad6161;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
      padding: 20px;
      box-sizing: border-box;
      background-image: url('your-image.jpg'); 
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }

    .titulo {
      text-align: center;
      color: #000000;
      font-size: 32px;
      margin-bottom: 30px;
      font-family: Arial, Helvetica, sans-serif;
    }

    .subtitulo {
      color: #000000;
      margin-top: 30px;
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .input-tarefa {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      gap: 10px;
    }

    .input-nova-tarefa {
      width: 80%;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #ddd;
      font-size: 16px;
      background-color: #f8f8f8;
      transition: all 0.3s;
    }

    .input-nova-tarefa:focus {
      outline: none;
      border-color: #6200ea;
      background-color: #fff;
    }

    .btn {
      padding: 12px 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    .btn-adicionar {
      background-color: #6200ea;
      color: #fff;
    }

    .btn-adicionar:hover {
      background-color: #3700b3;
    }

    .lista {
      list-style: none;
      padding: 0;
    }

    .item {
      background-color: #df5555;
      margin-bottom: 15px;
      padding: 12px;
      border-radius: 16px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
    }

    .botoes {
      display: flex;
      gap: 10px;
    }

    .btn-editar,
    .btn-excluir,
    .btn-retornar {
      background-color: #472479;
      color: #fff;
    }

    .btn-concluido{
        background-color: green;
        color: white;
    }

    .btn-editar:hover,
    .btn-excluir:hover,
    .btn-concluido:hover,
    .btn-retornar:hover {
      background-color: #3700b3;
    }

    .input-edicao {
      flex-grow: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-right: 10px;
      font-size: 16px;
      background-color: #f8f8f8;
    }

    .input-edicao:focus {
      outline: none;
      border-color: #6200ea;
      background-color: #fff;
    }

    .lista-concluidas .item {
      background-color: #e0e0e0;
      color: #000000;
      text-decoration: line-through;
    }
  </style>
