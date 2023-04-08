// ESTRUTURA DE REPETIÇÃO FOR of 
// for (em ingês signifa "para")
// Essa é uma estrutura de repetição quando queremos percorrer todos os itens de um array.




// É uma ferramenta que serve para repetir algum código; um exemplo classico é quando queremos analisar todos os itens dentro de um array. 


const notas  =[10, 9, 7, 8, 5, 10];
// calcular a média aritmética das notas 
let soma = 0;
for (let acrescentarItem of notas){
  soma = soma + acrescentarItem;
}
// abaixo estamos dividindo o total de itens do array com o seu  comprimento do array através do "length" 
  console.log(soma /notas.length);
 
// criamos acima sintaxe para somar um itens no array com o for 