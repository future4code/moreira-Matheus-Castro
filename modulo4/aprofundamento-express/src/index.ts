import express from "express";
import { afazeres } from "./todos";
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


app.get("/ping", (req, res) => {
    return res.status(200).json({ mensagem: "Pong! 🏓" })
})


app.get("/afazeres/:status", (req, res) => {

    const status = req.params.status

    const afazersData = afazeres.filter((toDo) => {
        if (status === "true" && toDo.completed === true) {
            return toDo
        } else if (status === "false" && toDo.completed === false) {
            return toDo
        }
    })
    return res.status(200).send(afazersData)
})

app.post("/afazeres/add", (req, res) => {

    const newToDo = {
        userId: 1,
        id: Date.now(),
        title: req.body.title,
        completed: req.body.completed
    }

    if (!req.body) {
        throw new Error("Não há body")
    } if (typeof req.body.title !== "string" || req.body.title === "") {
        throw new Error("O título tem que ser uma string")
    } if (typeof req.body.completed !== "boolean") {
        throw new Error("O status tem que ser um boolean")
    } else {
        const newAfazeres = [...afazeres, newToDo]

        return res.status(200).send(newAfazeres)
    }
})

app.put("/afazeres/edit", (req, res) => {
    const body = {
        userId: Number(req.body.userId),
        id: Number(req.body.id)
    }
    if (!req.body) {
        throw new Error("Não há body")
    } if (typeof req.body.userId !== "number" || req.body.userId === null || req.body.userId === undefined) {
        throw new Error("O userId tem que ser um NUMBER")
    } if (typeof req.body.id !== "number" || req.body.id === null || req.body.id === undefined) {
        throw new Error("O id tem que ser um NUMBER")
    } else {
        const editStatus = afazeres.filter((toDo) => {
            if (toDo.id === body.id && toDo.userId === body.userId) {
                toDo.completed = !toDo.completed
                return toDo
            }
        })


        return editStatus.length === 0 ? res.status(200).send("Nenhuma tarefa com esse id e/ou idUser foi encontrada") : res.status(200).send(editStatus) 

    }
})
 

app.delete("/afazeres/", (req, res) => {

    const body = {
        id: Number(req.body.id)
    }
    const findToDo = afazeres.filter((toDo) => {
        return toDo.id === body.id
    })
    if (findToDo.length === 0) {
        throw new Error("Tarefa não encontrada, insira um ID válido")
    } else {
        const deleteToDo = afazeres.findIndex((toDo) => {
            toDo.id === body.id
        })
        afazeres.splice(deleteToDo, 1)
        res.status(200).send(afazeres)
    }

})

app.get("/afazeres", (req, res) => {

    const userId = Number(req.query.userId)
    const selectUser = []

    for (let i = 0; i < afazeres.length; i++) {
        if (userId === afazeres[i].userId) {
            selectUser.push(afazeres[i])
        }
    }

    const userSelected = {
        all: [
            {selectUser}
        ]
    }

    if (selectUser.length === 0) {
        throw new Error("Usuário não encontrado, insira um ID válido")
    } else {
        res.status(200).send(userSelected)
    }
})
