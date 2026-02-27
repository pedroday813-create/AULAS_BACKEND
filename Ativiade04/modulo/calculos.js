/************************************************************************
 * Objetivo: Arquivo resolsavel pelas entradas e saidas de dados da aplicacao
 * data: 27/02/2026
 * nome: Pedro Rodrigues
 * versoa: 1.0
 *************************************************************************/



//importa a biblioteca para entrada de dados

const entradaDados = function (nomeCurso, nomeDisciplica, nomeProfessor, nomeUsuario, sexoProfessor, nota1, nota2, nota3, nota4) {
   
    if (nomeCurso == '' || nomeDisciplica == '' || nomeProfessor == '' || nomeUsuario == '' || sexoProfessor == '' || 
        
        nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        return false


    }if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        return 'Valor inválido. Digite um valor entre 0 e 100.'
    }
}


const calcularIMC = function (nota1, nota2, nota3, nota4) {

    nota1 = parseFloat(alturaUsuario.toString().replace(',', '.'));
    nota2 = parseFloat(pesoUsuario.toString().replace(',', '.'));
    nota3 = parseFloat(alturaUsuario.toString().replace(',', '.'));
    nota4 = parseFloat(pesoUsuario.toString().replace(',', '.'));


    if (nota1 < 50 || nota2 < 50 || nota3 < 50 || nota4 < 50) {
        return 'Reprovado';
    } else if ((nota1 >= 50 && nota1 <= 69) || (nota2 >= 50 && nota2 <= 69) || (nota3 >= 50 && nota3 <= 69) || (nota4 >= 50 && nota4 <= 69)) {
        return 'Exame';
    } else if (nota1 >= 70 && nota2 >= 70 && nota3 >= 70 && nota4 >= 70) {
        return 'Aprovado';
    } else {
        return 'Erro nos dados fornecidos.';
    }

    



}






module.exports = {
    entradaDados,
    notaAlunos,
    calcularMedia
}

