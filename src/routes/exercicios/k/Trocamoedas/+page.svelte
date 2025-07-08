<script>
    let moedas = [
        { nome: 'Dólar americano', código: 'USD' },
        { nome: 'Real brasileiro', código: 'BRL' },
        { nome: 'Euro', código: 'EUR' },
        { nome: 'Libra esterlina', código: 'GBP' },
        { nome: 'Iene japonês', código: 'JPY' },
        { nome: 'Peso argentino', código: 'ARS' }
    ];

    let código1 = moedas[0].código;
    let código2 = moedas[1].código;
    let valor1 = 0;
    let valor2 = 0;
    let moedaPadrao = {};
    let ultimaAtualizacao = '';

    async function mudarMoeda() {
        const resposta = await fetch(`https://open.er-api.com/v6/latest/${código1}`);
        moedaPadrao = await resposta.json();
        ultimaAtualizacao = new Date().toLocaleString();
        converterDe();
    }

    function converterDe() {
        valor2 = (valor1 * moedaPadrao.rates[código2]).toFixed(2);
    }

    function converterPara() {
        valor1 = (valor2 / moedaPadrao.rates[código2]).toFixed(2);
    }

    function inverterMoedas() {
        let tempCodigo = código1;
        código1 = código2;
        código2 = tempCodigo;

        let tempValor = valor1;
        valor1 = valor2;
        valor2 = tempValor;

        mudarMoeda();
    }

    mudarMoeda();
</script>

<div class="container mt-5">
    <h1 class="text-center mb-4 text-primary">Cotação de Moedas</h1>
    <div class="input-group mb-3">
        <select class="form-select" bind:value={código1} onchange={mudarMoeda}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código}</option>
            {/each}
        </select>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterDe} bind:value={valor1} />
        <button class="btn btn-outline-secondary" type="button" onclick={inverterMoedas}>⇄</button>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterPara} bind:value={valor2} />
        <select class="form-select" bind:value={código2} onchange={converterPara}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código}</option>
            {/each}
        </select>
    </div>

    <div class="text-center mb-4">
        <p class="text-muted">Última atualização: {ultimaAtualizacao}</p>
    </div>

    <div class="text-center">
        <a href="https://www.exchangerate-api.com" target="_blank" class="text-muted">Rates By Exchange Rate API</a>
    </div>
</div>

<style>
    * {
        margin: 100;
        padding: 0;
        box-sizing: border-box;
        align-items: center;
    }

    .container {
        align-content: space-around;
        max-width: 900px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        background-color: rgb(113, 143, 84);
    }

    h1 {
        color: #000;
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }

    .text-muted {
        font-size: 1.4rem;
        color: #000000;
        font-family: Arial, Helvetica, sans-serif;
    }

    .input-group {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }

    .form-select, .form-control {
        padding: 10px;
        font-size: 1rem;
        border-radius: 5px;
        border: 1px solid #fff;
    }

    .form-select {
        width: 25%;
    }

    .form-control {
        width: 70%;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 1.25rem;
        cursor: pointer;
        transition: background-color 0.3s;
        outline: none;
    }

    button:hover {
        background-color: #0056b3;
    }

    a {
        color: #007bff;
        text-decoration: none;
        font-size: 0.9rem;
    }

    a:hover {
        text-decoration: underline;
    }

    .text-center {
        text-align: center;
    }

    @media (max-width: 768px) {
        .input-group {
            flex-direction: column;
            align-items: stretch;
        }

        .form-select, .form-control {
            width: 100%;
            margin-bottom: 10px;
        }

        button {
            width: 100%;
        }
    }
</style>
