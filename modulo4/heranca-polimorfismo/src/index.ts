import { fstat } from "fs";
import { client } from "./Client";
import { Customer } from "./Customer";
import { Place } from "./Place";
import { User } from "./User";

// 1 
// const user = new User("1", "teste@gmail.com", "Teste", "123456")
// console.log(user)

// A - É possível imprimir a senha só se for criado um método para a mesma, pois não há nenhum para o password e ele está no modo privado.
// B - A mensagem foi impressa UMA vez

//2

//const cust = new Customer("10", "cust@gmail.com", "Customer", "123456", "1111")
//console.log(cust)

// A - A mensagem foi impressa UMA vez
// B - A mensagem foi impressa UMA vez, pois o user está inserido(extends) na classe Customer.

// 3
// A - Só seria possível imprimir a senha caso fosse criado um método na class User, pois as propriedades da senha são importadas da Class Mãe.

// 4 
//console.log(cust.introduceYourself())

//--------------------------------------------------Polimorfismo


//1
// console.log(client.calculateBill())
// console.log(client.consumedEnergy)
// console.log(client.name)
// console.log(client.registrationNumber)
// A - Foi possível imprimir todas propriedades, pois todas são públicas.

// 2
//const place = new Place()
// A - Não é possível criar uma instância de uma classe abstrata.ts(2511)
// B - Podemos criar uma classe normalmente usando uma classe abstrata como herança(inherits), e então criar uma instância

// 4 
// A - Um getter do CPF pois é pedido e um calculateBill, pois é obrigatório na interface Client.

// 5
// A - As semelhanças se dão por conta da obrigatoriedade das propriedades da interface Client
// B - As diferenças são as características próprias, como CNPJ e floorsQuantity, além do preço da energia

// 6
// A - Industry, pois é a classe que corresponde a ela com a quantidade de machines.
// B - Client, pois ela está ligada a 'companhia' de energia e esses dados são necessários.
// C - Não entendi essa. Muito confuso a pergunta. Seria pq queremos buscar informações?
