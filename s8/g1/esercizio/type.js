var giocatore1 = Math.floor(Math.random() * (100 - 1) + 1);
var giocatore2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log('il numero del giocatore 1 è : ' + giocatore1);
console.log('il numero del giocatore 2 è : ' + giocatore2);
function estrazione() {
    var pippo = Math.floor(Math.random() * (100 - 1) + 1);
    console.log('numero random' + ':' + pippo);
    if (giocatore1 == pippo) {
        alert('vince giocatore 1');
    }
    if (giocatore2 == pippo) {
        alert('vince giocatore 2');
    }
    else {
        var resto1 = Math.abs(giocatore1 - pippo);
        var resto2 = Math.abs(giocatore2 - pippo);
        console.log(resto1);
        console.log(resto2);
        if (resto1 < resto2) {
            console.log('vince giocatore 1');
        }
        else {
            console.log('vince giocatore 2');
        }
    }
}
estrazione();
