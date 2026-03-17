"use strict"

function removerClasses(){
    const resultado = document.getElementById("resultado")

    resultado.classList.remove("desconto-medio")
    resultado.classList.remove("desconto-alto")
    resultado.classList.remove("desconto-baixo")
}

function calcularDesconto(){
    const valorDaCompra = Number(document.getElementById("preco").value)
    const desconto      = Number(document.getElementById("desconto").value)

    let economizou = valorDaCompra * desconto / 100
    let diferenca  = valorDaCompra - economizou

    exibirResultado(economizou, desconto, diferenca)
}

function limparInput(){
    document.getElementById("desconto").value = ""
    document.getElementById("preco").value = ""
}

function exibirResultado(economizou, descont, diferenca){
    let difer       = diferenca
    let economizado = economizou
    let desconto    = descont
    const exibir    = document.getElementById("resultado")
    
    if(desconto <= 5){
        exibir.textContent = `Você economizou R$${economizado.toFixed(2)} e o preço final é R$${difer.toFixed(2)}`
        removerClasses()
        exibir.classList.add("desconto-baixa")
    }else if(desconto > 5 && desconto <= 10){
        exibir.textContent = `Você economizou R$${economizado.toFixed(2)} e o preço final é R$${difer.toFixed(2)}`
        removerClasses()
        exibir.classList.add("desconto-medio")
    }else{
        exibir.textContent = `Você economizou R$${economizado.toFixed(2)} e o preço final é R$${difer.toFixed(2)}`
        removerClasses()
        exibir.classList.add("desconto-alta")
    }

    limparInput()
}

