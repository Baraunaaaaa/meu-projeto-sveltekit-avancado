import { fail, redirect } from '@sveltejs/kit';


function contem(texto, caracteres){
    for (const caractere of caracteres)
        if(texto.includes(caractere)) return true;
    return false;
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados = {
            nome: data.get('nome'),
            senha: data.get('senha'),
            confirmacaoSenha: data.get('confirmacaosenha'),
            email: data.get('email'),
            nascimento: data.get('nascimento'),
            erros: []
        };

        if (!dados.email || !dados.nome || !dados.nascimento || !dados.senha || !dados.confirmacaoSenha)
            dados.erros[0] = 'Preencha todos os campos.';

        if (
            !contem(dados.email, '@') ||
            !contem(dados.email, '.') ||
            !contem(dados.email, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
        )
            dados.erros[1] = 'O e-mail deve conter apenas letras, um "@" e um ponto ".", com pelo menos uma palavra antes do @ e duas após, separadas pelo ..';

        if (
            !contem(dados.senha, 'abcdefghijklmnopqrstuvwxyz') ||
            !contem(dados.senha, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ||
            !contem(dados.senha, '0123456789') ||
            !contem(dados.senha, '!@#$%¨&*()-_+=')
        )
            dados.erros[2] = 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';

        if (dados.senha !== dados.confirmacaoSenha)
            dados.erros[3] = 'A senha e a confirmação de senha não coincidem.';

        let agora = new Date();
        let nascimentoDate = new Date(dados.nascimento);
        if (agora - nascimentoDate < 378691200000)
            dados.erros[4] = 'Você deve ter pelo menos 12 anos para se cadastrar.';

        if (dados.erros.length > 0)
            return fail(400, dados);

        throw redirect(303, `/06/profile?email=${encodeURIComponent(dados.email)}&usuario=${encodeURIComponent(dados.nome)}`);
    }
};