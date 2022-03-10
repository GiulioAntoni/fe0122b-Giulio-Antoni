var valida = document.getElementById('registrati');
var conferme = document.querySelectorAll('.pippo');

var testo = document.querySelectorAll('span')

valida.addEventListener('click', function (evento) {
    evento.preventDefault();

    var conferme = document.querySelectorAll('.pippo');
    var mailo = document.getElementById('email1').value;
    var mailos = document.getElementById('email2').value;
    var userName = document.getElementById('userN').value;
    var userPass = document.getElementById('pass').value;
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
        var lista = new User(userName, mailo, userPass)
        let utenteRegistrato = salva(lista);

        if (utenteRegistrato) {
            setTimeout(function () {
                window.location = 'accesso.html';
            }, 1000)
        }

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


    var target = dataBase.find(oldUser => oldUser.email == utente.email)

    if (target == undefined) {
        dataBase.push(utente);
        localStorage.setItem('lista', JSON.stringify(dataBase))
        return true
    } else {
        alert('mail gia usata')
        return false
    }
}

