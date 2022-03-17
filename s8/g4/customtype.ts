//custom type

type Programmer = {
    name: string;
    job: string;
    language:string []; 
};

const persona: Programmer= {
    name: 'Franco',
    job: 'frontend',
    language: ['pyton','java']
}


type Impiegato = number | string;

let utente : Impiegato;

utente = 21;
utente = 'dirigente'

let code: any = 123;
let EmployeeCode = <number> code;
let EmployeeCode1 = <string>code;
