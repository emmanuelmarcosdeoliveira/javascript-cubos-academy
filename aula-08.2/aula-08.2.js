// condicionais (aninhadas)
// 08.2  (ou) ||


// Menor de 18  --> Menor de idade (Meia)
// Entre 18 e 60 --> Adultos (Meia apenas com carteirinha)
// Maior de 60 anos --> Idoso (meia)


// MEIA --> (Quando for MENOR de idade (ou) Idosa (ou)(Adulta e tiver Carteirinha))
// INTERIRA --> ADULTO SEM CARTEIRINHA 

const idade = 55;
const temCarteirinha = true;
const ehadulta  = idade >=18 && idade <=60;
if( idade <= 18 || idade >=60 || (ehadulta && temCarteirinha)){
  console.log("MEIA");
}else {
  console.log("INTEIRA")
}

// resumindo 
// && só da true quando tudo for verdadeiro
// || só da falso quando tudo der falso






// const ehadulta = idade >=18 && idade <= 60;
// //if(ehadulta && temCarteirinha === false ) {
// //abaixo outra forma de  fazer  
// if(ehadulta && !temCarteirinha) {
//   console.log("INTEIRA")
// }else {
//   console.log("MEIA")
// }


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