// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const alturaRetangulo = Number(prompt("Digite a altura do retangulo"))
  const larguraRetangulo = Number(prompt("Digite a largura do retangulo"))
  const areaRetangulo = (alturaRetangulo * larguraRetangulo)
  console.log(areaRetangulo)
}
console.log = areaRetangulo
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite aqui o ano atual"))
const anoNascimento = Number(prompt("em qual ano você nasceu?"))
const idade = (anoAtual - anoNascimento)

console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return imc = Number(peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual a sua idade?"))
  const email = prompt("Qual o sem email?")
  
 console.log("Meu nome é " + nome + "," + " tenho " + idade + " anos, e o meu email é " + email + ".")
}
// Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor")
const cor2 = prompt("Digite outra cor")
const cor3 = prompt("Digite mais uma cor")

let coreFavoritas = [cor1, cor2, cor3]
console.log(coreFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const valorEspetaculo = Number(custo / valorIngresso)
return valorEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanho = string1.length === string2.length
return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

const primeiroItem = array[0]
return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoItem = array[array.length -1]
return ultimoItem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let x = array[0]
let y = array[array.length -1]
array[0] = y
array[array.length -1] = x

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  

  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  const anoID = Number(prompt("Em qual ano sua carteira foi emitida?"))

  let tempoID = (anoAtual - anoID) >= 5 && (anoAtual - anoNascimento) <= 20
  let tempoID1 = (anoAtual - anoID) >= 10 && (anoAtual - anoNascimento) >= 21 && (anoAtual - anoNascimento) <=50
  let tempoID2 = (anoAtual - anoID) >= 15 && (anoAtual - anoNascimento) >= 50
  console.log(tempoID || tempoID1 || tempoID2)

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}