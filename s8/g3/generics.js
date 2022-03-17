//funzioni generics
function prinType(arg) {
    console.log(typeof arg);
}
prinType('ciao');
prinType('89');
//classi generics
var Pair = /** @class */ (function () {
    function Pair(elemento1, elemento2) {
        this.elemento1 = elemento1;
        this.elemento2 = elemento2;
    }
    Pair.prototype.getElemento1 = function () {
        return this.elemento1;
    };
    Pair.prototype.getElemento2 = function () {
        return this.elemento2;
    };
    Pair.prototype.getPair = function () {
        return this.elemento1 + ' ' + this.elemento2;
    };
    return Pair;
}());
var pair1 = new Pair('gatto', 'cane');
var pair2 = new Pair(4, 3);
var pair3 = new Pair('gatto', 5);
var pair4 = new Pair(8, true);
function prinType1(arg) {
    console.log(typeof arg);
    return arg;
}
var printFunc = prinType1;
printFunc([7, 8, 9]);
printFunc(['gatto', 'cane', 'topo']);
