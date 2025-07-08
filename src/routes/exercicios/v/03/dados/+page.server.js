export function load(event) {
    console.log(event);
    return {
      post: { title: 'Título de Exemplo', content: 'Conteúdo supimpa de Exemplo' },
      author: { name: 'Autor Exemplo', email: 'autor@exemplo.com' }
    };
  }