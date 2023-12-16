class Player {
    constructor(name) {
        this.name = name;
        this.win = 0;
        this.lose = 0;
    }

    newStatistic(win, lose) {
        this.win = win;
        this.lose = lose;
    }
}

module.exports = {
    Player
}
