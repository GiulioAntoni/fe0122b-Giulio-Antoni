//funzioni generics

function prinType(arg) {
    console.log(typeof arg)
}

prinType('ciao');
prinType('89');

//classi generics

class Pair<T, U>{
    private elemento1: T;
    private elemento2: U;

    constructor(elemento1: T, elemento2: U) {
        this.elemento1 = elemento1
        this.elemento2 = elemento2
    }

    public getElemento1(): T {
        return this.elemento1;
    }
    public getElemento2(): U {
        return this.elemento2;
    }

    public getPair(): string {
        return this.elemento1 + ' ' + this.elemento2
    }
}

let pair1 = new Pair<string, string>('gatto', 'cane');
let pair2 = new Pair<number, number>(4, 3);
let pair3 = new Pair<string, number>('gatto', 5);
let pair4 = new Pair<number, boolean>(8, true);


//interfaccia generics


interface GenericPrint{
    <T>(arg:T[]):T[];
}

function prinType1<T>(arg:T[]):T[]{
console.log(typeof arg);
return arg;
}
let printFunc:GenericPrint = prinType1;

printFunc<number>([7,8,9]);
printFunc<string>(['gatto','cane','topo']);
