/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 
 */
// 1 
// a - Esse código é um boleano,  ele realiza um teste de acordo com o número
// inserido pelo usuário, ele serve para testar de tal usuário é hábito ou não
// para quaisquer procedimentos.

// b - ele imprimi no console o "Passou no teste" para todos números PARES
// c - ele imprimi no consolo o "Não passou no teste" para todos números ÍMPARES

/*  let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    
  case "Pêra":
    preco = 5.5

  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)  */

// 2-
// a - O código acima serve para que a pessoa possa consultar os preços
// das frutas de acordo com o que ela insere no site quando é pedido
// b - O preço da fruta, maça  é  R$  2,25
// c - apareceria:
// "O preço da fruta, pera  é  R$  5" O console.log irá imprimir apenas 
// o ultimo comando.

 /* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// 3 */
// a - A primeira linha está pedindo para o usuário inserir um número
// b - caso seja 10, irá aparecer: Esse número passou no teste 
// caso seja -10, irá dar um erro
// c - Sim, pois a variavel mensagem não esta definida, poderia ser resolvida
// usando o ELSE, porque, a função fala que números >0 passam no teste, mas
// não fala nada sobre números menores do que 0 



// ---------------------
// 1 -

/* const idade = Number(prompt("Digite aqui sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
} */

// 2 -
/* let turno = prompt("Digite o turno em que você estuda")
if (turno === "M") {
    console.log("Bom dia!")
}
else if (turno === "V") {
    console.log("Boa Tarde!")
}fant
else if (turno === "N"){
    console.log("Boa Noite!")
} else {
    console.log(`Digite "M" para Matutino "V" para Vespertino,
    ou "N" para Noturno `)
} */

// 3--

/* let turno = prompt("Digite o turno em que você estuda")
switch (turno){
    case "M":
        console.log("Matutino")
        break
    case "V":
        console.log("Vespertino")
        break
    case "N":
        console.log("Noturno")
        break
    default:
        console.log(`Digite "M" para Matutino "V" para Vespertino,
        ou "N" para Noturno `)

}
 */

const genero = prompt("Qual o gênero do filme que você vai assistir?")
const ingresso = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && ingresso < 15){
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme :(")
}

