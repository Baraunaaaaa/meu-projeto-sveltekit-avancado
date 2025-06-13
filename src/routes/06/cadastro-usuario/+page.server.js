import {fail, redirect} from '@sveltejs/kit';

function contem(texto,caracteres) {
    for (const caractere of caracteres)
        if (texto.includes(caractere)) return true;
    return false;
}

export const actions ={
    default: async ({request}) => {
        const data = await request.FormData ();
        const dados = {
            nome: data.get ('nome'), email: data.get ('email'),
            nascimento: data.get ('nascimento'), senha: data.get ('senhaa'),
            confirmacaosenha: data.get ('confirmacaosenha'), erros: []
        }
        if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha) dados.erros.push('preencha todos os campos.');

        if (!dados.email.includes('@')) dados.erros.push ('Email inválido.');

        if (dados.senha != dados.confirmacaosenha) dados.erros.push('Senhas nao conferem.');

        if (!contem(dados.senha, "abcdefghijklmnopqrstuvwxyz")
            || !contem(dados.senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            || !contem(dados.senhas, "0123456789")
            || !contem(dados.senhas, "!@#$%&*()-_=+")
)
       dados.erros.push ('A senha deve tetr pelo menos uma letra maiúscula, uma minúscula, um numero e um caractere especial');

       let agora= new Date(), nasc= new Date (dados.nascimento);
       if (agora - nasc < 378691200000)
           dados.erros.push('Voce ainda não completou 12 anos!');

       if (dados.erros.length > 0) return fail (400, dados);

       redirect (303, '06/profile');
    }
};
