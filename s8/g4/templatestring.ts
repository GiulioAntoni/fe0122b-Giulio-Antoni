let nome ='pippo';
let job = 'developer';

console.log(`il mio nome è: ${nome} e il mio lavoro è ${job}`)

let array: number[] = [4,56,23,45];
let filter:number[] = array.filter(function (number){
    return number > 40;
})

let array1: number[]= [12,20,30];
let map1: number[]= array1.map(result => result /2);


function finder(element:number){
    return element > 215
}

let finds = [200,450,500,345].find(finder);


let nomi:string;
let nation: string
[nomi,nation] = ['simo','italia'];