//Aprendendo JS


//imprime no terminar um conteudo
console.log(
    "TESTANDO O PRINT DO CONSOLE"
)

//Permite Criar uma variavel
var nome = 'Pedro'
var nomeUsuario

console.log(nome)

//Formas de contatenar Variaveis e texto
console.log('O nome do usuario é: '+ nome)
console.log(`O nome do usuario e: $(nomeUsuario)`)

//Importe da bliblioteca para captar entrdada de dados via termianr
var readline = require('readline')

//Cria uma interface para entrdada e saida de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//funcao para retornar o nome digitado no terminal
  //O metodo question apos a digitacao chama a sua funcao "Call Back"
  //para entregar o que foi digitado no temrinal, Atravel do argumento
  //nomeUsuario
entradaDeDados.question('por favor Digitar o seu nome: ', function(nomeUsuario){
console.log('O nome do Usuario se chama: ' + nomeUsuario)

//Entrada de Dados para o Email
entradaDeDados.question('Favor Digitar seu email:', function(emailUsuario){
    console.log(`O email do informado e: ${emailUsuario}`)
})
})
