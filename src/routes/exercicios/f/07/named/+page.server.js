import { fail } from '@sveltejs/kit';

// O objeto `actions` exportado contém todas as ações nomeadas da página.
// Cada chave do objeto (ex: 'multiplicar') é o nome da ação.
export const actions = {
  // Ação 'multiplicar'
  multiplicar: async ({ request }) => {
    const data = await request.formData();
    const x = Number(data.get('x'));
    const y = Number(data.get('y'));

    // Validação: garante que os campos são números.
    if (isNaN(x) || isNaN(y)) {
      // Retorna um erro 400 (Bad Request) com uma mensagem e os dados submetidos.
      return fail(400, { error: 'Informe números válidos.', x, y });
    }

    // Sucesso: retorna um objeto com o resultado.
    return { result: x * y };
  },

  // Ação 'dividir'
  dividir: async ({ request }) => {
    const data = await request.formData();
    const x = Number(data.get('x'));
    const y = Number(data.get('y'));

    // Validação 1: garante que os campos são números.
    if (isNaN(x) || isNaN(y)) {
      return fail(400, { error: 'Informe números válidos.', x, y });
    }
    
    // Validação 2: impede a divisão por zero.
    if (y === 0) {
      return fail(400, { error: 'Não é possível dividir por zero!', x, y });
    }

    // Sucesso: retorna um objeto com o resultado.
    return { result: x / y };
  }
};