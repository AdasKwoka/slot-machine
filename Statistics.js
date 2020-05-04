class Statistics {
    constructor() {
        this.gameResults = [];
    }

    //dodawanie wynikow poszczególnych gier
    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }

    //udostepnianie obecnych statystyk
    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        console.log(wins, losses);

        return [games, wins, losses]
    }
}

// const stats = new Statistics();