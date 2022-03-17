"use strict";
class User {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= (minutiDurata * 0.20);
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let franzio = new User(50, 10);
console.log(franzio);
franzio.chiamata(25);
console.log(franzio);
class UserTim extends User {
    constructor(carica, numeroChiamate) {
        super(carica, numeroChiamate);
    }
    chiamata(minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= (minutiDurata * 15000);
    }
}
let Jack = new UserTim(20, 5);
Jack.chiamata(25);
console.log(Jack);
class Pirata extends User {
    constructor(carica, numeroChiamate) {
        super(carica, numeroChiamate);
    }
    chiamata(minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= (minutiDurata * 0.0001);
    }
}
class zonzo extends User {
    constructor(carica, numeroChiamate) {
        super(carica, numeroChiamate);
    }
    chiamata(minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= (minutiDurata * 0.25);
    }
}
