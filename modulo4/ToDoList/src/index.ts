import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/", async (req, res) => {
    try {
        const result =
        await connection.raw(`
        SELECT * FROM TodoListTask
        `)
        res.status(200).send(result)
    } catch (error: any){
        res.status(500).send(error.message)
    }
})

app.post("/users", async (req, res) => {
    let codeError: number = 400
    try {
        if(!req.body.name || !req.body.nickname || !req.body.email){
            codeError = 401
            throw new Error("Verifique se todos os campos estão preenchidos")
        }
        await connection.raw(`
         INSERT INTO users (id, name, nickname, email)
            VALUES(
                "${Date.now().toString()}",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            );
        `)
        res.status(200).send("Create")
    } catch (error: any){
        res.status(500).send(error.message)
    }
})

app.get("/user/:id", async (req, res) => {
    let codeError: number = 400
    try {
        const result = await connection.raw(`
         SELECT id, nickname FROM users WHERE id = ${req.params.id}
        `)
        if(result[0].length === 0){
            codeError = 404
            throw new Error("Não encontrado nenhum usuário com esse id")
        }
        res.status(200).send(result)
    } catch (error: any){
        res.status(500).send(error.message)
    }
  })


  app.put("/user/edit/:id", async (req, res) => {
    let codeError: number = 400

    try {
        if(req.body.name === "" || req.body.nickname === "" || req.body.email === ""){
            codeError = 400
            throw new Error("Você deve preencher os campos do body")
        }
        await connection("users")
         .update({ 
         name: req.body.name,
	     nickname: req.body.nickname,
         email: req.body.email
        })
         .where ({id: req.params.id})
        
        res.status(200).send("Sucess")
    } catch (error: any){
        res.status(500).send(error.message)
    }
  })


app.post("/task", async (req, res) => {
    let codeError: number = 400
    try{
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limit_date ||
            !req.body.status ||
            !req.body.creator_user_id   
        ){
            codeError = 400
            throw new Error("Preencha todos os campos")
        }
        await connection.raw(`
        INSERT INTO TodoListTask
        VALUES
        (
            ${Date.now().toString()},
            "${req.body.title}",
            "${req.body.description}",
            "${req.body.status}",
            "${req.body.limit_date}",
            "${req.body.creator_user_id}"
        )
    `)
    res.status(201).send("created")
    } catch (error: any){
        res.status(codeError).send({message: error.message})
    }
})

app.get("/task/:id", async (req, res) => {
    let codeError: number = 400
    try {
        const result = await connection.raw(`
         SELECT 
         TodoListTask.id,
         TodoListTask.title,
         TodoListTask.description,
         TodoListTask.limit_date,
         TodoListTask.status,
         TodoListTask.creator_user_id,
         users.id,
         users.nickname
         FROM TodoListTask
         JOIN users
         ON TodoListTask.id = ${req.params.id}
        `)

        if(result[0].length === 0){
            codeError = 404
            throw new Error("Não encontrado nenhuma tarefa com esse id")
        }
        res.status(200).send(result.flat(1)[0])
    } catch (error: any){
        res.status(500).send(error.message)
    }
  })
