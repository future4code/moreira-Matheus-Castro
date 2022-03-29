import express from "express";
import { posts } from "./posts";
import { user } from "./usuario";
const app = express();

app.use(express.json());
const porta = 3333
const server = app.listen(porta, () => {
  if (server) {
    console.log(`Server is running in http://localhost:${porta}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
app.get("/", (req, res) => {
  return res.status(200).json({ mensagem: "Hello from Express" })
})

app.get("/users", (req, res) => {
  const userData = user.map((users) => {
    return users
  })
  return res.status(200).send(userData)
})

app.get("/posts", (req, res) => {
  const postsData = posts.map((post) => {
    return post
  })
  return res.status(200).send(postsData)
})

app.get("/posts/:id", (req, res) => {
  const id = req.params.id
  const postsUser = posts.filter((post) => {
    return post.userId === Number(id)
  })
  .map((userPost) => {
    return userPost
  })
  return res.status(200).send(postsUser)

})


