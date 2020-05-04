class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //sprawdzanie czy użytkownik ma opdpowiednią ilość pieniędzy
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }

        //Zmiana zawartości portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidłowy typ działania");
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba/Nieprawidłowy typ danych podaj liczbę");

            }
        }
    }
}

// const wallet = new Wallet(200)