<script>
    let nome = "Guilherme";
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
 
  
    body {
      font-family: 'Montserrat', sans-serif;
      background: linear-gradient(to right, #e0f7fa, #e3f2fd);
      color: #333;
      overflow-x: hidden;
    }
  
    main {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4rem 2rem;
      animation: fadeIn 1s ease-in-out both;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    .titulo {
      text-align: center;
      margin-bottom: 3rem;
    }
  
    .titulo h1 {
      font-size: 3rem;
      color: #0077cc;
      font-weight: 800;
      letter-spacing: -1px;
      animation: slideIn 1s ease-out forwards;
    }
  
    .titulo p {
      font-size: 1.2rem;
      color: #555;
      margin-top: 0.5rem;
      animation: slideIn 1.2s ease-out forwards;
    }
  
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    .container {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 1200px;
      width: 100%;
    }
  
    .info {
      flex: 1;
      min-width: 300px;
      max-width: 600px;
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      animation: floatIn 1.2s ease-out both;
    }
  
    @keyframes floatIn {
      0% { transform: translateY(40px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
  
    .info h2 {
      font-size: 1.5rem;
      color: #0077cc;
      margin-bottom: 1rem;
    }
  
    .info p {
      font-size: 1rem;
      line-height: 1.7;
      color: #444;
    }
  
    .foto {
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: zoomIn 1.5s ease forwards;
    }
  
    .foto img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 0 20px rgba(0, 119, 204, 0.4);
      transition: transform 0.3s ease;
    }
  
    .foto img:hover {
      transform: scale(1.07);
    }
  
    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
  
    footer {
      margin-top: 4rem;
      text-align: center;
      font-size: 0.9rem;
      color: #666;
      padding-bottom: 2rem;
      animation: fadeIn 2s ease-in-out both;
    }
  
    @media (max-width: 768px) {
      .titulo h1 {
        font-size: 2.2rem;
      }
  
      .foto img {
        width: 140px;
        height: 140px;
      }
    }
  </style>
  
  <main>
    <div class="titulo">
     <h1>Saudações e boas-vindas, estimados visitantes. Eu sou {nome}, 
      humilde estudante dedicado ao aprimoramento dos saberes digitais.
    </h1> 
    <p>É com grande satisfação que lhes apresento este site eletrônico acadêmico,
       concebido e desenvolvido com a estimada ferramenta SvelteKit, símbolo do progresso
        tecnológico contemporâneo. Este portal representa um esforço diligente em aliar 
        conhecimento e prática, e visa demonstrar minhas primeiras investidas no vasto campo
         da programação web.</p>
  
  
  
  
  
  
  
  
  
    </div>
  
    <div class="container">
      <div class="info">
        <h2>Sobre Mim</h2>
        <p>
          Sou discípulo do nível médio de instrução e consagro-me, com zelo e afinco, ao excelsíssimo labor de erigir estruturas informáticas no imenso firmamento cibernético. A presente composição constitui modesto testemunho inaugural de minhas investidas técnicas, elaborada mediante os veneráveis e consagrados artifícios da ciência computacional: o HyperTextus Machinae Linguagium (HTML), a Scriptura Styli Cascatilis (CSS), o Scriptum Iavanense (JavaScript) e a insigne ferramentaria denominada SvelteKit, cuja utilização visa o aprimoramento contínuo na senda do saber digital.
        </p>
      </div>
  
      <div class="foto">
        <img src="/unnamed.jpg" />
      </div>
    </div>
  
    <footer>
      © 2025 – Criado por {nome}. Todos os direitos reservados.
    </footer>
  </main>
