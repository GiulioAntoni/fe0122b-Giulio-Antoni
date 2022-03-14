var btnAccesso = document.getElementById('bottoneaccedi')
var utEmail ;
var utPassword ;

btnAccesso.addEventListener('click', function(evento){
    evento.preventDefault(evento);
    let campi = document.querySelectorAll('.banana');
    utEmail = document.querySelector('#utenteUsername').value;
    utPassword = document.querySelector('#utentePass').value;

    campi.forEach(function (campo) {
        let valore = campo.value;

        if (valore == "") {
            campo.style.border = '2px solid red';
        } else {
            accesso();
            campo.style.border = '2px solid green';
        }
    })
})



function accesso(vecchioUtente) {

    let elementiSalvati = localStorage.getItem('lista')
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    utEmail = document.querySelector('#utenteUsername').value;
    utPassword = document.querySelector('#utentePass').value;

    var checkAccesso = dataBase.find(accessoMail => accessoMail.email == utEmail && accessoMail.password == utPassword)

    if (checkAccesso != undefined) {
        alert('credenziali corrette');
        window.location = 'tabella.html';
    } else {
        alert('credenziali errate');
    }
}