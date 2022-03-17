interface Car {
    modello:string;
    marca:string;

    dettagli():string;

}

class CarImp implements Car {
    modello:string;
    marca:string;
    annoImmatric:number

    constructor(modello:string,marca:string,annoImmatric:number){
        this.marca=this.marca
        this.modello=this.modello
        this.annoImmatric=this.annoImmatric
    }

    dettagli():string{
        return  this.marca + this.modello 
    }
}

let macchina = new CarImp('ford','stocaz',2017);
console.log(macchina)
console.log(macchina.dettagli())
