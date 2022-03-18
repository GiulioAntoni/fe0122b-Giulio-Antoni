"use strict";
fetch('menu.json')
    .then(response => response.json()) //in caso ci puo andare anche il .text
    .then(pizze => {
    pizze.forEach((item) => );
    {
        let vesuvio = new Pizza(item.nome, item.tipo, item.prezzo, item.disponibilità);
    }
});
class Pizza {
    costructor(nome, tipo, prezzo, disponibilita) {
        this.nome = nome;
        this.tipo = tipo;
        this.prezzo = prezzo;
        this.disponibilita = disponibilita;
    }
}
