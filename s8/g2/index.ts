//enumerazioni

enum color{
    red = 4,
    green,
    pink,
    black,
    blue
}

let enumeration: color = color.green;

console.log(enumeration);

enum heter {
    no = 0,
    yes = 'ok'
}
let enumeration1: heter = heter.no;
console.log(enumeration1)

//array

let colori: string[] = ['rosso' , 'verde', 'blue', 'giallo'];
let id:number[];
id =[8,5,4,3,7,2];

console.log(colori)
console.log(id)

// funzioni

function myFunction(id:number, corso:string, frontend:string):any{
    return corso + ' '+ frontend
}
console.log(myFunction(1,'js','typescrip'));

//oggetto
const states:{
    name:string
    age:number
    hobby:string
} = {
    name:'mario',
    age: 6,
    hobby: 'cinema'
};
console.log(states )