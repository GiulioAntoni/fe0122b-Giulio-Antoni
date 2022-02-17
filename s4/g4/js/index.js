var casa = "Ciao a Tutti i Presenti";

console.log(casa)
console.log(casa.toLowerCase())
console.log(casa.toUpperCase())

console.log(casa.split(" "))
console.log(casa.split(" ").length)
console.log(casa.split(" ").slice(0,3))

var persone =[
    'marco',
    'flavio',
    'nunzio'

];

console.log(persone[2])

var persone2 = persone.splice(1,0,'Criscitello')

console.log(persone2)
console.log(persone)
console.log(persone.length)

console.log(persone.pop())
console.log(persone)
console.log(persone.push('bigodini'))
console.log(persone)



console.log(persone.shift())
console.log(persone)
console.log(persone.unshift('banana'))
console.log(persone)

var numeri =[
    1,
    2,
    3
]

function somma (){
    var numeri =[
        "cane"=1,
        "papavero"=2,
        "banano"=3];
        
    function calcolo(){
        console.log(eval.value("cane" + "papavero"))
    }

    return calcolo();
    
};
somma();

console.log(somma);