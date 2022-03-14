var param = new URLSearchParams(location.search)
var id = param.get('id')

console.log(id)


fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = data

        var utente = campi.find(u => u.id == id)

        let btnModifica = document.getElementById('invioModifica');
        console.log(btnModifica)

        let gino = document.getElementById('nomes');
        console.log(gino)

        btnModifica.addEventListener('click', function (e) {
            e.preventDefault()

            let id = param.get('id')
            console.log(id)

            let gino = document.getElementById('nomes').value;
            let gignos = document.getElementById('cognomes').value;
            let dondes = document.getElementById('emails').value;
            let vados = document.getElementById('nicenames').value;


            fetch('https://sofin.wp-admin.it/public/api/v1/user/'+ id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: gino,
                    lastname: gignos,
                    email: dondes,
                    role_id: vados
                })
                
            })
            .then(response => response.json())
            .then(data =>{
                alert('modifica effettuata')
            })



        })
    })