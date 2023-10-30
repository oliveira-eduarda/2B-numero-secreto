function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalio(numero)) {
        elementoChute.innerHTML += '<div>Valor inválio</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=
        '<div>Valor inválido: Fale um número entre ${menorValor} ${maiorValor}</div>'
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}