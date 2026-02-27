/**************************************************
 * Objetivo: Arquivo resolsavel pelas entradas e saidas de dados da aplicacao
 * data: 20/02/2026
 * Autor: Pedro Rodrigues
 * versao: 1.0
 ****************************************************/


//importe da biblioteca para calculos matematicos
const calculosMatematicos = require('./modulo/calcular')

let resposta = calculosMatematicos.calcular(10, 5, 'somar')
let respostaSoma = calculosMatematicos.calcular(10, 5, 'dividir')

console.log(resposta)
console.log();