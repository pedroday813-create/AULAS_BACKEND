/******************************************************************************
 * Objetivo: entrada de dados para o sistema de gerenciamento de numeros inpares e pares
 * data: 05/03/2026
 * nome: Pedro Rodrigues Cruz
 * Versao: 1.0
 *******************************************************************************/

function calcularNumeros(numeroInicial, numeroFinal, respostaInpares, respostaPares) {

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log("Digite apenas números!")
        return
    }

    if (numeroInicial < 0 || numeroFinal < 0) {
        console.log("ERRO, Digite um número positivo!")
        return
    }

    if (numeroInicial <= 0 || numeroInicial > 500) {
        console.log("ERRO, Digite um número maior que 0 e menor que 500!")
        return

    }else if (numeroFinal < 100 || numeroFinal > 1000){
        console.log("ERRO, Digite um número maior que 100 e menor que 1000!")
        return;
    }
    
    if (numeroInicial === '' || numeroFinal === '') {
        console.log("ERRO, Digite um número!")
        return
    }

    if (numeroInicial > numeroFinal){
        console.log("ERRO, O numero inicial deve ser menor que o numero final!");
    }

    if (numeroInicial === numeroFinal){
        console.log("ERRO, O numero inicial deve ser diferente do numero final!");
    }



    if (respostaPares === 'N'){
        console.log('--------------------------------------------------------------------------------------');
        console.log('Voce escolheu não calcular os numeros pares!')
        console.log('--------------------------------------------------------------------------------------');
    }else if(respostaPares === 'S'){

    console.log(`Numeros pares entre ${numeroInicial} e ${numeroFinal}:`)
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
    console.log('--------------------------------------------------------------------------------------');
    console.log('quantidade de numeros pares encontrados: ' + (Math.floor(numeroFinal / 2) - Math.floor(numeroInicial / 2)))
    console.log('--------------------------------------------------------------------------------------');

    }


    if (respostaInpares === 'N'){
        console.log('--------------------------------------------------------------------------------------');
        console.log('Voce escolheu não calcular os numeros impares!')
        console.log('--------------------------------------------------------------------------------------');
    }else if(respostaInpares === 'S'){
    
    console.log(`Numeros impares entre ${numeroInicial} e ${numeroFinal}:`)
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
    console.log('--------------------------------------------------------------------------------------');   
    console.log('quantidade de numeros impares encontrados: ' + (Math.ceil(numeroFinal / 2) - Math.ceil(numeroInicial / 2)))
    console.log('--------------------------------------------------------------------------------------');
    }


}




module.exports = {
    calcularNumeros
 }