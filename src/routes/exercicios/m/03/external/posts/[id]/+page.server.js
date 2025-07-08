
export async function load({ params, fetch }) {
	const id = params.id;

	const [postRes, commentsRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
	]);

	if (!postRes.ok || !commentsRes.ok) {
		throw new Error('Falha ao buscar os dados da postagem ou comentários');
	}

	const post = await postRes.json();
	const comments = await commentsRes.json();

	return {
		post,
		comments
	};
}