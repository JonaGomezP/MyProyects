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
        llamar(primerBoton, segundoBoton);
    }
    let segundoBoton = document.createElement("input");
    segundoBoton.type = "button";
    segundoBoton.value = "apagar";
    segundoBoton.disabled = true;

    segundoBoton.onclick = function () {
        apagar(primerBoton,segundoBoton);
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

    let botones = document.getElementsByTagName("input");
    botones[0].disabled = false;
}


function cambiarIndicador() {
    let indicador = document.getElementById("indicador");
    indicador.style.backgroundColor = "white";
    indicador.style.textAlign = "center";
    let hijosIndicador = indicador.children;
    let plantas = document.getElementsByClassName("planta");
    for (const planta of plantas) {
        if (planta.getAttribute("id") == "plantaActual") {
            hijosIndicador[0].innerHTML = planta.textContent;
            hijosIndicador[1].innerHTML = "Parado";
        }
    }
}


function llamar(primerBoton, segundoBoton) {

    let plantas = document.getElementsByClassName("planta");
    let indicador = document.getElementById("indicador");
    let hijosIndicador = indicador.children;
    segundoBoton.disabled = false;
    let plantaActual = document.getElementById("plantaActual");

    let opcion = parseInt(prompt("¿A qué planta quiere ir?"));
    if (opcion < 1) {
        plantaActual.style.backgroundColor = "white";
        plantaActual.style.border = "none";
        plantaActual.id = "";
        plantas[plantas.length - 1].style.backgroundColor = "yellow";
        plantas[plantas.length - 1].style.border = "solid 1px black";
        plantas[plantas.length - 1].id = "plantaActual";
        hijosIndicador[0].innerHTML = "1";
        hijosIndicador[1].innerHTML = "Parado";
    } else if (opcion > plantas.length) {
        plantaActual.style.backgroundColor = "white";
        plantaActual.style.border = "none";
        plantaActual.id = "";
        plantas[0].style.backgroundColor = "yellow";
        plantas[0].style.border = "solid 1px black";
        plantas[0].id = "plantaActual";
        hijosIndicador[0].innerHTML = plantas.length;
        hijosIndicador[1].innerHTML = "Parado";
    } else if (opcion == parseInt(plantaActual.textContent)) {
        indicador.style.backgroundColor = "orange";
        hijosIndicador[0].innerHTML = "";
        hijosIndicador[1].innerHTML = "PLANTA ACTUAL";
        setTimeout(cambiarIndicador, 5000);
    } else {
        if (opcion > parseInt(plantaActual.textContent) && opcion < plantas.length) {
            console.log("Subiendo desde la planta " + parseInt(plantaActual.textContent) + " a la planta " + opcion);
        } else{
            console.log("Bajando desde la planta " + parseInt(plantaActual.textContent) + " a la planta " + opcion);

        }
        plantaActual.style.backgroundColor = "white";
        plantaActual.style.border = "none";
        plantaActual.id = "";
        for (const elemento of plantas) {
            if (elemento.textContent == opcion) {
                elemento.style.backgroundColor = "yellow";
                elemento.style.border = "solid 1px black";
                elemento.id = "plantaActual";
            }
        }
        hijosIndicador[0].innerHTML = opcion;
        hijosIndicador[1].innerHTML = "Parado";
    }

}


function apagar(primerBoton, segundoBoton){
    let ascensor = document.getElementById("ascensor");
    let hijosIndicador = indicador.children;
    while(ascensor.firstChild){
        ascensor.removeChild(ascensor.firstChild);
    }

    hijosIndicador[0].innerHTML = "X";
    hijosIndicador[1].innerHTML = "Apagado";

    primerBoton.disabled = true;
    segundoBoton.disabled = true;

}


