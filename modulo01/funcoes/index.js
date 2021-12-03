// 1

/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50 
// a) será exibido o valor 10 e 50 */
// b) o função é executada, porém, não será exibida(impressa) no console

// 2
// a)
/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

// A funcão serve para colocar toda a frase em letra minuscula (toLowerCase)
// e também para confirmar a palavra cenoura está inclusa na frase.

// b)
/* i.   Eu gosto de cenoura // true
ii.  CENOURA é bom pra vista // true
iii. Cenouras crescem na terra */ // true

//////////////////////////////////////////////////////////////////

/*  function sobreMim() {
	
	console.log("Eu sou Matheus tenho 24 anos, moro em Ervália e sou estudante")
}

console.log(sobreMim)
 */

// 2

/* function sobrePessoa(nome, idade, endereço, profissao) {
	console.log("Eu sou", nome, ",", "tenho", idade, "anos, moro em", endereço, "e sou", profissao)
	
}
const informacoes = sobrePessoa(prompt("Qual o seu nome?"), prompt("Qual a sua idade?"), prompt("Qual a cidade em que você mora?"), prompt("Qual a sua profissão?", "."))


 */

// 3

/* function calculo(){
	let x1 = Number(prompt("Insita um número"))
	let x2 = Number(prompt("Insira outro número"))

	console.log("Números inseridos:", x1, "e", x2)

	let soma = Number(x1 + x2)
	let somaResultado = soma
	console.log("Soma:", somaResultado)

	let diferenca = Number(x1 % x2)
	let diferencaResultado = diferenca
	console.log("Diferença:", diferencaResultado)

	let multiplicacao = Number(x1 * x2)
	let multiplicacaoResultado = multiplicacao
	console.log("Multiplicação:", multiplicacaoResultado)

	let divisao = Number (x1 / x2)12
	let divisaoResultado = divisao
	console.log("Divisão:", divisaoResultado)

}
calculo() 

// outra maneira

function somaNumeros(numero1, numero2){
	const soma = numero1 + numero2
	
	return soma
}


num1 = Number(prompt("digite 1"))
num2 = Number(prompt("digite 2"))
resultado = somaNumeros(num1,num2)
console.log(resultado)
 */