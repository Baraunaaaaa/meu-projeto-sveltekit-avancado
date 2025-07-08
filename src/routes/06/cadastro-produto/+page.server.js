import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    const nome = data.nome?.trim();
    const preco = parseFloat(data.preco);
    const quantidade = parseInt(data.quantidade);

    // Validação: nome obrigatório
    if (!nome) {
      return fail(400, {
        error: 'Nome obrigatório.',
        nome,
        preco: data.preco,
        quantidade: data.quantidade
      });
    }

    // Validação: preço deve ser número válido > 0
    if (isNaN(preco) || preco <= 0) {
      return fail(400, {
        error: 'Preço inválido.',
        nome,
        preco: data.preco,
        quantidade: data.quantidade
      });
    }

    // Validação: quantidade deve ser inteiro ≥ 1
    if (isNaN(quantidade) || quantidade < 1) {
      return fail(400, {
        error: 'Quantidade inválida.',
        nome,
        preco: data.preco,
        quantidade: data.quantidade
      });
    }

    // Se tudo estiver válido
    return {
      sucesso: true,
      produto: nome
    };
  }
};
