import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  publicar: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id, titulo, conteudo } = data;

    // Validação obrigatória
    if (!id || !titulo || !conteudo) {
      return fail(400, {
        error: 'Todos os campos são obrigatórios para publicar.',
        titulo,
        conteudo
      });
    }

    // Simulando publicação (banco de dados, etc.)
    throw redirect(303, `/07/blog/${id}?status=artigo_publicado`);
  },

  salvarRascunho: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { titulo } = data;

    if (!titulo) {
      return fail(400, {
        error: 'O título é obrigatório para salvar como rascunho.'
      });
    }

    // Simulando salvamento de rascunho
    return {
      success: true,
      message: 'Rascunho salvo com sucesso!',
      titulo: data.titulo,
      conteudo: data.conteudo
    };
  },

  excluir: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id } = data;

    if (!id) {
      return fail(400, {
        error: 'ID do artigo não fornecido.'
      });
    }

    // Simulando exclusão
    throw redirect(303, '/07/blog?status=artigo_excluido');
  }
};