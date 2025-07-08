<script>
  import { onDestroy } from 'svelte';

  let animando = false;
  let pulsar = false;
  let crescer = false;
  let piscar = false;

  let piscarCount = 0;
  let piscarInterval;

  async function animarBotaoSim() {
    if (animando) return;
    animando = true;
    pulsar = true;
    crescer = false;
    piscar = false;

    await new Promise((r) => setTimeout(r, 700)); // pulso inicial

    pulsar = false;
    crescer = true;

    await new Promise((r) => setTimeout(r, 700)); // crescer

    piscar = true;
    piscarCount = 0;

    piscarInterval = setInterval(() => {
      document.body.style.backgroundColor = piscarCount % 2 === 0 ? 'white' : 'black';
      piscarCount++;
      if (piscarCount > 20) {
        // 2s
        clearInterval(piscarInterval);
        document.body.style.backgroundColor = '';
        piscar = false;
        animando = false;
        crescer = false;
        pulsar = false;
      }
    }, 100);
  }

  function moverBotaoNao(event) {
    const btn = event.target;
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    btn.style.position = 'fixed';
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
  }

  onDestroy(() => {
    clearInterval(piscarInterval);
    document.body.style.backgroundColor = '';
  });
</script>

<div class="container" class:hidden-content={piscar}>
  <h1>Reinaldo Junior</h1>
  <p>Informática 5A</p>
  <p class="question">Reinaldo é aluno nota 10?</p>

  <div class="botoes">
    <button class="botao-sim" class:pulsar class:crescer on:click={animarBotaoSim}> Sim </button>
    <button class="botao-nao" on:mouseenter={moverBotaoNao}> Não </button>
  </div>
</div>

<style>
  body {
    font-family: 'Times New Roman', serif;
    background: #f0f0f5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .container {
    background: white;
    padding: 40px 50px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    max-width: 450px;
    width: 100%;
    text-align: center;
    transition: opacity 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .hidden-content {
    opacity: 0;
    pointer-events: none;
    user-select: none;
  }

  h1 {
    margin-bottom: 5px;
    font-size: 2.4rem;
  }

  p {
    margin: 10px 0 30px 0;
    font-size: 1.15rem;
  }

  .question {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .botoes {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  button {
    font-family: 'Times New Roman', serif;
    font-size: 1.2rem;
    padding: 14px 36px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid #333;
    background: white;
    color: #333;
    user-select: none;
    position: relative;
    transition: all 0.3s ease;
  }

  button:hover {
    background: #ddd;
  }

  .botao-sim.pulsar {
    animation: pulsar 0.7s ease-in-out infinite;
  }

  .botao-sim.crescer {
    animation: crescer 0.7s forwards ease-in;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    z-index: 9999;
    font-size: 2rem;
    border-radius: 50%;
    background: #4caf50;
    color: white;
    border-color: #388e3c;
    padding: 0;
    width: 100px;
    height: 100px;
  }

  @keyframes pulsar {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
  }

  @keyframes crescer {
    to {
      width: 200vw;
      height: 200vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0;
      border-radius: 50%;
      padding: 0;
    }
  }

  .botao-nao {
    background: #e74c3c;
    color: white;
    border-color: #c0392b;
  }

  .botao-nao:hover {
    background: #c0392b;
  }
</style>
