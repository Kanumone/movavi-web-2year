import db from '../db.js';

export function getUser(username) {
    const user = db.data.users.find(user => user.username === username);
    return user;
}
