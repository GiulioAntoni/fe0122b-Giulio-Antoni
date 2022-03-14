fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ['name', 'lastname', 'email', 'role'];


        data.forEach(function (elemento) {
            let contenitore = document.getElementById('contenitore');

            let riga = document.createElement('tr');
            let cancella = document.createElement('button');
            cancella.classList.add('cancella');
            cancella.innerText = 'cancella'
            cellaBottone = cancella

            cancella.setAttribute('data-id', elemento.id)
            cancella.addEventListener('click', function () {
                var deleteMail = this.getAttribute('data-id');
                console.log(deleteMail)

                fetch('https://sofin.wp-admin.it/public/api/v1/user/' + deleteMail, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                })
                    .then(data => riga.remove())
            })


            let modifica = document.createElement('a');
            modifica.innerText = 'modifica'
            modifica.setAttribute('data-id', elemento.id)
            modifica.href ='modifica.html?id='+ elemento.id
            modifica.classList.add('modifica');

            cellaModifica = modifica




            contenitore.append(riga);

            for (let prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == 'object' ? elemento[prop].nicename : elemento[prop];
                    let cella = document.createElement('td');
                    cella.innerText = contenuto;
                    riga.append(cella)
                    riga.append(cellaBottone);
                    riga.append(cellaModifica);
                }
            }

        })
    
    });