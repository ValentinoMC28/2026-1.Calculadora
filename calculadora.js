let numeroTexto = ""
let numeroGuardado = 0
let operacionRealizada = ""
function numeroOnclick(numero){
    console.log(numero)
    const cajaTexto = document.getElementById("texto")
    numeroTexto = cajaTexto.value + numero
    cajaTexto.value = numeroTexto
}

function sumarOnClick(){
    numeroGuardado = numeroTexto
    numeroTexto = ""
    const cajaTexto = document.getElementById("texto")
    cajaTexto.value = ""
    operacionRealizada = "+"
}

function igualOnClick(){
    const cajaTexto = document.getElementById("texto")
    if (operacionRealizada === "+"){
        const resultado = parseInt(numeroGuardado) + parseInt(numeroTexto)
        cajaTexto.value = resultado
    }
    numeroGuardado = ""
    numeroTexto = ""
    operacionRealizada = ""
}