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
    if ('contacts' in navigator)
    {
        navigator.contacts.select(['Suporte Tecnico A2Pro', '+558596861306']).then((contacts) =>{
            navigator.share({
                title: "compartilhar Contato",
                text: "Suporte Tecnico A2Pro",
                contacts: contacts
            });
        
        });
         }else{
            alert('API "WEB Contacts" avegador não suportada pelo navegador');
         }
})




