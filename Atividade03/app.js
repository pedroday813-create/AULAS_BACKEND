/*******************************************************************
 * Objetivo: Pedir Dados do usuario
 * Data: 27/02/2026
 * Nome: pedro rodrigues
 * versap: 1.0
 *******************************************************************/


//importa a biblioteca para entrada de dados
const readline = require('readline')

//criação da interface para entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//Pedrir os dados do usuario
entradaDados.question('Digite o seu nome: ', function (nome) {
    let nomeUsuario = nome

    entradaDados.question('Digite a sua idade: ', function (idade) {
        let idadeUsuario = idade

        entradaDados.question('Digite seu sexo: ', function (sexo) {
            let sexoUsuario = sexo

            entradaDados.question('Digite o peso: ', function (peso) {
                let pesoUsuario = peso

                entradaDados.question('Digite a altura: ', function (altura) {
                    let alturaUsuario = altura

                    //importação do modulo para calculo do imc
                    const calculoIMC = require('./modulo/calcular.js')

                    let resposta = calculoIMC.calcularIMC(pesoUsuario, alturaUsuario)

                    //verificação das entradas de dados do usuario
                    console.log('\nResultado:')
                    console.log(resposta)

                    entradaDados.close()
               
                })//altura
            
            })//peso
       
        })//sexo
    
    })//idade

})//nome

//Fim do programa