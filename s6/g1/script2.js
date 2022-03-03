$('#iscr-news').click(function(){

    let nome = $('#nome').val()
    let mail1 = $('#email-1').val()
    let mail2 = $('#email-2').val()
    let isValid=true;

    if(nome ==' '){
        $('#nome').next().text('richiesto')
        isValid=false;
    }else{
        $('#nome').next().text('*')
    }
    if(mail1 ==' '){
        $('#mail1').next().text('richiesto')
        isValid=false;
    }else{
        $('#mail1').next().text('*')
    }
    if(mail2 ==' '){
        $('#mail2').next().text('richiesto')
        isValid=false;
    }else{
        $('#mail2').next().text('*')
    }
    if(mail1 == mail2){
        $('#mail2').next().text('gli indirizzi non corrispondo')
        isValid=false;
    }else{
        $('#mail2').next().text('*')
    }
    if(isValid){

    }
})


//versione due

let campi = $('#form-email input[type=text]')