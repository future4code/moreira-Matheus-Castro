// 1 -
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //  Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // Globo, 14h */

// 2 -
/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // JUCA, 3, SRD
console.log(gato) // JUBA, 3, SRD
console.log(tartaruga) // JUBO, 3, SRD */

// B - A sintaxe faz com que haja umas substituição na constante "cachorro,
// e depois na constante "gato", ela substitui a informação logo após ela
// descrita;=.

// 3 -
/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // falso
console.log(minhaFuncao(pessoa, "altura")) // undefined */

// B -  Acontece isso porque a função pede para retornar o objeto(pessoa)
// e sua propriedade, que é backender e altura, o backender ele reconhece
// como falso, já a altura, não é reconhecido no objeto e volta como undefined

// --------------------------------------------------------------------------

// 1 - 
/* const pessoa = {
    nome: "Matheus", 
    apelidos: ["Mat", "Theus", "math"]
    
}
function imprimeMensagem(meusApelidos){
 console.log(`Eu sou ${meusApelidos.nome},  mas pode me chamar de: ${meusApelidos.apelidos}`)
}
 imprimeMensagem(pessoa)

const novosApelidos = {
    ...pessoa,
    apelidos: ["Matheuszinho", "Matheuszao", "matt"]
}


 imprimeMensagem(novosApelidos) */

/*  const pessoa1 = {
     nome: "Matheus",
     idade: 24,
     profissao: "Estudante"
     
 }

 const pessoa2 = {
    nome: "Vitor",
    idade: 20,
    profissao: "Agricultor"
 }

 function sobreMim(info) {
 let array= []
 array.push(info.nome)
 array.push(info.nome.length)
 array.push(info.idade)
 array.push(info.profissao)
 array.push(info.profissao.length)

 return array
 }

 console.log(sobreMim(pessoa1))
 console.log(sobreMim(pessoa2)) */

 //3 -

let carrinho = []

const fruta1 = {
    nome: "maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "goiaba",
    disponibilidade: true
}

const fruta3 = {
    nome: "laranja",
    disponibilidade: true
}

function frutaSacolao(fruta){

carrinho.push(fruta)

}

frutaSacolao(fruta1)
frutaSacolao(fruta2)
frutaSacolao(fruta3)
console.log(carrinho)