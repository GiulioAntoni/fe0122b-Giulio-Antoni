fetch('audio.json')
    .then(response => response.json())
    .then(suoni => {
        

        suoni.forEach(e => {
            let tastiSuoni = document.createElement('a')
            let contenitore = document.getElementById('contenitoreAudio');

            contenitore.append(tastiSuoni);
            tastiSuoni.innerText = e.titolo;
            tastiSuoni.setAttribute('href', '#')

            console.log(e.url)

            tastiSuoni.addEventListener('click', function () {
                console.log(suoni)
                let mediaSuono = document.getElementById('media');
                let controlloSuono = document.getElementById('controlAudio')
                controlloSuono.setAttribute('src', e.url)
                controlloSuono.play();
            })
        });

    })

    fetch('video.json')
    .then(response => response.json())
    .then(videi => {
        console.log(videi);

        videi.forEach(e => {
            let tastiVideo = document.createElement('a')
            let contenitoreV = document.getElementById('contenitoreVideo');

            contenitoreV.append(tastiVideo);
            tastiVideo.innerText = e.titolo;
            tastiVideo.setAttribute('href', '#')


            tastiVideo.addEventListener('click', function () {
                console.log(e.url)
                let mediaSuono = document.getElementById('media');
                let controlloVideo = document.getElementById('controlVideo')
                controlloVideo.setAttribute('src', e.url)
                controlloVideo.play();
            })
        });
    })