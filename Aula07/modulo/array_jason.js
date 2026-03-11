/*******************************************************************************
 * Objetivo: Manipular dados utlizando o formato JSON e Array
 * data: 05/03/2026
 * nome: Pedro Rodrigues 
 * versao: 1.0
 *********************************************************************************/

/*

    [ ] - Representa um Objeto do tipo Array    
    { } - representa um Objeto do tipo JSON

    Array - è um unico  objeto da memoria que permite trabalhar com varios valores em um unico objeto

    Json - é um objeto da memoria que permite trabalhar com CHAVE E VALOR

*/

//formas de Criar um ARRAY
const listaDeNomes          = ['jose', 'maria', 'joao', 'Andre', 'pedro', 'carlos', 'paulo', 'carla', 'andreia', 'ana']
const listaDeClientes       = []
const listaDeFornecedores   = []

const exibirDados = function () {
    //Exibe o objeto Array e eu conteudo
    console.log(listaDeNomes)

    //Exibe o conteudo do Array de forma tabela com seus indices
    console.table(listaDeNomes)

    //Exibe Apenas o valor do respectivo indice do Array
    console.log(listaDeNomes[0]);

    //Retorna o tipo de dado do indice do Array 
    console.log(typeof(listaDeNomes[0]));

    console.log(`O nome do cliente é ${listaDeNomes[0]}`);
    console.log(`O nome do cliente é ${listaDeNomes[1]}`);
    console.log(`O nome do cliente é ${listaDeNomes[2]}`);
    console.log(`O nome do cliente é ${listaDeNomes[3]}`);
    console.log(`O nome do cliente é ${listaDeNomes[4]}`);

    //Estrutura de Repetção
    //While
    console.log('-------------------------------');
    let cont = 0
    while (cont < listaDeNomes.length) {
        console.log(`O nome do cliente é ${listaDeNomes[cont]}`)
        cont+=1
    }

    //Estrutura de Repetição FOR - Retorna o valor do Array atraves do indice  
    console.log('----------------FOR---------------')
    for(let cont = 0; cont < listaDeNomes.length; cont++){
        console.log(`O nome do cliente é ${listaDeNomes[cont]}`)
    }

    //Estrutura de Repetição FOR EACH - Retorna o valor do Array diretamente sem precisar do indice
    console.log('----------------FOR EACHI---------------');
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é ${cliente}`)
    })

    //Estrutura de Repetição FOR IN - Retorna o indice do Array para acessar o valor do Array
    console.log('----------------FOR IN---------------');
    for(let indice in listaDeNomes){
        console.log(`O nome do cliente é ${listaDeNomes[indice]}`)
    }

    //Estrutura de Repetição FOR OF - Retorna o valor do Array diretamente sem precisar do indice
    console.log('----------------FOR OF---------------');
    for(let cliente of listaDeNomes){
        console.log(`O nome do cliente é ${cliente}`)
    }


    console.log(listaDeClientes.length) //Retorna a quantidade de itens do Array
}





const manipularDados = function () {
    //adicionando valores novos  no ARRAY atraves de seu indice
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    
    console.log(listaDeClientes)

    //permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Andre da Silva')
    listaDeFornecedores.push('Pedro da Silva')
    listaDeFornecedores.push('Paulo da Silva')
    listaDeFornecedores.push('Carla da Silva', 'andreia da Silva')
    console.table(listaDeFornecedores)

    listaDeFornecedores.unshift('Ana da Silva') //Adiciona um novo valor, sempre no inicio do Array
    console.table(listaDeFornecedores)

    listaDeFornecedores.pop() //Remove o ultimo valor do Array
    console.table(listaDeFornecedores)

    listaDeFornecedores.shift() //Remove o primeiro valor do Array
    console.table(listaDeFornecedores)

    listaDeFornecedores.splice(2, 1) //Remove um valor do Array atraves do indice. Splice(indice, quantidade de itens a serem removidos)
    console.table(listaDeFornecedores)






}





const removerItem = function (nome){

    //let indice = listaDeNomes.indexOf(nome) //Retorna o indice do valor passado como parametro, caso o valor exista no Array. Caso o valor não exista, retorna -1
    //listaDeNomes.splice(indice, 1) //Remove um valor do Array atraves do indice. Splice(indice, quantidade de itens a serem removidos)
    
    let indice = listaDeNomes.indexOf(nome)
    if (indice != -1){
        listaDeNomes.splice(indice, 1)
        return true
    }else{
        return false
    } 
}
    



const verificarItem = function(nome){
    return listaDeNomes.includes(nome) //Retorna true ou false, caso o valor exista ou não no Array
    
}


const quantidadeItems = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if (String(item).toLocaleUpperCase() == String(nome).toLocaleUpperCase()){
            cont +=1
        }
    })

    return cont
}


//manipularDados()
// exibirDados()

// let resposta = removerItem('maria')
// if (resposta == true){
//     console.log('O nome foi encontrado e removido com sucesso')
// }else{
//     console.log('O nome não foi encontrado na lista')
// }

// removerItem('Lucas')
// console.table(listaDeNomes)


// console.log(verificarItem('maria'))

console.log(quantidadeItems('maria'));



