var timer;
window.onload = function (){
    timer = setInterval(moverLogo(), 30000);
    var padre = document.querySelector("body");
    let opacidadFondo = document.createElement("div");
    opacidadFondo.style.zIndex = "1";
    opacidadFondo.style.backgroundColor = "black";
    opacidadFondo.style.opacity = "0.5";
    opacidadFondo.style.minWidth = window.innerWidth + "px";
    opacidadFondo.style.minHeight = window.innerHeight + "px";
    opacidadFondo.style.position = "aboslute";
    opacidadFondo.style.top = "0";
    opacidadFondo.style.left = "0";
    opacidadFondo.style.display = "flex";
    opacidadFondo.style.justifyContent = "center";
    opacidadFondo.style.alignItems = "center";

    padre.insertBefore(opacidadFondo,padre.firstChild);

    let boton = document.createElement("input");
    boton.setAttribute("onclick","jugar()");
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

function jugar(){
    let padre = document.querySelector("body");
    padre.removeChild(padre.firstChild);

    
}

function moverLogo(){
    let logo = document.querySelector("img");
    let estilos = window.getComputedStyle(logo);
    logo.style.transform = "rotate(Y)";
}