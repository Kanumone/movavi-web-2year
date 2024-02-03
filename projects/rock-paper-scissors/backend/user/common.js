const { url } = require("../config");

function getUrl(endpoint) {
    return `${url}/${endpoint}`
}

module.exports = {
    getUrl
}
