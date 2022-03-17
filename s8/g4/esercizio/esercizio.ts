interface Smartphone{
    carica:number;   //quantitativo di euro disponibile per le chiamate
    numeroChiamate:number; //numero di chiamate effettuate con il cellulare
}


class User implements Smartphone{
    carica:number;
    numeroChiamate:number;
    constructor(carica:number,numeroChiamate:number){
        this.carica=carica;
        this.numeroChiamate=numeroChiamate
    }

    public ricarica(unaRicarica:any):void{  //void non vuole return
         this.carica += unaRicarica
    }
                          
    public chiamata(minutiDurata:any):void{  //effettua una chiamata di durata in minuti specificata dal parametro esplicito. Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino
        this.numeroChiamate += 1
        this.carica -= (minutiDurata*0.20)
    }

    public numero404():number{ //restituisce il valore della carica disponibile  un costo di 0.20 euro per ogni minuto di chiamata
        return this.carica
    }
    public getNumeroChiamate():number{  //che restituisce il valore della variabile d'istanza numeroChiamate
        return this.numeroChiamate
    }

    public azzeraChiamate():void{ //azzera la variabile contenente il numero di chiamate effettuate dal telefonino
        this.numeroChiamate = 0
    }
}

let franzio = new User (50,10)

console.log(franzio)

franzio.chiamata(25)
console.log(franzio)

class UserTim extends User{

    constructor(carica:number,numeroChiamate:number){
        super(carica,numeroChiamate)
    }

    public chiamata(minutiDurata:any):void{ 
        this.numeroChiamate += 1
        this.carica -= (minutiDurata*15000)
    }
}
let Jack = new UserTim (20,5)
Jack.chiamata(25)
console.log(Jack)

class Pirata extends User{

    constructor(carica:number,numeroChiamate:number){
        super(carica,numeroChiamate)
    }

    public chiamata(minutiDurata:any):void{ 
        this.numeroChiamate += 1
        this.carica -= (minutiDurata*0.0001)
    }
}

class zonzo extends User{

    constructor(carica:number,numeroChiamate:number){
        super(carica,numeroChiamate)
    }

    public chiamata(minutiDurata:any):void{ 
        this.numeroChiamate += 1
        this.carica -= (minutiDurata*0.25)
    }
}