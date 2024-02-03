const { headers, POST } = require('../config.js');
const { getUrl } = require('./common.js');

async function createUser(user) {
    const userData = {
        name: user.name,
        password: user.password,
        win: user.win,
        lose: user.lose
    }
    const requestData = {
        method: POST,
        headers,
        body: JSON.stringify(user)
    };
    const url = getUrl('/users');
    const res = await fetch(url, requestData);
    return res.ok;
}

module.exports = {
    createUser
}
