fetch('menu.json')
    .then(response => response.json())  //in caso ci puo andare anche il .text
    .then(pizze => {  //le funzioni freccia su piu righe hanno bisogno delle graffe
        pizze.forEach((item: Pizza)) => {
            let vesuvio = new Pizza(item.nome, item.tipo, item.prezzo, item.disponibilità)
        });
    })


class Pizza{
    nome: string;
    tipo: string;
    prezzo: number;
    disponibilita: boolean;

    costructor(nome: string, tipo: string, prezzo: number, disponibilita: boolean) {
        this.nome = nome
        this.tipo = tipo
        this.prezzo = prezzo
        this.disponibilita = disponibilita
    }
}