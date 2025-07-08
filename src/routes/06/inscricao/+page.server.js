import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    const nome = data.nome?.trim();
    const numero = data.numero?.trim();
    const validade = data.validade?.trim();
    const cvv = data.cvv?.trim();
    const plano = data.plano;

    const erros = {};
    let erro = false;

    // Nome: mínimo 3 letras (ignorando espaços)
    if (!nome || nome.replaceAll(' ', '').length < 3) {
      erros.nome = 'O nome deve conter pelo menos 3 letras.';
      erro = true;
    }

    // Número do cartão: exatamente 16 dígitos
    if (!numero || !/^\d{16}$/.test(numero)) {
      erros.numero = 'O número do cartão deve conter exatamente 16 dígitos.';
      erro = true;
    }

    // Validade: formato MM/AA e no futuro
    if (!validade || !/^\d{2}\/\d{2}$/.test(validade)) {
      erros.validade = 'Formato inválido. Use MM/AA.';
      erro = true;
    } else {
      const [mesStr, anoStr] = validade.split('/');
      const mes = parseInt(mesStr, 10);
      const ano = parseInt(anoStr, 10);

      if (isNaN(mes) || isNaN(ano) || mes < 1 || mes > 12) {
        erros.validade = 'Data de validade inválida.';
        erro = true;
      } else {
        const agora = new Date();
        const anoAtual = agora.getFullYear() % 100;
        const mesAtual = agora.getMonth() + 1;

        if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
          erros.validade = 'O cartão está vencido.';
          erro = true;
        }
      }
    }

    // CVV: exatamente 3 dígitos
    if (!cvv || !/^\d{3}$/.test(cvv)) {
      erros.cvv = 'O CVV deve conter exatamente 3 dígitos.';
      erro = true;
    }

    // Plano: bit, byte, quantum
    if (!['bit', 'byte', 'quantum'].includes(plano)) {
      erros.plano = 'Plano inválido.';
      erro = true;
    }

    // Se houver erro, retorna com os valores preenchidos
    if (erro) {
      return fail(400, {
        nome,
        numero,
        validade,
        cvv,
        plano,
        erros
      });
    }

    // Redirecionamento conforme plano
    const destinos = {
      bit: '/06/inscricao/basico',
      byte: '/06/inscricao/intermediario',
      quantum: '/06/inscricao/premium'
    };

    throw redirect(303, destinos[plano]);
  }
};
