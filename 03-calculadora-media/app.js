"use scrict"

function validarQuantidadeDeNumero(nota1, nota2, nota3){
    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
        return false;
    }   
}

function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3; 
}

function difinirStatusDoAluno(media){
    let resultado 

    if(media >= 7){
        resultado = "Aprovado"
    } else if(media >= 5){
        resultado = "Recuperação"
    }else{
        resultado = "Reprovado"
    }

    return resultado
}

function removerClasses(){
    document.getElementById("resultado").classList.remove("aprovado", "recuperacao", "reprovado")
}

function handleClick(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let resultado = document.getElementById("resultado")

    if(validarQuantidadeDeNumero(nota1, nota2, nota3) === false){
        alert("Por favor, insira notas válidas entre 0 e 10.")
    }else{
        let media = calcularMedia(nota1, nota2, nota3)
        let statusDoAluno = difinirStatusDoAluno(media)

        resultado.textContent = `Média: ${media.toFixed(2)} - Status: ${statusDoAluno}`

        removerClasses()

        if(statusDoAluno === "Recuperação"){
            statusDoAluno = "recuperacao"
        }

        resultado.classList.add(statusDoAluno.toLocaleLowerCase())
    }
}
