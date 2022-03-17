class Impiegati {
    nome:string;
    readonly codice:number;

    constructor(nome:string,codice:number){
        this.nome=nome;
        this.codice= codice;

    }
}

let impiegato1= new Impiegati('mario',123);

//impiegato1.codice='345';  //non puo essere modificato , perche parametro di sola lettura. 
//console.log(impiegato1.codice='345')

//classe astratta

abstract class Negozio{
    maglia:string;
    pantalone:string;
    scarpe:string;

    constructor(maglia:string, pantalone:string,scarpe:string){
        this.maglia = maglia;
        this.pantalone = pantalone;
        this. scarpe = scarpe;
    }

    abstract abbigliamento(): string;
}

class Vestito extends Negozio{
    cintura:string;

    constructor(cintura:string, maglia:string,pantalone:string,scarpe:string){
        super(maglia, pantalone, scarpe);
        this.cintura = cintura
    }
    abbigliamento(): string{
        return 'scarpe';
    }
}

let outfit = new Vestito('pelle','righe','nero','bianche');