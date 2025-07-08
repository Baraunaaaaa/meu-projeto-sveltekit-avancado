import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const mensagem = data.get('mensagem');

    if (!mensagem || mensagem.trim() === '') {
      return fail(400, { error: 'O campo mensagem não pode estar vazio.' });
    }

    return { mensagem };
  }
};
