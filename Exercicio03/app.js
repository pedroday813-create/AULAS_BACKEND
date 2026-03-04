/***********************************************************************
 * Objetivo: Sistema de tabuada
 * Nome: Pedro Rodrigues
 * Data: 04/03/2026
 * versao: 1.0
 ************************************************************************/


const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Numero inicial: ', function (numero) {
 let numero1 = Number(numero)  

    entradaDados.question('Numero final: ', function (numero) {
     let numero2 = Number(numero)

        entradaDados.question('Qual o tipo de equação? ', function (resposta) {

            let tipoEquacao = resposta.toLowerCase()

           
            const calculos = require('./modulo/calculos')
            calculos.calcularTabuada(numero1, numero2, tipoEquacao)

            entradaDados.close()

                
        })
    })
})