class User {
    constructor(name = 'User', password = 'User', id = 0, win = 0, lose = 0) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.win = win;
        this.lose = lose;
    }

    setStat(win, lose) {
        this.win = win;
        this.lose = lose;
    }
}

module.exports = {
    User
}
