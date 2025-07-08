export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const mensagem = formData.get('mensagem');

        if (!mensagem || mensagem.trim() === '') {
            return { status: 400, mensagem: 'Porfavor, preencha a mensagem.' }; // Bad Request
        } else {
            return { status: 200, mensagem }; // OK
        }
    }
}   