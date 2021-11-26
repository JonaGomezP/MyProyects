var timer;

//Cuando se recarga la página crea un efecto de fondo y el botón para comenzar a jugar
window.onload = function () {
    timer = setInterval("animarLogo()", 10000);


    //Creo la opacidad de fondo al recargar la página donde se muestran los botones de "jugar" y las dificultades
    let padre = document.querySelector("body");
    var opacidadFondo = document.createElement("div");
    opacidadFondo.style.zIndex = "1";
    opacidadFondo.style.backgroundColor = "black";
    opacidadFondo.style.opacity = "0.5";
    opacidadFondo.style.width = padre.offsetWidth + "px";
    opacidadFondo.style.minWidth = window.innerWidth + "px";
    opacidadFondo.style.minHeight = window.innerHeight + "px";
    opacidadFondo.style.position = "aboslute";
    opacidadFondo.style.top = "0";
    opacidadFondo.style.left = "0";
    opacidadFondo.style.display = "flex";
    opacidadFondo.style.justifyContent = "center";
    opacidadFondo.style.alignItems = "center";
    opacidadFondo.style.flexDirection = "column";

    padre.insertBefore(opacidadFondo, padre.firstChild);




    //Guardamos el section
    let seccion = document.querySelector("section");
    seccion.style.width = padre.offsetWidth + "px";
    seccion.style.height = padre.offsetHeight + "px";



    let boton = document.createElement("input");
    boton.onclick = function () {
        elegirDificultad();
    }
    boton.onmouseover = function () {
        boton.style.backgroundColor = "#95c9ef";
        boton.style["-webkit-transition"] = "-webkit-transform 500ms linear";
        boton.style["-webkit-transform"] = "scale(1.2)";
        boton.style["transform"] = "transform:scale(1.2)";
    }
    boton.onmouseout = function () {
        boton.style.backgroundColor = "#c0e66f";
        boton.style["-webkit-transition"] = "-webkit-transform 500ms linear";
        boton.style["-webkit-transform"] = "scale(0.8)";
        boton.style["transform"] = "transform:scale(0.8)";
    }


    boton.value = "!JUGAR¡";
    boton.type = "submit";
    boton.position = "absolute";
    boton.style.fontSize = "66px";
    boton.style.backgroundColor = "#c0e66f";
    boton.style.filter = "drop-shadow(1px 1px 0.75rem #95c9ef)";
    boton.style.boxShadow = "5px 10px"
    boton.zIndex = "2";
    opacidadFondo.appendChild(boton);
}

//Funcion que anima el logo
function animarLogo() {
    let logo = document.getElementById("logo");
    if (logo.getAttribute("class") == "primerGiro") {
        logo.className = "segundoGiro";
    } else {
        logo.className = "primerGiro";

    }
}



//Funcion que crea 3 botones para elegir la dificultad
function elegirDificultad() {
    let fondo = document.querySelector("div");
    fondo.removeChild(fondo.firstChild);
    for (let i = 1; i <= 3; i++) {
        let dificultad = document.createElement("input");
        switch (i) {
            case 1:
                dificultad.value = "!FÁCIL¡";
                dificultad.name = "facil";
                break;
            case 2:
                dificultad.value = "!MEDIO¡";
                dificultad.name = "medio";

                break;
            case 3:
                dificultad.value = "!DIFÍCIL¡";
                dificultad.name = "dificil";
                break;
        }
        dificultad.type = "submit";
        dificultad.onclick = function () {
            jugar(dificultad.getAttribute("name"));
        }
        dificultad.onmouseover = function () {
            dificultad.style.backgroundColor = "#95c9ef";
            dificultad.style["-webkit-transition"] = "-webkit-transform 500ms linear";
            dificultad.style["-webkit-transform"] = "scale(1.2)";
            dificultad.style["transform"] = "transform:scale(1.2)";
        }
        dificultad.onmouseout = function () {
            dificultad.style.backgroundColor = "#d7c199";
            dificultad.style["-webkit-transition"] = "-webkit-transform 500ms linear";
            dificultad.style["-webkit-transform"] = "scale(0.8)";
            dificultad.style["transform"] = "transform:scale(0.8)";
        }

        dificultad.position = "absolute";
        dificultad.style.fontSize = "66px";
        dificultad.style.backgroundColor = "#d7c199";
        dificultad.style.filter = "drop-shadow(1px 1px 0.75rem #95c9ef)";
        dificultad.style.boxShadow = "5px 10px"
        dificultad.style.margin = "25px 0";
        dificultad.zIndex = "2";
        fondo.appendChild(dificultad);
    }

    //Crea la matriz en función de la dificultad elegida
    function jugar(modo) {
        
        //Guardamos los elementos body y section
        let padre = document.querySelector("body");
        let seccion = document.querySelector("section")
        //Elimina el primer hijo del body (efecto y botones de dificultad) cuando le damos a jugar
        padre.removeChild(padre.firstChild);

        //Creo un nuevo elemento para el contador de parejas encontradas
        let contadorParejas = document.createElement("div");
        contadorParejas.id = "contador";
        contadorParejas.style.position = "fixed";
        contadorParejas.style.right = "0";
        contadorParejas.style.marginRight = "40px";
        // contadorParejas.style.lineHeight = padre.offsetHeight + "px";
        contadorParejas.style.backgroundColor = "black";
        contadorParejas.style.display = "inline-flex";
        contadorParejas.style.width = "auto";
        contadorParejas.style.maxWidth = "250px"
        contadorParejas.style.height  ="auto";
        contadorParejas.style.color = "white";
        contadorParejas.style.padding = " 5px";
        contadorParejas.style.borderRadius = "10px";
        padre.appendChild(contadorParejas);
        

        let divParejas = document.createElement("div");
        divParejas.className = "divContador";
        contadorParejas.appendChild(divParejas);
        let tituloParejas = document.createElement("h3");
        tituloParejas.className = "tituloContador";
        tituloParejas.textContent = "Parejas";
        tituloParejas.style.borderRight = "solid 1px white";
        tituloParejas.style.paddingRight = "15px";
        divParejas.appendChild(tituloParejas);
        let marcadorParejas = document.createTextNode("");
        marcadorParejas.id = "marcadorParejas";
        divParejas.appendChild(marcadorParejas);


        let divEncontradas = document.createElement("div");
        divEncontradas.className = "divContador";
        contadorParejas.appendChild(divEncontradas);
        let tituloEncontradas = document.createElement("h3");
        tituloEncontradas.className = "tituloContador";
        tituloEncontradas.textContent = "Encontradas";
        divEncontradas.appendChild(tituloEncontradas);
        let marcadorEncontradas = document.createTextNode(0);
        marcadorEncontradas.id = "marcadorEncontradas";
        divEncontradas.appendChild(marcadorEncontradas);



        //Creamos la tabla y le damos algún estilo
        let tabla = document.createElement("table");
        tabla.style.width = "900px";
        tabla.style.height = "700px";
        tabla.style.maxHeight = "100vh"
        tabla.style.position = "relative";
        tabla.style.borderSpacing = "5px";
        tabla.style.borderCollapse = "separate"
        tabla.zIndex = "1";
        let filas = document.getElementsByTagName("tr");
        //Añadimos la tabla al section
        seccion.appendChild(tabla)

        //Creo un array que donde voy a guardar el número de la imagen. El tamaño de este array será en función al modo y genero la mitad de números aleatorios y la otra mitad se rellena en base a los primeros generados
        let fotos = new Array();

        //Creo un número que será el id de cada celda
        let identificadorCelda = 1;
        //Modo fácil (4x4)
        if (modo == "facil") {
            marcadorParejas.textContent = (4*4)/2;
            let contador = 0;
            
            for (let i = 0; i < 8; i++) {
                let aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                while (fotos.includes(aleatorio) == true) {
                    aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                }
                if ((!fotos.includes(aleatorio))) {
                    for (let i = 0; i < 2; i++) {
                        fotos.push(aleatorio);
                    }
                }
            }
            for (let i = 0; i < 4; i++) {
                var fila = document.createElement("tr");
                tabla.appendChild(fila);
                for (let j = 0; j < 4; j++) {
                    let celda = document.createElement("td");
                    celda.className = "celdaOculta";
                    celda.id = identificadorCelda;
                    identificadorCelda ++;
                    filas[i].appendChild(celda);

                    let aleatorio = parseInt(Math.round((Math.random() * (fotos.length - 1))));
                    let elemento = fotos[aleatorio];
                    let carta = document.createElement("img");
                    carta.style.lineHeight = celda.offsetHeight + "px";
                    carta.style.position = "absolute";
                    carta.style.top = "0";
                    carta.style.objectFit = "contains";
                    carta.src = "../IMG/" + elemento + ".png";
                    carta.className = "carta";
                    carta.hidden = false;
                    celda.appendChild(carta);
                    fotos.splice(aleatorio, 1);

                    celda.onclick = function () {
                        mostrarCarta(celda);
                    }
                    
                }
            }
            //Modo medio (6x4)
        } else if (modo == "medio") {
            marcadorParejas.textContent = (4*6)/2;
            let contador = 0;
            //Creo un array que donde voy a guardar el número de la imagen. El tamaño de este array será en función al modo y genero la mitad de números aleatorios y la otra mitad se rellena en base a los primeros generados
            let fotos = new Array();
            for (let i = 0; i < 12; i++) {
                let aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                while (fotos.includes(aleatorio) == true) {
                    aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                }
                if ((!fotos.includes(aleatorio))) {
                    for (let i = 0; i < 2; i++) {
                        fotos.push(aleatorio);
                    }
                }
            }
            for (let i = 0; i < 4; i++) {
                var fila = document.createElement("tr");
                tabla.appendChild(fila);
                for (let j = 0; j < 6; j++) {
                    let celda = document.createElement("td");
                    celda.className = "celdaOculta";

                    filas[i].appendChild(celda);

                    let aleatorio = parseInt(Math.round((Math.random() * (fotos.length - 1))));
                    let elemento = fotos[aleatorio];
                    let carta = document.createElement("img");
                    carta.style.lineHeight = celda.offsetHeight + "px";
                    carta.style.position = "absolute";
                    carta.style.top = "0";
                    carta.style.objectFit = "contains";
                    carta.src = "../IMG/" + elemento + ".png";
                    carta.className = "carta";
                    carta.hidden = false;
                    celda.appendChild(carta);
                    fotos.splice(aleatorio, 1);
                    celda.onclick = function () {
                        mostrarCarta(celda);
                    }

                }
            }
            //Modo difícil (6x6)
        } else {
            marcadorParejas.textContent = (6*6)/2;
            let contador = 0;
            //Creo un array que donde voy a guardar el número de la imagen. El tamaño de este array será en función al modo y genero la mitad de números aleatorios y la otra mitad se rellena en base a los primeros generados
            let fotos = new Array();
            for (let i = 0; i < 18; i++) {
                let aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                while (fotos.includes(aleatorio) == true) {
                    aleatorio = parseInt(Math.round((Math.random() * 17) + 1));
                }
                if ((!fotos.includes(aleatorio))) {
                    for (let i = 0; i < 2; i++) {
                        fotos.push(aleatorio);
                    }
                }
            }

            for (let i = 0; i < 6; i++) {
                var fila = document.createElement("tr");
                tabla.appendChild(fila);
                for (let j = 0; j < 6; j++) {
                    let celda = document.createElement("td");
                    // celda.style.border = "solid 0.5px black";
                    celda.className = "celdaOculta";
                    filas[i].appendChild(celda);

                    let aleatorio = parseInt(Math.round((Math.random() * (fotos.length - 1))));
                    let elemento = fotos[aleatorio];
                    let carta = document.createElement("img");
                    carta.style.lineHeight = celda.offsetHeight + "px";
                    carta.style.position = "absolute";
                    carta.style.top = "0";
                    carta.style.objectFit = "contains";
                    // carta.src = "../IMG/" + elemento + ".png";
                    carta.className = "carta";
                    celda.appendChild(carta);
                    fotos.splice(aleatorio, 1);
                    celda.onclick = function () {
                        mostrarCarta(celda);
                    }
                }
            }
        }

    }


    function mostrarCarta(celda, numFoto) {
        celda.style["-webkit-transition"] = "-webkit-transform 500ms linear";
        celda.style["-webkit-transform"] = "rotateY(180deg)";
        celda.style["rotate"] = "transform:rotateY(180deg)";;
        celda.style.backgroundImage = "URL(../IMG/" + numFoto + "7png')";
        celda.className = "celdaMostrada";

        let cartaActiva = celda.firstChild;
        cartaActiva.style.visibility = "visible";

        comprobarCarta(celda);

    }


    function comprobarCarta(celda){
        let cartaActiva = celda;
        let cartasTotales = document.getElementsByTagName("td");
        for (let i = 0; i < cartasTotales.length; i++) {
            if((cartaActiva.id != cartasTotales[i].id) || (cartaActiva.src == cartasTotales[i].src)){

            }
            
        }
 }
    function ocultarCarta (){
        let cartasTotales = document.getElementsByTagName("td");
        for (const cartaMostrada of cartasTotales) {
            
        }

    }
}