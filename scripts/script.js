/*======================Botão Mostrar/Ocultar Mapa===================================*/

const buttonClicked = document.querySelector(`#mostramap`);
const mapshow = document.querySelector('#iframap');
let counter = 0;

buttonClicked.addEventListener("click", () => {
    counter++
    let counterPar = counter % 2 == 0;

    if (counterPar === false)
    {
     mapshow.style.display = "block";
     document.querySelector("#botao").innerHTML = "Ocultar Mapa";
    }
    else
    {
    mapshow.style.display = "none";
    document.querySelector("#botao").innerHTML = "Mostrar Mapa";
    };
;
});


/*======================Botão compartilhar  contato===================================*/

document.querySelector("#share-by").addEventListener("click", () =>{
   let vcard = new VCard;
   vcard.firstName = 'Suporte Técnico'
   vcard.lastName = 'A2pro Tec Automotiva'
 const content = vcard.getFormattedString();
 const blob = new Blob([content], {type: 'text/vcard'});

 navigator.share({
    title: "Compartilhar Contato Suporte Técnico",
    text: "A2Pro Tecnologia Automotiva",
    contacts: [blob]
 })
})




