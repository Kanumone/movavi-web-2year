import {User} from './user.js'

async function createUser() {
    const user = new User(0, "John", 25);
    const res = await fetch('http://127.0.0.1:3000/create_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    });
    console.log(res);
}

createUser();
