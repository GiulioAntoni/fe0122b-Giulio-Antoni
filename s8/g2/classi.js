class Car {
    constructor(modello, marca, colore) {
        this.modello = modello;
        this.marca = marca;
        this.colore = colore;
    }
    get _colore() {
        return this.colore;
    }
    set coloreSet(setColore) {
        this.colore = setColore;
    }
    dettagliAuto() {
        return this.modello + this.marca + this.colore;
    }
    static state() {
        return 'Italy';
    }
}
//creazione di un oggetto = istanza della classe
let fiat = new Car('500', 'punto', 'rossa');
let panda = new Car('4x4', 'panda', 'blu');
console.log(fiat instanceof Car);
console.log(Car.state());
fiat.coloreSet = 'arancione';
console.log(fiat._colore);
