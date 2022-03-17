var CarImp = /** @class */ (function () {
    function CarImp(modello, marca, annoImmatric) {
        this.marca = this.marca;
        this.modello = this.modello;
        this.annoImmatric = this.annoImmatric;
    }
    CarImp.prototype.dettagli = function () {
        return this.marca + this.modello;
    };
    return CarImp;
}());
var macchina = new CarImp('ford', 'stocaz', 2017);
console.log(macchina);
console.log(macchina.dettagli());
