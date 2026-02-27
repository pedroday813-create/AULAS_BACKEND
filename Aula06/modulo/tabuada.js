/********************************************************************************
 * Objetivo? Arquivo responsavel por gerar a tabuada de um numero
 * data:25/02/2026
 * nome: Pedro Rodrigues
 * Versao: 1.0
 ********************************************************************************/

const calculosMatematicos = require('./calcular.js')

// Funcao para inprimir a tabuada usando o While
const gerarTabuada = function (tabuada) {
    //recebe tabuada a ser gerada
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    //repeticao para gerar a tabuada do numero escolhido
    while (cont <= 10) {
        //chama a funcao de multiplicar para realizar a operacao
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)

        cont += 1
    }
}
gerarTabuada(1)

const gerarTabuadaFor = function (tabuada) {
    //recebe tabuada a ser gerada
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    //repeticao para gerar a tabuada do numero escolhido
    for(let cont = 0; cont <= 10; cont++){
        //chama a funcao de multiplicar para realizar a operacao
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    }
}
gerarTabuadaFor(1,2)