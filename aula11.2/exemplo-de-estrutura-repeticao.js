// Exemplos de estrutura de repetição.

// Vamos fazer um exercício onde é informado quantos notas vermelhas o aluno teve ;

let notasVermelhas  = 0;

const notas =  [10, 9, 7, 8, ,5 ,10, 6]; 
for(let itens of notas){
  if(itens < 7 ){
    //notasVermelhas = notasVermelhas + 1;
    //notasVermelhas += 1
    notasVermelhas ++;
  }
}
console.log(notasVermelhas)