let primoSelettore: any = document.getElementById('regioni');

fetch('regioni.json')
    .then(response => response.json())
    .then(regioni => {
        //console.table(regioni)

        regioni.forEach((e: any) => {

            let riga = document.createElement('option')

            primoSelettore.append(riga);

            riga.innerText = e.prov_regione;
        });
    })


//console.log(regione)

let secondoSelettore: any = document.getElementById('province');
fetch('province.json')
    .then(response => response.json())
    .then(province => {
        //console.table(province)
        
        primoSelettore.addEventListener('click', function () {
            let regione: string = primoSelettore.value
            secondoSelettore.querySelectorAll('option').forEach((c:any)=>{
                c.remove()
            })
           
            for (var i = 0; i < province.length; i++) {
                //console.log(province[i].prov_reg)

                if (province[i].prov_reg == regione) {
                    let riga = document.createElement('option')
                    secondoSelettore.append(riga);
                    riga.innerText = province[i].prov_nome;

                    let primaImg:any = document.getElementById('imgReg')
                    primaImg.setAttribute('src',province[i].prov_url)
                }
            }
        })
 

        secondoSelettore.addEventListener('click', function () {
            let provinciaSelezionata = secondoSelettore.value
            console.log(province)
            
            let selezione = province.find((prov: any) => prov.prov_nome == provinciaSelezionata)
            
            //console.log(selezione)
            
            let secondaImg:any = document.getElementById('imgPro')
            secondaImg.setAttribute('src','province/' + provinciaSelezionata+'.png')
                                    
        })
        
    })




    class province {
        prov_it: string
        prov_nome: string
        prov_reg: string
        prov_url: URL
    
        constructor(prov_it: string, prov_nome: string, prov_reg: string, prov_url: URL) {
            this.prov_it = prov_it;
            this.prov_nome = prov_nome;
            this.prov_reg = prov_reg;
            this.prov_url = prov_url;
        }
    }
    
  //  let prov: string = selezione.prov_nome
   // let reg: string = selezione.prov_reg
   // 
   // let imgProv= document.createElement('img src="province/' + prov + '.png" ')
   // let imgReg = document.createElement('img src="regioni/' + reg + '.png"" ')
   // let box: any = document.getElementById('display')
   // let box2: any = document.getElementById('display2')
   // 
   // box2.append(imgProv)
  //  box2.append(imgReg)
    //let provinciaSlezionata = province.find((regione: any) => regione[i].prov_reg == regione)
    //provinciaSlezionata = province[i].prov_reg
                // let posizione: number = province.indexOf((regione: any) => regione[i].prov_reg == regione)

                //let eliminata = province.splice(posizione, 1);

                // ProvSelezionate.push(provinciaSlezionata)

                //ProvSelezionate.forEach((p: any) => {

            //    //let dove = new province(e.prov_it, e.prov_nome, e.prov_reg, e.prov_url)
            //    let riga = document.createElement('option')
            //
            //    secondoSelettore.append(riga);

            //    riga.innerText = p.prov_nome;
            // });
