function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalio(numero)) {
        elementoChute.innerHTML += '<div>Valor inválio</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=
        '<div>Valor inválido: Fale um número entre ${menorValor} ${maiorValor}</div>'
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${mumeroSecreto}</h3>`
    }else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O númeo secreto é menor <i class="fa-solid fa-down-long"></i> </div>`
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long></i></div>`
    }
} 





function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}