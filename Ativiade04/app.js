/*********************************************************************
 * Objetivo: Arquivo resolsavel pelas entradas e saidas de dados da aplicacao
 * data: 27/02/2026
 * nome: Pedro Rodrigues
 * versao: 1.0
 **********************************************************************/


const readline = require('readline')

//importa a biblioteca para entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Pedir os dados do usuario
entradaDados.question('Nome do aluno: ', function (nome) {
    let nomeUsuario = nome

    entradaDados.question('Idade do aluno: ', function (professor) {
        let nomeProfessor = professor

        entradaDados.question('Sexo do aluno: ', function (sexo) {
            let sexoProfessor = sexo

            entradaDados.question('Peso do aluno: ', function (curso) {
                let nomeCurso = curso

                entradaDados.question('Altura do aluno: ', function (dicsiplina) {
                    let nomeDisciplica = dicsiplina

                    entradaDados.question('Digite a nota 1: ', function (nota) {
                        let nota1 = nota

                        entradaDados.question('Digite a nota 2: ', function (nota) {
                            let nota2 = nota

                            entradaDados.question('Digite a nota 3: ', function (nota) {
                                let nota3 = nota

                                entradaDados.question('Digite a nota 4: ', function (nota) {

                                    //importe da biblioteca para calculos matematicos
                                    const notaAlunos = require('./modulo/calculos.js')
                                    let nota4 = nota

                                    //importação do modulo para calculo da media
                                    let resposta = notaAlunos.calcularMedia(nota1, nota2, nota3, nota4, nomeUsuario, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplica)

                                    console.log('\nResultado:')
                                    console.log(resposta)




                                    //fechamento da interface de entrada de dados
                                    entradaDados.close()
                                
                                })//nota4
                           
                            })//nota3 
                       
                        })//nota2  
                    
                    })//nota1
               
                })//disciplina
            
            })//altura
       
        })//sexo do professor
    
    })//professor

})//nome

//Fim do programa

