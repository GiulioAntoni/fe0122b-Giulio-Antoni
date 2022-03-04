$(() => {

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock","arrabbiato", "bello","piangere", "ridere", "amare", "amare1", "spavento", "shock"];
    
    console.log( mieImg.length)
        //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
        for (var i = 0 ; i < 16; i++){
            let random = Math.floor(Math.random()*mieImg.length);
            let eliminata = mieImg.splice(random, 1);

            $('#memory').append('<div class="images" id="emoji"' + i +'"><img id="'+i+'" src="img/'+eliminata+'.png"  width="130" height="130"></div>')
        }
        


        let immaginiCliccate = [];

        $('.images').on('click',function(){
            let numeroClick = $('#clicks').text()
            numeroClick++
            $('#clicks').text(numeroClick)
            
            if(immaginiCliccate.length <= 2){
                $(this).children().show()

                let imgId = $(this).children().attr('id')
                let imgSrc = $(this).children().attr('src')
             
                let imgOgg ={
                    id: imgId,
                    src: imgSrc,
                }
        
                
                immaginiCliccate.push(imgOgg);

                if(immaginiCliccate.length == 2){
                    if(immaginiCliccate[0].src == immaginiCliccate[1].src ){
                        immaginiCliccate = []
                    }else{
                        setTimeout(function(){
                            $('#' + immaginiCliccate[0].id).hide()
                            $('#' + immaginiCliccate[1].id).hide()
                            immaginiCliccate = []
                        },500)
                    }
            }
            }
            console.log(immaginiCliccate)
        })

        $('#Restart').on('click', function(){
            location.reload();
        })
 })