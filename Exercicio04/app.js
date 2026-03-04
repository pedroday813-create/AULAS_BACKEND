/**************************************************************
 * objetivo: fazer a soma Fatorial
 * data: 04/03/2026
 * nome: Pedro Rodrigues 
 * versao: 1.0
 ***************************************************************/

const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite um numero para calcular o fatorial: ', function (numero) {
    let numero1 = Number(numero)

    const calculo = require('./modulo/calculos')
    calculo.calcularFatorial(numero1)

    

    entradaDados.close()
})