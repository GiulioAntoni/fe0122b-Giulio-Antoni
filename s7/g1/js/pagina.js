
let elementiSalvati = localStorage.getItem('lista')
let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

console.log(dataBase)

dataBase.forEach(function (elemento) {
    let user = elemento.username
    let email = elemento.email
    let pass = elemento.password

    let riga = document.createElement('tr')

    let celle = document.createElement('td');
    let celle1 = document.createElement('td');
    let celle2 = document.createElement('td');
    let celle3 = document.createElement('td');
    let celle4 = document.createElement('button')

    let contenitore = document.querySelector('#tabella')

    celle1.innerText = user
    celle2.innerText = email
    celle3.innerText = pass
    celle4.innerText= 'elimina'


    celle4.setAttribute('data-email',elemento.email)

    contenitore.append(riga)
    riga.append(celle1, celle2, celle3,celle4) 

    celle4.addEventListener('click',function(){
        var deleteMail = this.getAttribute('data-email')
        riga.remove();
        elimina(deleteMail)
    })
})


function elimina(email) {
    var indice = dataBase.findIndex(u => u.email == email)

    let elementiSalvati = localStorage.getItem('lista')
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    //var focus = dataBase.indexOf(elemento)
    dataBase.splice(indice, 1)

    localStorage.setItem('lista', JSON.stringify(dataBase));
    
}


