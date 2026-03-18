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

    listaDeFornecedores.splice(2, 0, 'Trasformers') //Adiciona um valor no Array atraves do indice. Splice(indice, quantidade de itens a serem removidos, valor a ser adicionado)
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



const trabalharComJson = function(){
    let aluno = {"nome": "Pedro Rodrigues",
                 "ra": 123456, 
                 "telefone": "2131231232", 
                 "email": "Jose@gmail.com" }
    
    //completa a estrutura do JSON com os dados do aluno, utilizando as chaves e valores

    console.log(aluno.nome) //Acessa o valor do JSON atraves da chave;
    
    aluno.sexo = 'Masculino' //Adiciona um novo valor no JSON
    
        
    delete aluno.telefone //Remove um valor do JSON atraves da chave


    // console.log(aluno)
}


const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "cor": "Branco"},      //indice 0
        {"id": 2, "cor": "Preto"},      //indice 1
        {"id": 3, "cor": "Cinza"},     //indice 2
        {"id": 4, "cor": "Vermelho"}, //indice 3
        {"id": 5, "cor": "Azul"}     //indice 4
    ]

    let marcas = [
        {"id": 1, "marca": "LG",            "telefone":     "21312312",    "Email":    "LG@gmail.com"},     //indice 0
        {"id": 2, "marca": "Dell",          "telefone":     "54367567",    "Email":    "Dell@gmail.com"},   //indice 1
        {"id": 3, "marca": "Xiaomi",        "telefone":     "21313244",    "Email":    "Xiaomi@gmail.com"}, //indice 2
        {"id": 4, "marca": "Lenovo",        "telefone":     "32153456",    "Email":    "Lenovo@gmail.com"}, //indice 3
        {"id": 5, "marca": "Razer",         "telefone":     "53465478",    "Email":    "Razer@gmail.com"},  //indice 4
        {"id": 6, "marca": "Multilaser",    "telefone":     "43555405",    "Email":    "Multilaser@gmail.com"}, //indice 5
        {"id": 7, "marca": "Samsung",       "telefone":     "40605943",    "Email":    "Samsung@gmail.com"},    //indice 6

    ]


    let produtos = [
        {"id": 1, 
        "nome": "monitor", 
        "descricao": "monitor de 24 polegadas",
        "marca": [marcas[1].marca],
        "quantidade": 20,
        "cor": [cores[2], cores[1]],
        "Valor": 1500.00
    },
    {"id": 2,
        "nome": "teclado", 
        "descricao": "teclado mecanico RGB",
        "marca": [marcas[4].marca],
        "quantidade": 200,
        "cor": cores,
        "Valor": 300.00
    },
    {"id": 3,
        "nome": "Mouse", 
        "descricao": "Mouse Gamer RGB",
        "marca": [marcas[4], marcas[5], marcas[6]],
        "quantidade": 500,
        "cor": [cores[1], cores[2], cores[4]],
        "Valor": 80
    },
    
    
]
//console.table(produtos)

 let listaProdutos = [
   

    //percorre o Array de produtos e exibe o nome do produto, a marca e a cor do produto utilizando as estruturas de repetição FOR EACH ou FOR OF
    produtos.forEach(function(itemProduto){
        console.log(`produto: ${itemProduto.nome}`);
        
        //percorre o objeto de marca dentro de cada produto para trazer as marcas
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`       marca: ${itemMarca}`);
        })

        //percorre o objeto de cor dentro de cada produto para trazer as cores
        itemProduto.cor.forEach(function(itemCor){
            console.log(`          cor: ${itemCor.cor}`);
        })

    })

    ]

    // console.log('-----------------PRODUTO COM MAIS DE UMA MARCA-----------------');
    // console.table('pesquisando produtor pelo nome')
    // let nome = 'mouse'

    // let cor = 'preto'
    // let status = false


    // produtos.forEach(function(itemProduto){
    //     itemProduto.cor.forEach(function(itemCor){
    //         if(String(itemCor.cor).toUpperCase() == String(cor).toUpperCase()){
    //             console.log(itemProduto);
    //             status = true
            
    //         }
    //     })
    // })




    //pesquisar um produto pela COR
    console.log('pesquisando Produtos pela Cor');
    let cor = 'preto'
    let status = false

    produtos.forEach(function(itemProduto){
        itemProduto.cor.forEach(function(itemCor){
            if (String(itemCor.cor).toUpperCase() == String(cor).toUpperCase()){
                console.log(itemProduto);
                status = true
            }
        })
    })


    if (!status){
        console.log('Não foi encontrado nenhum produto com a cor pesquisada')
    }




    
    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor) //Acessa o valor do JSON atraves do indice do Array e da chave do JSON;

    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log("A cor do produto é: " + nomeCor.cor)

    
    
    // }) //Adiciona um novo valor no Array do JSON








    // console.log(cores)
    // console.table(cores)


    // console.log(cores[0].nome) //Acessa o valor do JSON atraves do indice do Array e da chave do JSON;
        
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

// console.log(quantidadeItems('maria'))
// trabalharComJson()

cadastroDeProdutos()



