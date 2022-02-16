//sottrazione

function calcolo (anni, annilavoro){
    return anni - annilavoro;
}
console.log(calcolo (100,20));

//freccia 
// function saluto (){
//    return "hello world";
//}
//saluto=()=>{return "hello"}

calcolo2 =(anni, annilavoro)=>{return anni - annilavoro};
console.log(calcolo2 (60,20));

//funzione dentro funzione

function pizza(){
    var tipo= "Pomodoro";
    var condimento= "Mozzarella";
    function cottura(){
        console.log(tipo+" "+condimento);
    }
    return cottura ();
}
pizza ()
