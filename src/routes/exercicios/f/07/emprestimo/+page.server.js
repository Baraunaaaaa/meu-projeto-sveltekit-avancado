import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  solicitarPessoal: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const renda = Number(data.renda);
    const score = Number(data.score);

    if (renda >= 2000 && score >= 600) {
      // Elegível
      throw redirect(303, '/07/emprestimo/pessoal');
    }

    // Não elegível
    return fail(400, { erro: 'Você não atende aos requisitos para o Empréstimo Pessoal.' });
  },

  solicitarImobiliario: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const renda = Number(data.renda);
    const score = Number(data.score);
    const possuiImovel = data.possuiImovel === 'on';

    if (renda >= 5000 && score >= 700 && possuiImovel) {
      throw redirect(303, '/07/emprestimo/imobiliario');
    }

    return fail(400, { erro: 'Você não atende aos requisitos para o Empréstimo Imobiliário.' });
  },

  solicitarAutomotivo: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const renda = Number(data.renda);
    const score = Number(data.score);
    const valorVeiculo = Number(data.valorVeiculo);

    if (renda >= 3000 && score >= 650 && valorVeiculo >= 15000) {
      throw redirect(303, '/07/emprestimo/automotivo');
    }

    return fail(400, { erro: 'Você não atende aos requisitos para o Empréstimo Automotivo.' });
  }
};