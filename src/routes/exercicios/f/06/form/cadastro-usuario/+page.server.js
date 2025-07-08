import { fail, redirect } from '@sveltejs/kit';

function contem(string, caracteres) {
  for (const caractere of caracteres) {
    if (string.includes(caractere)) return true;
  }
  return false;
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const dados = {
      nome: data.get('nome'),
      email: data.get('email'),
      nascimento: data.get('nascimento'),
      senha: data.get('senha'),
      confirmacaosenha: data.get('confirmacaosenha'),
      erros: []
    };

    if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha)
      dados.erros.push('Preencha todos os campos');

    if (!dados.email.includes('@'))
      dados.erros.push('Email inválido');

    if (dados.senha !== dados.confirmacaosenha)
      dados.erros.push('Senhas diferentes');

    if (
      !contem(dados.senha, 'abcdefghijklmnopqrstuvwxyz') ||
      !contem(dados.senha, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ||
      !contem(dados.senha, '0123456789') ||
      !contem(dados.senha, '@#$%¨&*()_+-=')
    ) {
      dados.erros.push('A senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial');
    }

    let agora = new Date(), nasc = new Date(dados.nascimento);
    if (agora - nasc < 378691200000) // 12 anos em ms
      dados.erros.push('Você deve ter pelo menos 12 anos para se cadastrar.');

    if (dados.erros.length > 0)
      return fail(400, dados);

    throw redirect(303, '/06/profile');
  }
};
