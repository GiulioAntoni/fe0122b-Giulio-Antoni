// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 

    $( () => {
        $('#iscr-news').click(function(){
            //let convalida = $('input').val();
            let selezione = $("#nome").val();
            let mailo = $("#email-1").val();
            let maildopo = $("#email-2").val();
            if(selezione == false){
                $('#nome').next().text('*necessario')
            }else {
                $('#nome').next().text('')
            }
            if (mailo == false){
                $('#email-1').next().text('*necessario')
            }else {
                $('#email-1').next().text('')
            }
            if (maildopo == false){
                $('#email-2').next().text('*necessario')
            }else {
                $('#email-2').next().text('')
            }
            if(mailo != maildopo){
                $('#email-2').next().text('*le mail non coincidono')
            }
        });
            
            
            
            $('#pulisci-form').click(function (){
                $("#nome").val(' ');
                $("#email-1").val(' ');
                $("#email-2").val(' ');
            })
        
           
    })