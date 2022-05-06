/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

// 1-
// O código abaixo esta somando o "valor" + "i" sempre em que o "i"
// é menor do que 4, então ficando 0 + 1 + 2 + 3 + 4, resultando no valor = 10

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} */

// 2 - 
// a -
// será impresso no console 19, 21, 23, 25, 27, 30
// b - sim, teria que adicionar uma variavel que indica o indice e colocar o 
// indice para ser impresso no console.log, além de colocar indice++ pra ele semrpe
// somar mais um.

// 3 -
/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */

// Será impresso 4 linhas da seguinte forma
//*
//**
//***
//****

// ------------------------------------------------

// 1 - 

/* let animaisAtuais = Number(prompt("Quantos animais de estimação você tem?"))


   
    if (animaisAtuais === 0){
        console.log("Que pena, você pode adotar um pet!")
        
    }

    if(animaisAtuais > 0){
        const listaNomes = []
        for(let i=0; i < animaisAtuais; i++){
           const nomes = prompt("Digite o nome do seu pet")
           listaNomes.push(nomes)

        }
        console.log(listaNomes)
    }

 */

    // 2


    const arrayOriginal = [2, 5, 6, 9, 10]

    // a

  /*   function imprimeValores(array){

        for(let valor of array)

        console.log(valor)
    }
    imprimeValores(arrayOriginal)
 */

    // b

   /*  function imprimeValores(array){

        for(let valor of array)

        console.log(valor/10)
    }
    imprimeValores(arrayOriginal)

     */

    // c

    /* function imprimePares(array){
        const arrayPares = []

        for(let numero of array)

        if(numero % 2 === 0){
            arrayPares.push(numero)

        }
        console.log(arrayPares)
   
    }

imprimePares(arrayOriginal) */

// d
/* indice = 0
function imprimeStrings(array){
    

    for(let numero of array){
      console.log("O elemento do índex", indice, "é:", numero )

      indice++
    }

    
}
imprimeStrings(arrayOriginal) */

// e

valorMaximo = 0
valorMinimo = 10

for (var i = 0; i < arrayOriginal.length; i++){
  if( arrayOriginal[i] > valorMaximo){
    valorMaximo = arrayOriginal[i]
    
  }
  
  if(arrayOriginal[i] < valorMinimo){
    valorMinimo = arrayOriginal[i]
  
  }
}

console.log(valorMaximo)
console.log(valorMinimo)
