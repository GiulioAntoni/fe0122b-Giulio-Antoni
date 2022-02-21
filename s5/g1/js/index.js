var data= new Date();
console.log(data)

document.write(data);

document.write(data.getFullYear());

alert(data.getDate()+ ' ' + data.getDay()+' ' + data.getMonth()+' ' + data.getFullYear());


const patrizio = new Date(Date.UTC(2022, 1, 21, 15, 17, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(patrizio.toLocaleDateString('it-IT', options));

var patty = patrizio.toLocaleDateString('it-IT', options)

document.getElementById('ora').innerHTML = patty;




setInterval(Orologio,1000);
function calcola (i){
if (i<10){          //formato orologio , mette lo 0 davanti a orario se inferiore a 10
    i= '0' + i;
}
return i;
}

function Orologio(){
var data= new Date();
ore = data.getHours() + ":";
minuti = data.getMinutes() + ":";
secondi = data.getSeconds();

document.getElementById('sono').innerHTML= "Sono le ore " + ore + minuti + secondi;
}