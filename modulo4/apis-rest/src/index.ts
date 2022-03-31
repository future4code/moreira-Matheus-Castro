import express from "express"
import { users } from "./users";

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
    return res.status(200).json({ message: "Tudo em ordem" })
})

app.get("/users", (req, res) => {
    let codeError: number = 400
    try {
        const list = users.map((user) => {
            return user
        })

        if(!list) {
            codeError = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(list)
    } catch(error) {
        res.status(codeError).send({message: error})
    }

})

app.get("/user/:type", (req, res) => {
    let codeError: number = 400
    try {
        const type:string = req.params.type

        if(type.length === 0){
            codeError = 404
            throw new Error ("Nenhum usuário encontrado")
        }

        const filterType = users.filter((user) => {
            return user.type === type
        })

        const typerFiltrado = filterType.map((user) => {
            return user
        })

        if(typeof type !== "string"){
            codeError = 422
            throw new Error ("O valor para o type tem que ser uma string válida")
        }

        res.status(200).send(typerFiltrado)

    } catch(error) {
        res.status(codeError).send({message: error})
    }
})

app.get("/users", (req, res) => {
    let codeError: number = 400
    try {
        const name:string = req.query.name as string
        const user = users.find((user) => {
            user.name === name
            return user
        })

        if(!user){
            codeError = 404
            throw new Error ("Nenhum usuário encontrado")
        }

        if(typeof name !== "string"){
            codeError = 422
            throw new Error ("O valor para o type tem que ser uma string válida")
        }

        res.status(200).send(user)

    } catch(error) {
        res.status(codeError).send({message: error})
    }
})