// condicionais (aninhadas)
// 08.1 & ou ||


// Menor de 18  --> Menor de idade (Meia)
// Entre 18 e 60 --> Adultos (Meia apenas com carteirinha)
// Maior de 60 anos --> Idoso (meia)


// INTERIRA --> ADULTO SEM CARTEIRINHA 
// MEIA --> RESTANTE DAS CONDIÇÕES


const idade = 25;
const temCarteirinha = true;

const ehadulta = idade >=18 && idade <= 60;
//if(ehadulta && temCarteirinha === false ) {
//abaixo outra forma de  fazer  
if(ehadulta && !temCarteirinha) {
  console.log("INTEIRA")
}else {
  console.log("MEIA")
}


//ou 

// if(idade < 18){
//   console.log("MEIA");
// }else if (idade <= 60){
//   // adulta 
//   if(temCarteirinha === true){
//     // adulto tem carteirinha
//     console.log("MEIA");  
//   } else {
//     (temCarteirinha === false )
//     // adulto sem carteirinha
//     console.log("INTEIRA");
//      }
//   } else {
//   // Idossa
//   console.log("MEIA");
// }