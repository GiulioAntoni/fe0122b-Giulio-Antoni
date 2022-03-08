var valida = document.getElementById('registrati');
var conferme = document.querySelectorAll('.pippo');

var testo = document.querySelectorAll('span')

valida.addEventListener('click', function (evento) {
    evento.preventDefault();

    var conferme = document.querySelectorAll('.pippo');
    var mailo = document.getElementById('email1').value;
    var mailos = document.getElementById('email2').value;
    var userName = document.getElementById('userN')
    var userMail = document.getElementById('email1')
    var userPass = document.getElementById('pass')
    var controllo = true

    conferme.forEach(function (campo) {
        evento.preventDefault();
        let valore = campo.value;

        if (valore == "") {
            campo.style.border = '2px solid red';
            controllo = false

        } else {
            campo.style.border = '2px solid green';
        }
    })

    if (mailo !== mailos) {
        alert('le mail devono coincidere');
        controllo = false
    } else {
        //mailo.style.border = '2px solid green';
    } if (controllo) {
        alert('iscrizione completata')
        var lista = new User(userName, userMail, userPass)
        salva(lista)
    }
})

class User { //sempre fuori da funzioni e da if
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function salva(utente) {

    let elementiSalvati = localStorage.getItem('lista');
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);


    var target = dataBase.find( oldUser => oldUser.email == utente.email)

    if(target == undefined){
    dataBase.push(utente);   
    localStorage.setItem('lista', JSON.stringify(dataBase))
    }else{
        alert('mail gia usata')
    }
}







