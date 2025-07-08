<script>
	let cartas = [
		{ id: 1, valor: "🍎", virada: false, combinada: false },
		{ id: 2, valor: "🍎", virada: false, combinada: false },
		{ id: 3, valor: "🍌", virada: false, combinada: false },
		{ id: 4, valor: "🍌", virada: false, combinada: false },
		{ id: 5, valor: "🍇", virada: false, combinada: false },
		{ id: 6, valor: "🍇", virada: false, combinada: false },
		{ id: 7, valor: "🍉", virada: false, combinada: false },
		{ id: 8, valor: "🍉", virada: false, combinada: false }
	];

	let primeiraCarta = null;
	let segundaCarta = null;
	let bloqueado = false;

	function embaralhar(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	embaralhar(cartas);

	function virarCarta(index) {
		if (bloqueado) return;
		if (cartas[index].virada || cartas[index].combinada) return;

		cartas[index].virada = true;

		if (!primeiraCarta) {
			primeiraCarta = cartas[index];
		} else if (!segundaCarta) {
			segundaCarta = cartas[index];
			bloqueado = true;

			setTimeout(() => {
				if (primeiraCarta.valor === segundaCarta.valor) {
					primeiraCarta.combinada = true;
					segundaCarta.combinada = true;
				} else {
					primeiraCarta.virada = false;
					segundaCarta.virada = false;
				}
				primeiraCarta = null;
				segundaCarta = null;
				bloqueado = false;
				cartas = [...cartas];
			}, 1000);
		}

		cartas = [...cartas];
	}

	function reiniciar() {
		cartas.forEach(c => {
			c.virada = false;
			c.combinada = false;
		});
		primeiraCarta = null;
		segundaCarta = null;
		bloqueado = false;
		embaralhar(cartas);
		cartas = [...cartas];
	}
</script>

<style>
	.tabuleiro {
		display: grid;
		grid-template-columns: repeat(4, 80px);
		gap: 10px;
		justify-content: center;
		margin-top: 20px;
	}
	.carta {
		width: 80px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.5em;
		background: #ccc;
		border-radius: 8px;
		cursor: pointer;
		user-select: none;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: background-color 0.3s;
	}
	.carta.virada, .carta.combinada {
		background: #fff;
		cursor: default;
	}
	button {
		display: block;
		margin: 20px auto 0;
		padding: 10px 20px;
		font-size: 1em;
		border-radius: 5px;
		border: none;
		background-color: #4caf50;
		color: white;
		cursor: pointer;
	}
</style>

<div class="tabuleiro">
	{#each cartas as carta, i}
		<div
			class="carta {carta.virada || carta.combinada ? 'virada' : ''}"
			on:click={() => virarCarta(i)}>
			{carta.virada || carta.combinada ? carta.valor : ""}
		</div>
	{/each}
</div>

<button on:click={reiniciar}>Reiniciar</button>
