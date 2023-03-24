// condicionais (aninhadas)

// Menor de 18  --> Menor de idade (Meia)
// Entre 18 e 60 --> Adultos (Meia apenas com carteirinha)
// Maior de 60 anos --> Idoso (meia)

const idade = 64;
const temCarteirinha = true;

//   if(idade < 18){
//   console.log("Paga meia entrada!")
// } else if (idade >= 19   & temCarteirinha == true){
//   console.log("Paga meia entrada");
// } else if (idade <=60  & temCarteirinha == false){
//   console.log("Paga Entrada Interia");
// }  else {
//     console.log("Idoso paga Meia Entrada")
// }

// ou 

if(idade < 18){
  console.log("MEIA");
}else if (idade <= 60){
  // adulta 
  if(temCarteirinha === true){
    // adulto tem carteirinha
    console.log("MEIA");  
  } else {
    (temCarteirinha === false )
    // adulto sem carteirinha
    console.log("INTEIRA");
     }
  } else {
  // Idossa
  console.log("MEIA");
}