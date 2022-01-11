/* Resposta da 1
let resultado = bool1 && bool2
console.log("a. ", resultado) // false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true
le.log("d. ", typeof resultado) // boleean */

/* Reposta da 2
Faltou ele colocar o "Number" para ser reconhecido como número
e não como Texto, pois esta em formato de String */
/* Como deveria ficar abaixo:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero9

console.log(soma) */

// Exercício9
1 //

/* const idadeUsuario = Number(prompt("Qual a sua idade?")) // 24
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?")) // 24
console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigo)
console.log("Diferença da idade de você e seu melhor amigo é de", idadeUsuario - idadeAmigo, "anos.") 
 */
2 //
/*  const numeroPar = Number(prompt("Insira um número Par"))
console.log("O resto da divisão de", numeroPar, "por 2 é", numeroPar % 2) */ 
/* Todos os número pares que são inseridos dão um resto de 0,
 pois são números pares, diferentemente do números ímpares,que dão um resto de 1 */

 3 //

/*  const idade = Number(prompt("Qual a sua idade?"))
 console.log("Sua idade em meses é de", idade * 12, "meses.")
 console.log("Sua idade em dias é de", idade * 365, "dias aproximadamente.")
 console.log("Sua idade em horas é de", idade * 365 * 24, "horas aproximadamente")  */

 4 //

 const numero1 = Number(prompt("Digite um número"))
 const numero2 = Number(prompt("Digite um número diferente do anterior"))

 console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
 console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
 const divisao1 = numero1 % numero2 
 const divisao2 = numero2 % numero1
 console.log("O primeiro número é divisível pelo segundo?", divisao1 >= 0 )
 console.log("O segundo número é divisível pelo primeiro?", divisao2 >= 0 ) 