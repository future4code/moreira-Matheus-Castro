//1 - A - O contructor serve para criar, enviar e acessar os valores de uma classe
//1 - B - Uma vez
//1 - C - console.log(account.getNome())

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string){
        this.date = date
        this.value = value
        this.description = description
    }
 }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       // console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getNome(){
       return this.name
    }

    getTransaction(transaction: Transaction){
        return this.transactions.push(transaction)
    }
  
  }

//   class Bank {
//     private accounts: UserAccount[];
  
    
//     getAccount(account: UserAccount){
//         console.log("esse",account)
//         return this.accounts.push(account)
//     }
//   }

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    getAccount(){
        return this.accounts
    }
  
  }

  const account = new UserAccount("111.222.333-03", "Matheus", 24)
 
  const myTransaction: Transaction = new Transaction("Contas", 2000, "Deu certo")
  account.getTransaction(myTransaction)

  const Itau = new Bank([account])
  console.log("Itau", Itau)

 