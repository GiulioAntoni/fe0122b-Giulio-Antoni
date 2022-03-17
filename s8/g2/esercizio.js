var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit, balanceFinal) {
        this.balanceInit = 0;
        this.balanceFinal = 0;
        this.balanceInit = balanceInit;
        this.balanceFinal = balanceFinal;
    }
    SonAccount.prototype.oneDeposit = function (valore) {
        return this.balanceFinal += valore;
    };
    SonAccount.prototype.oneWithDraw = function (valore) {
        return this.balanceFinal -= valore;
    };
    return SonAccount;
}());
var figlio = new SonAccount(0, 0);
console.log(figlio.oneDeposit(1500));
console.log(figlio.oneDeposit(300));
