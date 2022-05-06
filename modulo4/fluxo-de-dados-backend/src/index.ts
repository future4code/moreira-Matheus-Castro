import express from "express";
import { product } from "./data";
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

app.get("/product", (req, res) => {
    const produtos = product.map((prod) => {
        return prod
    })
    return res.status(200).json(produtos)
})

app.post("/product/add", (req, res) => {

    const newProduct = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price
    }

    if (!req.body) {
        throw new Error("Não há body")
    } if (typeof req.body.name !== "string" || req.body.name === "") {
        throw new Error("O name tem que receber uma STRING")
    } if (typeof req.body.price !== "number" || req.body.price === null || req.body.price === undefined) {
        throw new Error("O price tem que receber um NUMBER")
    } if (req.body.price <= 0) {
        throw new Error("O price precisa receber um valor maior do que ZERO ")
    }
    else {
        const newListProduct = [...product, newProduct]

        return res.status(200).send(newListProduct)
    }
})

app.put("/product/:id", (req, res) => {

    const id = req.params.id

    const newPrice = req.body.price


    if (!req.body) {
        throw new Error("Não há body")
    } if (typeof req.body.price !== "number" || req.body.name === null || req.body.name === undefined) {
        throw new Error("O price tem que receber um NUMBER")
    } if (req.body.price <= 0) {
        throw new Error("O price precisa receber um valor maior do que ZERO ")
    }
    else {
        const editPrice = product.filter((prod) => {
            return prod.id === id
        })
            .map((prod) => {
                prod.price = newPrice
                return prod
            })
        return editPrice.length === 0 ? res.status(404).send("Nenhum produto com esse id foi encontrado") : res.status(200).send(product)

    }

})

app.delete("/product/:id", (req, res) => {

  const id = req.params.id

  const findProduct = product.find((prod) => {
      return prod.id === id
  })
   
  if (findProduct) {
      const produtosDel = product.filter((prod) => {
          return prod.id !== id
      })

      res.send(produtosDel)
  } else {
    throw new Error ("Nenhum produto com esse id foi encontrado")
  }
})