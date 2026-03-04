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

    entradaDados.question('Sexo do Aluno(a): ', function (idade) {
        let sexoUsuario = idade

        entradaDados.question('nome professor(a): ', function (professor) {
         let nomeProfessor = professor

            entradaDados.question('Sexo do professor(a): ', function (sexo) {
             let sexoProfessor = sexo

                entradaDados.question('nome do curso: ', function (curso) {
                let nomeCurso = curso

                    entradaDados.question('nome da disciplica: ', function (dicsiplina) {
                     let nomeDisciplica = dicsiplina

                        entradaDados.question('Digite a nota 1: ', function (nota) {
                         let nota1 = nota

                             entradaDados.question('Digite a nota 2: ', function (nota) {
                             let nota2 = nota

                                entradaDados.question('Digite a nota 3: ', function (nota) {
                                 let nota3 = nota

                                    entradaDados.question('Digite a nota 4: ', function (nota) {
                                        let nota4 = nota

                                        //importe da biblioteca para calculos matematicos
                                        const notaAlunos = require('./modulo/calculos.js')
                                

                                        
                                        let resultado = notaAlunos.calcularMedia(
                                            nota1, nota2, nota3, nota4,
                                            nomeUsuario, nomeProfessor,
                                            sexoProfessor, sexoUsuario
                                        )
                                        
                                        if (resultado.erro) {
                                            console.log(resultado.erro)
                                            entradaDados.close()
                                            return
                                        }
                                        
                                        console.log('***************************************')
                                        console.log(`O aluno(a) ${resultado.nomeUsuario} obteve a média de ${resultado.media} na disciplina de ${nomeDisciplica}.`)
                                        console.log(`O curso é ${nomeCurso}`)
                                        console.log('Professor(a): ' + resultado.nomeProfessor)
                                        console.log('Notas do aluno: ' + nota1, nota2, nota3, nota4)
                                        console.log('média Final (Sem exame): ' + resultado.media)
                                        console.log(`media final do exame: ${resultado.status}`);
                                        
                                        
                                        // SE FOR EXAME → pedir nota extra
                                        if (resultado.status === 'EXAME') {
                                        
                                            entradaDados.question('Digite a nota do exame: ', function (notaExame) {
                                        
                                                notaExame = Number(notaExame)
                                        
                                                let mediaFinal = (Number(resultado.media) + notaExame) / 2
                                                mediaFinal = mediaFinal.toFixed(2)
                                        
                                                if (mediaFinal >= 50) {
                                                    console.log('Média Final: ' + mediaFinal)
                                                    console.log('Situação Final: APROVADO NO EXAME')
                                                } else {
                                                    console.log('Média Final: ' + mediaFinal)
                                                    console.log('Situação Final: REPROVADO NO EXAME')
                                                }
                                        
                                                console.log('***************************************')
                                                entradaDados.close()
                                            })
                                        
                                        } else {
                                            console.log('***************************************')
                                            entradaDados.close()
                                        }
                                
                                    })//nota4
                           
                                 })//nota3 
                       
                            })//nota2  
                    
                        })//nota1
               
                    })//disciplina
            
                })//altura
       
            })//sexo do professor
    
        })//professor
    })
})//nome

//Fim do programa

