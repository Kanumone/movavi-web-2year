const { url, DELETE } = require('../config');
const { getUrl } = require('./common');


async function deleteUser(user) {
    const id = user.id;
    const url = getUrl(`/users/${id}`);
    const res = await fetch(url, {
        method: DELETE
    });
    return res.ok;
}

module.exports = {
    deleteUser
}
