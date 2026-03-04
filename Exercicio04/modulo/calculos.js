function calcularFatorial(numero1) {

    if (isNaN(numero1)) {
        console.log("Digite apenas números!")
        return
    }

    if (numero1 < 0 || numero1 === 1) {
        console.log("ERRO, Digite um número positivo e que seja maior que 1!")
        return
    }
    
    if (numero1 === '') {
        console.log("ERRO, Digite um número!")
        return
    }

    let fatorial = 1
    for (let i = 1; i <= numero1; i++) {
        fatorial *= i
    }
    console.log(`O fatorial de ${numero1} é: ${fatorial}`)

}

module.exports = {
    calcularFatorial
 }