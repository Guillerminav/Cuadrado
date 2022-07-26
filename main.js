

let cuadrado = document.querySelector(".cuadrado")
let botonBorde = document.getElementById("boton-borde")
let botonSombra = document.getElementById("boton-sombra")
let botonTamaño = document.getElementById("boton-tamaño")




function cambiarColor() {
    let botonColor = document.getElementById("boton-color").value
    cuadrado.style.backgroundColor = botonColor
}


function cambiarBorde() {
    cuadrado.style.border = "solid 8px black"
}


function cambiarSombra() {
    cuadrado.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

function cambiarTamaño() {
    cuadrado.style.width = 100 + "px"
    cuadrado.style.height = 100 + "px"
}