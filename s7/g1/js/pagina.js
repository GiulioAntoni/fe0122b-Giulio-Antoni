
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

    let contenitore = document.querySelector('#tabella')


    celle1.innerText = user
    celle2.innerText = email
    celle3.innerText = pass

    contenitore.append(riga)
    riga.append(celle1, celle2, celle3) 



})
