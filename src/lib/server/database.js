const posts = [
    { slug: 'um', title: 'Primeiro Post', publish_date: '2025-03-12', content: 'Conteúdo do primeiro post' },
    { slug: 'outro', title: 'Outro Post', publish_date: '2025-03-25', content: 'Conteúdo do outro post' },
    { slug: 'algum', title: 'Mais um Post', publish_date: '2024-11-22', content: 'Conteúdo de mais um post' },
    { slug: 'ainda', title: 'Ainda Outro Post', publish_date: '2024-11-02', content: 'Conteúdo de ainda outro post' }
  ];

export function getAll() {
    // A função `getAll` retorna todos os posts disponíveis na lista `posts`.
    // O método `map` é usado para criar um novo array contendo apenas os títulos e slugs dos posts.
    // Cada objeto no novo array contém o título e o slug do post correspondente.
    // O método `slice` é usado para limitar o número de posts retornados a 10.
    const posts = posts.map((post) => ({ title: post.title, slug: post.slug })).slice(0, 10);
    
    // Retorna o array de posts.    
    return posts;
}

export function getBySlug(slug) {
    // A função `getBySlug` recebe um slug e retorna o post correspondente.
    // O slug é um identificador único para cada post, usado em URLs.
    // O método `find` é usado para localizar o post que corresponde ao slug fornecido.
    // Ele percorre o array `posts` e retorna o primeiro post cujo slug corresponda ao slug fornecido.
    return posts.find((post) => post.slug === slug);
}

export function getByYearMonth(ano, mes) {
    // A função `getByYearMonth` recebe um ano e um mês e retorna os posts correspondentes.
    // Ela filtra o array `posts` para incluir apenas os posts que foram publicados no ano e mês especificados.
    // O método `filter` é usado para criar um novo array contendo apenas os posts que atendem à condição especificada.
    // A data de publicação é convertida em um objeto Date para facilitar a comparação.
    // O método `getFullYear` retorna o ano da data, e `getMonth` retorna o mês (0-11).    
    return posts.filter((post) => {
        const date = new Date(post.publish_date);
        return date.getFullYear() === ano && date.getMonth() === mes;
    });
}

export function getByQuery(title, content) {
    // A função `getByQuery` recebe um título e um conteúdo e retorna os posts correspondentes.
    // Ela filtra o array `posts` para incluir apenas os posts cujo título ou conteúdo contenham as strings fornecidas.
    // O método `filter` é usado para criar um novo array contendo apenas os posts que atendem à condição especificada.
    // O método `toLowerCase` é usado para garantir que a comparação seja feita de forma case-insensitive.
    // O método `includes` verifica se a string fornecida está contida no título ou conteúdo do post.    
    return posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(title.toLowerCase());
        const contentMatch = post.content.toLowerCase().includes(content.toLowerCase());
        return titleMatch || contentMatch;
    });
}