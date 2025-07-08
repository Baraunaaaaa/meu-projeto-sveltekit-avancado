export async function load({ params }) {
    const postId = params.id;

    const [postRes, commentsRes] = await Promise.all([
        fetch(`https://dummyjson.com/posts/${postId}`),
        fetch(`https://dummyjson.com/posts/${postId}/comments`)
    ]);

    const post = await postRes.json();
    const commentsData = await commentsRes.json();

    return {
        post,
        comments: commentsData.comments
    };
}