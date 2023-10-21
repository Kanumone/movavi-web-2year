function addEventListener(event, callback) {
    console.log(event);
    console.log(callback());
}

function getRandowInt(max) {
    return Math.floor(Math.random() * max);
}

addEventListener('click', function () {

    getRandowInt();
});
