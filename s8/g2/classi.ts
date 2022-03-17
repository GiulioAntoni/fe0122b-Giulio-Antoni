class Car{
    public modello: string;   //proprieta
    public marca: string;

    private colore: string;

constructor(modello: string, marca:string, colore: string){
    this.modello = modello;
    this.marca = marca;
    this.colore = colore
}
get _colore():string{
    return this.colore
}

set coloreSet(setColore:string){
    this.colore = setColore;
}

dettagliAuto():string{  //metodo
    return this.modello + this.marca + this.colore;
}
public static state ():string{  //modificatore di accesso
    return 'Italy';
}
}

//creazione di un oggetto = istanza della classe
let fiat = new Car ('500','punto','rossa');
let panda = new Car ('4x4', 'panda','blu')
console.log(fiat instanceof Car);

console.log(Car.state())

fiat.coloreSet = 'arancione';
console.log(fiat._colore);

//superclassi

class Veicoli{
    modello: string;
    marca: string;
    tipoVeicolo: string;

    constructor(modello:string ,marca:string ,tipoVeicolo:string){
        this.modello=modello
        this.marca=marca
        this.tipoVeicolo=tipoVeicolo
    }
    dettagliVeicolo():string{
        
        return this.tipoVeicolo + this.marca + this.modello;
    }
}

class Macchina extends Veicoli{
    colore:string;
    constructor(modello:string, marca:string, tipoVeicolo:string,colore:string){
       super(modello,marca,tipoVeicolo) 
       this.colore=colore;
    }
}

let ford = new Macchina('fiesta','345','berlina','rossa')
console.log(ford.colore)