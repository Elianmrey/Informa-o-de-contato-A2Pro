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





