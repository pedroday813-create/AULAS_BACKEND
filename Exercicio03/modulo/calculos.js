/*********************************************************************
 * Objetivo: Arquivo responsável pelos cálculos da aplicação
 * data: 04/03/2026
 * nome: Pedro Rodrigues
 * versao: 1.0
 **********************************************************************/



function calcularTabuada(numero1, numero2, tipoEquacao) {


    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Digite apenas números!")
        entradaDados.close()
        return
    }

    if (numero1 > 50 || numero2 > 50){
        console.log("ERRO, Digite números menores que 50!")
        
        return
    }
    
    for (let i = numero1; i <= numero2; i++) {
        console.log(`Tabuada do ${i}:`)
        for (let j = 0; j <= 10; j++) {
            let resultado
            switch (tipoEquacao) {
                case 'soma':
                    resultado = i + j
                    console.log(`${i} + ${j} = ${resultado}`)
                    break
                case 'subtração':
                    resultado = i - j
                    console.log(`${i} - ${j} = ${resultado}`)
                    break
                case 'multiplicação':
                    resultado = i * j
                    console.log(`${i} * ${j} = ${resultado}`)
                    break
                case 'divisão':
                    if (j === 0) {
                        console.log(`${i} / ${j} = Não é possível dividir por zero`)
                    } else {
                        resultado = (i / j).toFixed(2)
                        console.log(`${i} / ${j} = ${resultado}`)
                    }
                    break
                default:
                    console.log('Tipo de equação inválido. Use: soma, subtração, multiplicação ou divisão.')
            }
        }
        console.log('-------------------------')
    }
}



module.exports = {
    calcularTabuada
 }