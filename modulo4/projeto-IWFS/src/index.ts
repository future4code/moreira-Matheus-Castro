import express from "express"
import { cliente, Client } from "./clients";

const app = express();

app.use(express.json());
const porta = 3003
const server = app.listen(porta, () => {
    if (server) {
        console.log(`Server is running in http://localhost:${porta}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.get("/test", (req, res) => {
    return res.status(200).json(cliente)
})

app.get("/client", (req, res) => {
    let codeError: number = 400
    try {
        const user: number = Number(req.body.cpf)
        const name: string = req.body.name as string

        const filterUser = cliente.filter((u) => {
            return u.cpf === user && u.name === name
        })

        .map((u) => {
            return  (`Saldo total de ${u.saldoTotal}`)
        })

        if(filterUser.length === 0){
            codeError = 404
            throw new Error ("Nenhum usuário encontrado, confira se os valores passados no body.")
        }

        res.status(200).send(filterUser)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.post("/client/create", (req, res) => {
    let codeError: number = 400
    try {

        const newClient = {
            name: req.body.name,
            cpf: req.body.cpf,
		    nascimento: req.body.nascimento,
		    saldoTotal: 0,
		    debitos: []
        }

        const cpf = cliente.find((c) => {
            return c.cpf === newClient.cpf
        })

        const getAge = () => {
            var today = new Date();
            var birthDate = new Date(req.body.nascimento);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        if(!req.body.name || !req.body.cpf || !req.body.nascimento) {
            codeError = 422
            throw new Error("Por favor, verifique se você passou todos os valores no body")
        }

        if (cpf){
            codeError = 422
            throw new Error("Cpf já existente")
        }

        if(req.body.nascimento.length !== 10 ){
            codeError = 422
            throw new Error("Sua data tem que estar no seguinte formato: dd/mm/yyyy ")
        }

        if(getAge() < 18 ){
            codeError = 422
            throw new Error("é necessário ter 18 anos para criar uma conta")
        } 

        cliente.push(newClient)
        res.status(201).send({message:"Usuário criado com sucesso"})
    }
    catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.put("/client/deposit", (req, res) => {
    let codeError: number = 400
    try {

        const newBalance = {
            name: req.body.name,
            cpf: req.body.cpf,
		    saldoTotal: req.body.saldoTotal,
        }

        const findClient = cliente.findIndex((c) => {
            return c.cpf === newBalance.cpf && c.name === newBalance.name
        })

        if (findClient < 0 ){
            codeError = 422
            throw new Error("Usuário não encontrado")
        }

        const attBalance = cliente[findClient].saldoTotal + req.body.saldoTotal

        cliente[findClient].saldoTotal = attBalance

        res.status(200).send(cliente)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.put("/client/payment", (req, res) => {
    let codeError: number = 400
    try {

        const client = {
            cpf: Number(req.body.cpf)
        }

        const newDebito = {
            data: req.body.data as string,
			valor: Number(req.body.valor),
			descricao: req.body.descricao as string
        }

        const findClient = cliente.findIndex((c) => {
            return c.cpf === client.cpf
        })

        if (findClient < 0 ){
            codeError = 422
            throw new Error("Usuário não encontrado")
        }

        const attBalance = cliente[findClient].saldoTotal - req.body.valor

        
        cliente[findClient].saldoTotal = attBalance

        cliente[findClient].debitos.push(newDebito)

        // formato em mm/dd/yyyy

        const today = new Date()
        today.setHours(0,0,0,0)

        // if (req.body.data === "") {
        //     return today
        // } 
            let dataPagamento = new Date(req.body.data)
            dataPagamento.setHours(0,0,0,0)
            
        if (today > dataPagamento) {
            codeError = 422
            throw new Error("Impossível realizar pagamento em data que já se passou")
        }

        res.status(200).send(cliente)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.put("/client/transf", (req, res) => {
    let codeError: number = 400
    try {

        const transf = {
            cpfOrigem: req.body.cpfOrigem,
            nameOrigem: req.body.nameOrigem,
            cpfDestino: req.body.cpfDestino,
            nameDestino: req.body.nameDestino,
            valor: req.body.valor
        }

        const findClientOrigem = cliente.findIndex((c1) => {
            return transf.cpfOrigem === c1.cpf && transf.nameOrigem === c1.name
        })

        const findClientDestino = cliente.findIndex((c2) => {
            return transf.cpfDestino === c2.cpf && transf.nameDestino === c2.name
        })
        
        if (findClientDestino < 0 || findClientOrigem < 0 ){
            codeError = 422
            throw new Error("Usuário não encontrado")
        }

        const attBalanceDestino = cliente[findClientDestino].saldoTotal + req.body.valor
        const attBalanceOrigem = cliente[findClientOrigem].saldoTotal - req.body.valor

        
        cliente[findClientDestino].saldoTotal = attBalanceDestino
        cliente[findClientOrigem].saldoTotal = attBalanceOrigem


        res.status(200).send(cliente)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})