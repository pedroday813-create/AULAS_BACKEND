/******************************************************************************
 * Objetivo: entrada de dados para o sistema de gerenciamento de numeros inpares e pares
 * data: 05/03/2026
 * nome: Pedro Rodrigues Cruz
 * Versao: 1.0
 *******************************************************************************/


const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero inicial: ', function (numero) {
    let numeroInicial = Number(numero)

    entradaDados.question('Digite o numero final: ', function (numero) {
     let numeroFinal = Number(numero)

        entradaDados.question('Deseja calcular os numeros Inpares? (S/N) ', function (resposta) {
         let respostaInpares = resposta.toUpperCase()

            entradaDados.question('Deseja calcular os numeros Pares? (S/N) ', function (resposta) {
             let respostaPares = resposta.toUpperCase()

                const calculo = require('./modulo/calculo')
                calculo.calcularNumeros(numeroInicial, numeroFinal, respostaInpares, respostaPares)

                entradaDados.close()
            })
        
        })
    })
})