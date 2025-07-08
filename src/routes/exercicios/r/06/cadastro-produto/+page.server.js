import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const preco = data.get('preco');
    const quantidade = data.get('quantidade');

    if (!nome) {
      return fail(400, { error: 'Nome obrigatório.', nome, preco, quantidade });
    }

    const precoNum = parseFloat(preco);
    if (isNaN(precoNum) || precoNum <= 0) {
      return fail(400, { error: 'Preço inválido.', nome, preco, quantidade });
    }

    const quantidadeNum = Number(quantidade);
    if (!Number.isInteger(quantidadeNum) || quantidadeNum < 1) {
      return fail(400, { error: 'Quantidade inválida.', nome, preco, quantidade });
    }

    // Sucesso
    return { sucesso: true, produto: nome };
  }
};
