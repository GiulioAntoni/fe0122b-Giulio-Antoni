"use strict";
let tabella = document.getElementById('miky');
class Negozio {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.prezzoivaesclusa * (this.saldo / 100);
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
let maglione = new Negozio(7, 22222, 'autunno.inverno', 'maglione', 5582, 85, 'verde', 80000, 96700, 'on-line', 10);
let felpa = new Negozio(8, 5846, 'estate.inverno', 'felpa', 2282, 85, 'arancione', 20, 24.4, 'negozio', 2);
let camicia = new Negozio(8, 666666, 'estate', 'camicia', 5772, 85, 'verde', 50, 61, 'on-line', 10);
let testina = ['id', 'codprod', 'collezione', 'capo', 'modello', 'quantita', 'colore', 'prezzoivaesclusa', 'prezzoivainclusa', 'disponibile', 'saldo'];
testina.forEach(x => {
    let testa = document.createElement('th');
    testa.innerHTML = x;
    tabella.append(testa);
});
fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(vestiti => {
    console.table(vestiti);
    vestiti.forEach((e) => {
        let dress = new Negozio(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.table(dress);
        console.log(dress.getsaldocapo());
        console.log(dress.getacquistocapo());
        let riga = document.createElement('tr');
        tabella.append(riga);
        // riga.addEventListener('click',=>({
        //     let saldo = this.getsaldocapo().value
        //     let costo = this.getacquistocapo().value
        //
        //     alert(saldo + costo)
        // })
        for (let prop in e) {
            let cella = document.createElement('td');
            cella.innerHTML = e[prop];
            riga.append(cella);
            console.log(cella);
        }
    });
});
