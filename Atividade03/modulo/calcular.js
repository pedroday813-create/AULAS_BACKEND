/*********************************************************************
 * Objetivo: Arquivo responsavel por fazer os calculos e a indentificação de erros e falta de numeros
 * data: 27/02/2026
 * nome: pedro rodrigues
 * versao: 1.0
 ***********************************************************************/




//funcao para validar as entradas de dados do usuario
const entradaDados = function (alturaUsuario, pesoUsuario, nomeUsuario, idadeUsuario, sexoUsuario) {

    //verificação se as entradas de dados estão vazias ou se são numeros válidos
    if (
        alturaUsuario == '' || isNaN(alturaUsuario) ||
        pesoUsuario == '' || isNaN(pesoUsuario) ||
        nomeUsuario == '' ||
        idadeUsuario == '' || isNaN(idadeUsuario) ||
        sexoUsuario == ''
    ) {
        return false
    } else {
        return true
    }
}

//funcao para calcular o imc do usuario
const calcularIMC = function (pesoUsuario, alturaUsuario) {

    alturaUsuario = parseFloat(alturaUsuario.toString().replace(',', '.'));
    pesoUsuario = parseFloat(pesoUsuario.toString().replace(',', '.'));

    if (alturaUsuario <= 0 || pesoUsuario <= 0) {
        return 'Valor inválido. Digite um valor maior que zero.'
    }

    let imc = pesoUsuario / (alturaUsuario * alturaUsuario)
    let resposta = ''

    //identificação do resultado do imc
    if (imc < 18.5) {
        resposta = 'Abaixo do peso.'
    } else if (imc < 25) {
        resposta = 'Peso normal.'
    } else if (imc < 30) {
        resposta = 'Sobrepeso.'
    } else if (imc < 35) {
        resposta = 'Obesidade grau 1.'
    } else if (imc < 40) {
        resposta = 'Obesidade grau 2.'
    } else {
        resposta = 'Obesidade grau 3.'
    }

    //formatação do resultado do imc para exibição
    return resposta
}

//exportação das funções para uso em outros arquivos
module.exports = {
    entradaDados,
    calcularIMC
}
