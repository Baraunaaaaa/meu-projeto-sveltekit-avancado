import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const nome = formData.get('nome')?.trim();
    const numeroCartao = formData.get('numeroCartao')?.trim();
    const validade = formData.get('validade')?.trim();
    const cvv = formData.get('cvv')?.trim();
    const plano = formData.get('plano')?.trim();

    const erros = {};

    // Validação do nome
    if (!nome || nome.length < 3) {
      erros.nome = 'O nome no cartão deve ter pelo menos 3 letras.';
    }

    // Validação do número do cartão
    if (!/^\d{16}$/.test(numeroCartao)) {
      erros.numeroCartao = 'O número do cartão deve ter 16 dígitos.';
    }

    // Validação da validade (MM/AA e data futura)
    const validadeRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!validadeRegex.test(validade)) {
      erros.validade = 'Formato inválido. Use MM/AA.';
    } else {
      const [mes, ano] = validade.split('/').map(Number);
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear() % 100; // últimos 2 dígitos do ano
      const mesAtual = dataAtual.getMonth() + 1;

      if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
        erros.validade = 'A data de validade deve ser no futuro.';
      }
    }

    // Validação do CVV
    if (!/^\d{3}$/.test(cvv)) {
      erros.cvv = 'O código de segurança (CVV) deve ter 3 dígitos.';
    }

    // Validação do plano
    const planosValidos = ['basico', 'intermediario', 'premium'];
    if (!plano || !planosValidos.includes(plano)) {
      erros.plano = 'Selecione um plano válido.';
    }

    // Se houver erros, retorna com os erros e dados preenchidos
    if (Object.keys(erros).length > 0) {
      return fail(400, { erros, nome, numeroCartao, validade, cvv, plano });
    }

    // Redireciona para a página com base no plano
    const rotas = {
      basico: '/06/inscricao/basico',
      intermediario: '/06/inscricao/intermediario',
      premium: '/06/inscricao/premium'
    };

    throw redirect(303, rotas[plano]);
  }
};
