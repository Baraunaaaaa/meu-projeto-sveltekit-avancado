export async function load() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    return {
        users: data.users
    };
}