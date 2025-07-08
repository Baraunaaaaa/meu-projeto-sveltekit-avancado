import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();

      const nome = data.get('nome')?.trim() || '';
      const precoRaw = data.get('preco');
      const quantidadeRaw = data.get('quantidade');

      const preco = parseFloat(precoRaw);
      const quantidade = parseInt(quantidadeRaw, 10);

      if (!nome) {
        return fail(400, { error: 'Nome obrigatório.', nome, preco: precoRaw, quantidade: quantidadeRaw });
      }

      if (isNaN(preco) || preco <= 0) {
        return fail(400, { error: 'Preço inválido.', nome, preco: precoRaw, quantidade: quantidadeRaw });
      }

      if (!Number.isInteger(quantidade) || quantidade < 1) {
        return fail(400, { error: 'Quantidade inválida.', nome, preco: precoRaw, quantidade: quantidadeRaw });
      }

      return { sucesso: true, produto: nome };
    } catch (err) {
      console.error('Erro no cadastro:', err);
      return fail(500, { error: 'Erro interno no servidor.' });
    }
  }
};
