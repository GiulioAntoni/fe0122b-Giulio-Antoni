class SonAccount {
    balanceInit: number = 0
    balanceFinal: number = 0;

    constructor(balanceInit: number, balanceFinal: number) {
        this.balanceInit = balanceInit;
        this.balanceFinal = balanceFinal;
    }
    oneDeposit(valore: number): number {    // versamento
        return this.balanceFinal += valore;

    }
    oneWithDraw(valore: number): number {
        return this.balanceFinal -= valore;
    }
}


let figlio = new SonAccount(0,0)
console.log(figlio.oneDeposit(1500))
console.log(figlio.oneDeposit(300))

class BigMom extends SonAccount{
    interesse:number=0
    constructor(balanceInit: number, balanceFinal: number,interesse:number){
       super(balanceInit,balanceFinal);
       this.interesse=interesse;
    }
    calcInteresse(valore: number){
        return this.interesse += valore*10/100
    }
}
