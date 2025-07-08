export async function load({ params }) {
    const userId = params.id;

    const [userRes, postsRes] = await Promise.all([
        fetch(`https://dummyjson.com/users/${userId}`),
        fetch(`https://dummyjson.com/users/${userId}/posts`)
    ]);

    

    const user = await userRes.json();
    const postsData = await postsRes.json();

    return {
        user,
        posts: postsData.posts
    };
}