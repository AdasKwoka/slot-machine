class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById("start").addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.input = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGame = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }
    //pobieranie elementow gry
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('gram');
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        })
        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}`;
        } else if (!result && result != "") {
            result = `Przegrałeś ${bid}`;
        }
        this.spanResult.textContent = result;
        this.spanGame.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];


    }
    //uruchamianie gry
    startGame() {

    }
}