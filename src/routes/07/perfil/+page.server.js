import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  atualizarPerfil: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { nome, email, senhaAtual } = data;

    if (!nome || !email || !senhaAtual) {
      return fail(400, {
        error: 'Todos os campos obrigatórios devem ser preenchidos.',
        nome,
        email
      });
    }

    if (senhaAtual !== 'senhasecreta') {
      return fail(400, {
        error: 'Senha atual incorreta.',
        nome,
        email
      });
    }

    // Sucesso
    throw redirect(303, '/07/perfil?status=perfil_atualizado');
  },

  alterarSenha: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { senhaAtual, novaSenha, confirmarNovaSenha } = data;

    if (!senhaAtual || !novaSenha || !confirmarNovaSenha) {
      return fail(400, {
        error: 'Todos os campos de senha devem ser preenchidos.'
      });
    }

    if (senhaAtual !== 'senhasecreta') {
      return fail(400, {
        error: 'Senha atual incorreta.'
      });
    }

    if (novaSenha !== confirmarNovaSenha) {
      return fail(400, {
        error: 'A nova senha e a confirmação não coincidem.'
      });
    }

    if (novaSenha.length < 4) {
      return fail(400, {
        error: 'A nova senha deve ter pelo menos 4 caracteres.'
      });
    }

    // Sucesso
    throw redirect(303, '/07/perfil?status=senha_alterada');
  },

  desativarConta: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const confirmar = data.confirmarDesativacao === 'on';
    const senhaAtual = data.senhaAtual;

    if (!confirmar || senhaAtual !== 'senhasecreta') {
      return fail(400, {
        error: 'Você deve confirmar a desativação e fornecer a senha atual.'
      });
    }

    // Sucesso
    throw redirect(303, '/07/login?status=conta_desativada');
  }
};