import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome')?.trim();
    const numero = data.get('numero');
    const validade = data.get('validade');
    const cvv = data.get('cvv');
    const plano = data.get('plano');

    const errors = {};

    if (!nome || nome.length < 3) {
      errors.nome = 'Nome deve ter no mínimo 3 letras.';
    }

    if (!/^\d{16}$/.test(numero)) {
      errors.numero = 'Número do cartão deve ter 16 dígitos.';
    }


    if (!/^\d{2}\/\d{2}$/.test(validade)) {
      errors.validade = 'Formato inválido (MM/AA).';
    } else {
      const [mesStr, anoStr] = validade.split('/');
      const mes = parseInt(mesStr, 10);
      const ano = parseInt('20' + anoStr, 10);
      const hoje = new Date();
      const validadeDate = new Date(ano, mes - 1);

      if (mes < 1 || mes > 12 || validadeDate < hoje) {
        errors.validade = 'Data de validade deve ser futura.';
      }
    }
    if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV deve conter 3 dígitos.';
    }

    const planosValidos = {
      basico: 'Plano Bit',
      intermediario: 'Plano Byte',
      premium: 'Plano Quantum'
    };

    if (!plano || !(plano in planosValidos)) {
      errors.plano = 'Selecione um plano válido.';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        nome,
        numero,
        validade,
        cvv,
        plano
      });
    }
    return redirect(303, `/06/inscricao/${plano}`);
  }
};
