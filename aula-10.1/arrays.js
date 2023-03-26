// Arrays

const listadeNomes  = ["José", "Maria", "Pedro", "Roberto","Claudia"];
// Abaixo como adicionar um item dentro de um array
listadeNomes[5]  = "Jhony";
// Abaixo como  trocar um item de um array
listadeNomes[1]  = "Ana"
console.log(listadeNomes);
// Se criamos um array com o atributo const porque estamos conseguindo trocar seus itens?
// Um arrya criado com const é possivel fazer a troca de seus itens porém não conseguimos refazer uma atribuição(criar um novo array com o mesmo nome)
// Exemplo:
// listadeNomes[]; // isso não é possivel fazer..

// Abaixo iremos ver como atribuir coisas ao final do array 

const notas  = [];
notas [0] = 10;
// metodo para colocar itens no final do array
notas.push(09);
notas.push(10);
//console.log(notas)
// vamos ver agora o metodo para tirar um iten do array (tira o ultimo iten)
notas.pop();
console.log(notas)