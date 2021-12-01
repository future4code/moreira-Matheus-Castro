/* let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // posição 1(4) passa a valer 19

const valor = array[i+6]
console.log('f. ', valor) */ // posição 6(0,1,2,3,4,5,6) da array vale 9

/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */
// resposta do que vai ser impresso = SUBI NUM ÔNIBUS EM MIRROCOS 27

// 1- 

/* const emailDoUsuario = prompt("Digite seu e-mail")
const nomeDoUsuario = prompt("Digite seu nome de usuário")
console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario) */

// 2-

/*   const comidasPreferidas = ["Coxinha", "pizza", "hamburguer", "lasanha", "pastel"]
console.log(comidasPreferidas)
console.log("Essas são as minhas comidas prefridas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4]) */

/* let comidasPreferidas = ["Coxinha", "pizza", "hamburguer", "lasanha", "pastel"]
let suaComida = prompt("Qual a sua comida preferida?")
console.log("Qual a sua comida preferida?", suaComida)
comidasPreferidas.splice(1,1)
console.log(comidasPreferidas)
comidasPreferidas.push(suaComida)
console.log(comidasPreferidas) */

// 3

let listaDeTarefas = []
const tarefa1 = prompt("Diga uma tarefa que você tem que realizar hoje")
const tarefa2 = prompt("Diga outra tarefa que você tem que realizar hoje")
const tarefa3 = prompt("Diga mais uma tarefa que você tem que realizar hoje")
listaDeTarefas.push(tarefa1)
console.log(listaDeTarefas)
listaDeTarefas.push(tarefa2)
console.log(listaDeTarefas)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const tarefaRealizada = prompt("Digite a tarefa já realizada")
console.log("Já realizei a tarefa", tarefaRealizada)
listaDeTarefas.splice(0,1)
console.log(listaDeTarefasvarr)