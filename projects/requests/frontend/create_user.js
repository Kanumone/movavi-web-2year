import {User} from './user.js'

export default async function createUser(username, age) {
    const user = new User(0, username, age);
    const res = await fetch('http://127.0.0.1:3000/create_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    });
    return res;
}
