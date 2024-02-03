const { User } = require('../classes/user.js');
const {url} = require('../config.js');

async function getUsers() {
    const result = [];
    const res = await fetch(`${url}/users`);
    const usersRes = await res.json();
    for (const userRes of usersRes) {
        result.push(new User(userRes.name, userRes.password, userRes.id, userRes.win, userRes.lose))
    }
    return result;
}

module.exports = {
    getUsers
}
