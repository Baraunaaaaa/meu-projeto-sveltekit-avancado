import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    guerreiros: async ({ request }) => {
        const data = await request.formData();
        const nascimento = data.get('nascimento');
        const forca = Number(data.get('forca'));

        if (forca < 7) return fail(400, { error: 'Força física insuficiente! Precisa de pelo menos 7.' });

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if (idade < 568025136000) return fail(400, { error: 'Precisa ter pelo menos 18 anos.' });
        
        throw redirect(303, '/07/irmandades/guerreiros');
    },
    magos: async ({ request }) => {
        const data = await request.formData();
        const nascimento = data.get('nascimento');
        const inteligencia = Number(data.get('inteligencia'));
        const magia = data.get('magia');

        if (inteligencia < 8) return fail(400, { error: 'Inteligência insuficiente! Precisa de pelo menos 8.' });
        if (magia !== 'on') return fail(400, { error: 'É necessário possuir conhecimento de magia!' });

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if (idade < 504921600000) return fail(400, { error: 'Precisa ter pelo menos 16 anos.' });
        
        throw redirect(303, '/07/irmandades/magos');
    },
    artesaos: async ({ request }) => {
        const data = await request.formData();
        const nascimento = data.get('nascimento');
        const destreza = Number(data.get('destreza'));
        const ferramentas = data.get('ferramentas');

        if (destreza < 6) return fail(400, { error: 'Destreza manual insuficiente! Precisa de pelo menos 6.' });
        if (ferramentas !== 'on') return fail(400, { error: 'É necessário possuir ferramentas de artesão!' });

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if (idade < 473385600000) return fail(400, { error: 'Precisa ter pelo menos 15 anos.' }); 
        
        throw redirect(303, '/07/irmandades/artesaos');
    }
};
