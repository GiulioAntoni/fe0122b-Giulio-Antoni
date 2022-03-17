let numero: number []= [2,3,4]

let arr2: number [] = [5,6,7]

let spread: number[] = [...numero,...arr2];


//intersection type

type Admin = {
    name:string
    roles:string[
    ]
}

type Emplooyee = {
name: string
stardate :Date
}

type specificEmployee = Admin & Emplooyee;

//decorators

function logger(constructor: Function){
    console.log('logging...')
    console.log(constructor)
}
@logger
class Utente{
    name='mario';
    constructor(){console.log('crea un oggetto persona')}
}

const gino = new Utente();