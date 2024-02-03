const { url, PUT, headers } = require('../config');

async function putUser(user) {
    const id = user.id;
    const userReq = {
        name: user.name,
        password: user.password,
        win: user.win,
        lose: user.lose
    }
    const res = await fetch(`${url}/users/${id}`, {
        method: PUT,
        headers,
        body: JSON.stringify(userReq)
    });
    return res.ok;
}

module.exports = {
    putUser
}
