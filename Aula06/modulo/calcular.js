/************************************************************************************************************
 * Objetivo: Arquivo resolsavel pelas funcoes de calcular (SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO)
 * data: 20/02/2026
 * Autor: Pedro Rodrigues
 * versao: 1.0
 *************************************************************************************************************/

//toLowerCase() - para deixar a string toda minuscula
//toUpperCase() - para deixar a string toda maiuscula


const validarDados = function (numero1, numero2, operador) {
    if (valor1 == '' || isNaN(valor1) || valor2 == '' || isNaN(valor2)) {
        return false
    }else{
        return true
    }
}

//modelo de função anonima
//Calcular as 4 operacoes matematicas
const calcular = function (numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let resultado
    let operadorMatematico = String(operador).toUpperCase()


    //condicional para verificar qual operação matemática deve ser realizada
    // A ausencia de {} na condicional é por que qualquer condicional que tenha apenas uma linha de código, 
    // não precisa de chaves, mas se tiver mais de uma linha, é necessário o uso das chaves para delimitar o bloco de código da condicional
     
    //processamento
    // if(operadorMatematico === 'SOMA')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico === 'SUBTRACAO')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico === 'DIVISAO')
    //     resultado = valor1 / valor2
    // else if(operadorMatematico === 'MULTIPLICAO')
    //     resultado = valor1 * valor2

    switch (operadorMatematico) {
        case 'somar': //if
            resultado = somar = (valor1, valor2)
            break;
        case 'dividir': //else if
            resultado = dividir = (valor1, valor2)
            break;
        case 'subtrair': //else if
            resultado = subtrair = (valor1, valor2)
            break;
        case 'multiplicar': //else if
            resultado = multiplicar = (valor1, valor2)
            break;
    
    }
    return resultado

    // //Saída de dados
    // if (resultado !== undefined) 
    //     return Number(resultado.toFixed(2))
    // else
    //     return false
    
    
    
}

// Exemplo de função baseada em SETA (=>) - Arrow Function
// função para realizar as operacoes matematicas
const somar         = (numero1, numero2)  => Number(numero1) + Number(numero2)
const subtrair      = (numero1, numero2)  => Number(numero1) - Number(numero2)
const dividir       = (numero1, numero2)  => Number(numero1) / Number(numero2)
const multiplicar   = (numero1, numero2)  => Number(numero1) * Number(numero2)


module.exports = {
    calcular,
    somar,
    subtrair,
    dividir,
    multiplicar
    
}




