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
    if (numeroGuardado === 0 || numeroGuardado === ""){
        numeroGuardado = parseInt(numeroTexto)
        numeroTexto = ""
    }else{
        numeroTexto = ""
    }
    const cajaTexto = document.getElementById("texto") 
    cajaTexto.value = "" 
    operacionRealizada = "+" 
}

function restarOnClick(){
    if (numeroTexto !== "") {
        numeroGuardado = parseInt(numeroTexto);
    }
    numeroTexto = "";
    document.getElementById("texto").value = "";
    operacionRealizada = "-";
}

function multiOnClick(){
    if (numeroGuardado === 0 || numeroGuardado === ""){
        numeroGuardado = parseInt(numeroTexto)
        numeroTexto = ""
    }else {
        numeroTexto = ""
    }
    const cajaTexto = document.getElementById("texto") 
    cajaTexto.value = "" 
    operacionRealizada = "*" 
}

function COnClick(){
    numeroGuardado = 0
    numeroTexto = ""
    operacionRealizada = ""
    const cajaTexto = document.getElementById("texto")
    cajaTexto.value = ""
}

function igualOnClick(){ 
    const cajaTexto = document.getElementById("texto") 
    if (operacionRealizada === "+"){ 
        const resultado = parseInt(numeroGuardado) + parseInt(numeroTexto) 
        cajaTexto.value = resultado 
        numeroGuardado = resultado 
    } 
    if (operacionRealizada === "-"){ 
        const resultado = parseInt(numeroGuardado) - parseInt(numeroTexto) 
        cajaTexto.value = resultado 
        numeroGuardado = resultado 
    } 
    if (operacionRealizada === "*"){ 
        const resultado = parseInt(numeroGuardado) * parseInt(numeroTexto) 
        cajaTexto.value = resultado 
        numeroGuardado = resultado 
    } 
    console.log(numeroGuardado)
    numeroTexto = "" 
    operacionRealizada = "" 
}