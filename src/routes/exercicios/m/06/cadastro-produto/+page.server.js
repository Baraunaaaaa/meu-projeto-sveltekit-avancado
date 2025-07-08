import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const preco = parseFloat(data.get('preco'));
    const quantidade = parseInt(data.get('quantidade'));

    if (!nome) return fail(400, { error: 'Nome obrigatório.', nome, preco, quantidade });
    if (isNaN(preco) || preco <= 0) return fail(400, { error: 'Preço inválido.', nome, preco, quantidade });
    if (!Number.isInteger(quantidade) || quantidade < 1) return fail(400, { error: 'Quantidade inválida.', nome, preco, quantidade });

    return { sucesso: true, produto: nome };
  }
};