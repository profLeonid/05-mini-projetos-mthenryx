"use strict"

function calcularIMC(altura, peso){
    return peso / (altura * altura)
}

function removerClasses(){
    document.getElementById("resultado")
        .classList.remove("abaixo-do-peso", "peso-normal", "sobrepeso", "obesidade-grau-1", "obesidade-grau-2", "obesidade-grau-3")
}

function classificarIMC(imc){
    let resultado

    if(imc < 18.5){
        resultado = "Abaixo do peso"
    }else if(imc >= 18.5 && imc < 25){
        resultado = "Peso normal"
    }else if(imc >= 25 && imc < 30){
        resultado = "Sobrepeso"
    }else if(imc >= 30 && imc < 35){
        resultado = "Obesidade grau I"
    }else if(imc >= 35 && imc < 40){
        resultado = "Obesidade grau II"
    }else{
        resultado = "Obesidade grau III"
    }

    return resultado
}

function retornarCor(classificacao){
    let classe 

    if(classificacao === "Abaixo do peso"){
        classe = "abaixo-do-peso"
    }else if(classificacao === "Peso normal"){
        classe = "peso-normal"
    }else if(classificacao === "Sobrepeso"){
        classe = "sobrepeso"
    }else if(classificacao === "Obesidade grau I"){
        classe = "obesidade-grau-1"
    }else if(classificacao === "Obesidade grau II"){
        classe = "obesidade-grau-2"
    }else{
        classe = "obesidade-grau-3"
    }

    return classe
}

function handleClick(){
    let altura      = Number(document.getElementById("altura").value)
    let peso        = Number(document.getElementById("peso").value)
    let nome        = document.getElementById("nome").value
    let imc         = calcularIMC(altura, peso)
    let classificao = classificarIMC(imc)
    let cor         = retornarCor(classificao)
    let resultado   = document.getElementById("resultado")

    resultado.textContent = `${nome} seu IMC é ${imc.toFixed(2)} (${classificao})`

    removerClasses()

    resultado.classList.add(cor)
}