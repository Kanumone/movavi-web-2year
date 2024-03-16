export default async function getUsers() {
    let res = await fetch('http://127.0.0.1:3000/get_users');
    let users = await res.json();
    return users;
}
