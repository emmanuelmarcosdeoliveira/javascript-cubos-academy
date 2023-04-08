// condicionais (If - else)
// menores de 18 anos (Menor de idade)
// entre 18 e 60 anos (Adultos)
//Maiores de 60 anos  (Idosos)

const idade  = 68
  if(idade < 18) {
  console.log("Menor de idade")
} else if(idade <= 60){
  // o else if só sera executado de o if for falso
  console.log("Pessoa Adulta")
//} else if (idade > 60) {
  } else {
  console.log("Pessoa Idosa")
} 
