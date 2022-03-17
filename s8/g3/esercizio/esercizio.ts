


abstract class Lavoratore {
    codredd: number;
    redditoannuolordo: number
    tasseinps: number
    tasseirpef: number
    
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    
    abstract getUtileTasse(): number
    abstract getTasseInps(): number
    abstract getTasseIrpef(): number
    abstract getRedditoAnnuoNetto(): number
}




class Pizzettaro extends Lavoratore {
    
    
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef)
    }
    
    getUtileTasse(): number {
        return this.redditoannuolordo -  this.codredd
    }
    getTasseInps(): number{
        return this.redditoannuolordo - this.tasseinps
    }
    getTasseIrpef(): number{
        return this.redditoannuolordo - this.tasseirpef
    }
    getRedditoAnnuoNetto(): number{
        return this.redditoannuolordo - this.tasseirpef - this.tasseinps
    }
}



var incasso:any = document.querySelector('#reddito');
var redditivita:any =document.querySelector('#reddit')
let invio = document.querySelector('button');

function calcolo (){
    var incasso:any = document.querySelector('#reddito');
    var redditivita:any =document.querySelector('#reddit')

    if (redditivita.value == 'Pizzettaro'){
        let Gino = new Pizzettaro (500,incasso.value,incasso.value*(25/100),incasso.value*(15/100))
    };
    //if(redditivita.value == 'Trafficante'){
    //    let Pabrlo = new 
    //}

}

let Gino = new Pizzettaro (500,incasso.value,incasso.value*(25/100),incasso.value*(15/100));
invio.addEventListener('click', function(){
    alert('le tue tasse sono :'+ Gino.getUtileTasse()+'le tasse inps sono : '+Gino.getTasseInps()+'le tue tasse irpef sono :'+ Gino.getTasseIrpef()+'il tuo reddito netto '+ Gino.getRedditoAnnuoNetto())
})