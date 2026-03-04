/************************************************************************
 * Objetivo: Arquivo responsável pelos cálculos da aplicação
 * data: 27/02/2026
 * nome: Pedro Rodrigues
 * versão: 1.1
 *************************************************************************/

const calcularMedia = function (
    nota1, nota2, nota3, nota4,
    nomeUsuario, nomeProfessor,
    sexoProfessor, sexoUsuario
) {

    // Converter para número
    nota1 = Number(nota1)
    nota2 = Number(nota2)
    nota3 = Number(nota3)
    nota4 = Number(nota4)

    // Validação
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        return { erro: 'Erro: notas inválidas.' }
    }

    if (
        nota1 < 0 || nota1 > 100 ||
        nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 ||
        nota4 < 0 || nota4 > 100
    ) {
        return { erro: 'Digite notas entre 0 e 100.' }
    }

    // Tratamento do sexo (AGORA CORRETO)
    if (sexoUsuario.toLowerCase() === 'masculino') {
        nomeUsuario = 'Aluno ' + nomeUsuario
    } else if (sexoUsuario.toLowerCase() === 'feminino') {
        nomeUsuario = 'Aluna ' + nomeUsuario
    }

    if (sexoProfessor.toLowerCase() === 'masculino') {
        nomeProfessor = 'Professor ' + nomeProfessor
    } else if (sexoProfessor.toLowerCase() === 'feminino') {
        nomeProfessor = 'Professora ' + nomeProfessor
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    media = media.toFixed(2)

    // Regras corretas
    if (media < 50) {
        return {
            media,
            status: 'REPROVADO',
            nomeUsuario,
            nomeProfessor
        }
    } 
    
    else if (media >= 50 && media <= 69) {
        return {
            media,
            status: 'EXAME',
            nomeUsuario,
            nomeProfessor
        }
    } 
    
    else {
        return {
            media,
            status: 'APROVADO',
            nomeUsuario,
            nomeProfessor
        }
    }
}


// exportar a função para ser usada em outros arquivos
module.exports = {
    calcularMedia
}