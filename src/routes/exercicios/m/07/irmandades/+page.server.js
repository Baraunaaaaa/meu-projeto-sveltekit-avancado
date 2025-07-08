import {fail, redirect} from '@sveltejs/kit';


function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    return idade;
  }

export const actions ={
    guerreiros: async ({ request }) => {
        const data = await request.formData();
        const nascimento = data.get('nascimento');
        const forca = Number(data.get('força'));
    
        if (forca < 7) {
          return fail(400, { error: 'Força insuficiente.' });
        }

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if(idade < 504921600000) return fail(400, {error: 'Precisa de ao menos 18 anos'});
    
        return redirect(303, '/07/irmandades/guerreiros');
      },

    magos: async ({ request }) => {
        const data = await request.formData();
        const nascimento =data.get('nascimento');
        const inteligencia = Number(data.get('inteligencia'));
        const magia = data.get('magia');
        
        if (inteligencia < 8)
             return fail(400, {error: 'Precisa estudar mais!'});

        if (magia != 'on') 
            return fail (400, 'Sem conhecimento de magia!');

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if(idade < 504921600000) return fail(400, {error: 'Precisa de ao menos 16 anos'});

         redirect(303, '/07/irmandades/magos');
    },
    artesaos: async ({ request }) => {
        const data = await request.formData();
        const nascimento = data.get('nascimento');
        const destreza = Number(data.get('destreza'));
        const ferramentas = data.get('ferramentas');

    
        if (destreza < 6) {
          return fail(400, { error: 'Destreza insuficiente. É necessário ter pelo menos 6.' });
        }
    
        if (ferramentas != 'on') {
          return fail(400, { error: 'Você precisa possuir ferramentas de artesão.' });
        }

        const atual = new Date(), aniversario = new Date(nascimento);
        const idade = atual - aniversario;
        if(idade < 504921600000) return fail(400, {error: 'Precisa de ao menos 15 anos'});
    
        return redirect(303, '/07/irmandades/artesaos');
      }
    };
