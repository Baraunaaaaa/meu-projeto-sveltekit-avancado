import {fail, redirect} from '@sveltejs/kit'
 export const actions = {
    guerreiros: async({ request } ) => {},
    magos: async ({ request }) => {
        const nascimento =data.get ('nascimento');
        const inteligencia = Number(data.get('inteligencia'));
        const magia = data.get ('magia');
        if (inteligencia<8) return fail (400,{error: 'Vc bem é bem burrinho !'});
        if (magia != 'on') return fail (400,{ error: 'Bem burrinho de magia tbm! '});
    const atual = new Date(),
    aniversario = new Date(nascimento);
    const idade = atual - aniversario;
    if (idade < 504921600000) return fail (400, {error: 'Precisa de ao menos 16 anos'});
    redirect (303, '/07/irmandade/magos');
    },
 }