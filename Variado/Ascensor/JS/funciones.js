function empezar() {
    crearBotones();
    let pisos = 0;
    while (pisos < 1 || pisos > 8) {
        pisos = parseInt(prompt("Nº de pisos (1-8): "));
    }
    crearPlantas(pisos);
    cambiarIndicador();
}

function crearBotones() {
    //Conseguimos al padre que tendrá el div de los botones (body)
    let padre = document.querySelector("body");
    let divBotones = document.createElement("div");
    divBotones.id = "botones";
    padre.appendChild(divBotones);

    //Creamos los dos botones que van dentro del div "botones" que acabamos de crear
    let primerBoton = document.createElement("input");
    primerBoton.type = "button";
    primerBoton.value = "Llamar ascensor";
    primerBoton.disabled = true;
    primerBoton.onclick = function () {
        llamar(primerBoton,segundoBoton);
    }
    let segundoBoton = document.createElement("input");
    segundoBoton.type = "button";
    segundoBoton.value = "apagar";
    segundoBoton.disabled = true;

    segundoBoton.onclick = function () {
        apagar();
    }

    divBotones.appendChild(primerBoton);
    divBotones.appendChild(segundoBoton);

}

function crearPlantas(numPisos) {
    //Guardamos el ascensor (padre) y creamos el bucle para añadir tantas plantas como ha indicado el ususario
    let ascensor = document.getElementById("ascensor");
    for (let i = numPisos; i >= 1; i--) {
        let planta = document.createElement("div");
        planta.className = "planta";
        planta.textContent = i;
        ascensor.appendChild(planta);
        //Condición si el bucle llega al 1, cambia el fondo de la primera planta y la identifica (plantaActual)
        if (i == 1) {
            planta.style.backgroundColor = "yellow";
            planta.style.border = "solid 1px black";
            planta.id = "plantaActual";
        }
    }

    let botones  = document.getElementsByTagName("input");
    botones[0].disabled = false;
}





function cambiarIndicador() {
    let indicador = document.getElementById("indicador");
    let hijosIndicador = indicador.children;
    console.log(hijosIndicador);
    let plantas = document.getElementsByClassName("planta");
    for (const planta of plantas) {
        if (planta.getAttribute("id") == "plantaActual") {
            hijosIndicador[0].innerHTML = planta.textContent;
            hijosIndicador[1].innerHTML = "parado";
        }
    }
}


function llamar(primerBoton, segundoBoton){
    let plantas = document.getElementsByClassName("planta");
    segundoBoton.disabled = false;
    let opcion = parseInt(prompt("¿A qué planta quiere ir?"));

    if(opcion < 1){
        plantas[plantas.length - 1];
    }


}
