const { User } = require("../classes/user");
const { getUrl } = require("./common");

async function getUser(id) {
    const url = getUrl(`users/${id}`);
    const res = await fetch(url);
    const userRes = await res.json();
    return new User(userRes.name, userRes.password, userRes.id, userRes.win, userRes.lose);
}

module.exports = {
    getUser
}
