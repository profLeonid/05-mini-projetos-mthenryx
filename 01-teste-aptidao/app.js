"use scrict"

function removerClasses(){
    const resultado = document.getElementById("resultado")

    resultado.classList.remove("apto")
    resultado.classList.remove("nao-apto")
}

function avaliar(){
    const tempo = document.getElementById("tempo")
    const resultado = document.getElementById("resultado")

    if(tempo.value < 14){
        resultado.textContent = "Parabéns, você é apto."
        removerClasses()
        resultado.classList.add("apto")
    }else{
        resultado.textContent = "Infelizmente, você não é apto."
        resultado.classList.add("nao-apto")
    }              
}