<script>
    export let form = {};
  </script>
  
  <style>
    /* Fundo ocupa a tela toda */
    .background {
      background: url('/7909126-conceito-banco-ideia-de-financiar-dinheiro-construindo-investimento-com-mulher-coluna-carregando-moeda-banco-financiamento-dinheiro-cambio-poupanca-ou-acumulacao-dinheiro-vetor.jpg') no-repeat center center fixed;
      background-size: cover;
      width: 100vw;
      height: 100vh;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    /* Caixa do formulário */
    .form-container {
      background-color: rgba(0, 0, 0, 0.6); /* preto semitransparente */
      color: white;
      text-shadow: 1px 1px 4px black;
      max-width: 400px;
      width: 90%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }
  
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    label {
      display: block;
      margin: 10px 0;
    }
  
    input, select {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
  
    button {
      width: 100%;
      background-color: #6A0DAD;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }
  
    button:hover {
      background-color: #5A0C9C;
      transform: scale(1.05);
    }
  
    .error {
      color: red;
      font-size: 0.9rem;
      margin-top: 5px;
    }
  </style>
  
  <div class="background">
    <div class="form-container">
      <h2>Inscrição e Pagamento</h2>
      <form method="POST">
        <label>
          Nome no cartão:
          <input name="nome" type="text" placeholder="Nome no cartão" value={form?.nome || ''} />
          {#if form?.erros?.nome}
            <p class="error">{form.erros.nome}</p>
          {/if}
        </label>
  
        <label>
          Número do cartão:
          <input name="numeroCartao" type="text" placeholder="Número do cartão (16 dígitos)" value={form?.numeroCartao || ''} />
          {#if form?.erros?.numeroCartao}
            <p class="error">{form.erros.numeroCartao}</p>
          {/if}
        </label>
  
        <label>
          Data de validade:
          <input name="validade" type="text" placeholder="MM/AA" value={form?.validade || ''} />
          {#if form?.erros?.validade}
            <p class="error">{form.erros.validade}</p>
          {/if}
        </label>
  
        <label>
          Código de segurança (CVV):
          <input name="cvv" type="text" placeholder="CVV (3 dígitos)" value={form?.cvv || ''} />
          {#if form?.erros?.cvv}
            <p class="error">{form.erros.cvv}</p>
          {/if}
        </label>
  
        <label>
          Plano:
          <select name="plano">
            <option value="">Selecione um plano</option>
            <option value="basico" selected={form?.plano === 'basico'}>Plano Bit (básico)</option>
            <option value="intermediario" selected={form?.plano === 'intermediario'}>Plano Byte (intermediário)</option>
            <option value="premium" selected={form?.plano === 'premium'}>Plano Quantum (premium)</option>
          </select>
          {#if form?.erros?.plano}
            <p class="error">{form.erros.plano}</p>
          {/if}
        </label>
  
        <button type="submit">Finalizar Pagamento</button>
      </form>
    </div>
  </div>
  