var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Lavoratore;
}());
var Pizzettaro = /** @class */ (function (_super) {
    __extends(Pizzettaro, _super);
    function Pizzettaro(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Pizzettaro.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.codredd;
    };
    Pizzettaro.prototype.getTasseInps = function () {
        return this.redditoannuolordo - this.tasseinps;
    };
    Pizzettaro.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo - this.tasseirpef;
    };
    Pizzettaro.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.tasseirpef - this.tasseinps;
    };
    return Pizzettaro;
}(Lavoratore));
var incasso = document.querySelector('#reddito');
var redditivita = document.querySelector('#reddit');
var invio = document.querySelector('button');
function calcolo() {
    var incasso = document.querySelector('#reddito');
    var redditivita = document.querySelector('#reddit');
    if (redditivita.value == 'Pizzettaro') {
        var Gino_1 = new Pizzettaro(500, incasso.value, incasso.value * (25 / 100), incasso.value * (15 / 100));
    }
    ;
    //if(redditivita.value == 'Trafficante'){
    //    let Pabrlo = new 
    //}
}
var Gino = new Pizzettaro(500, incasso.value, incasso.value * (25 / 100), incasso.value * (15 / 100));
invio.addEventListener('click', function () {
    alert('le tue tasse sono :' + Gino.getUtileTasse() + 'le tasse inps sono : ' + Gino.getTasseInps() + 'le tue tasse irpef sono :' + Gino.getTasseIrpef() + 'il tuo reddito netto ' + Gino.getRedditoAnnuoNetto());
});
