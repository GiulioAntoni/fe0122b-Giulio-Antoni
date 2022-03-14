

fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        let btnCrea = document.getElementById('creaUtente')

        btnCrea.addEventListener('click', function (e) {
            e.preventDefault()

            let gino = document.getElementById('nomes').value;
            let gignos = document.getElementById('cognomes').value;
            let dondes = document.getElementById('emails').value;
            let vados = document.getElementById('nicenames').value;


            fetch('https://sofin.wp-admin.it/public/api/v1/user', {
                method: 'post',
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
                .then(data => {
                    alert('creazione effettuata')
                })


        })
    })