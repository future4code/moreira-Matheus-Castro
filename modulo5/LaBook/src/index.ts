import PostBusiness from "./business/PostBusiness"
import UserBunisses from "./business/UserBusiness"
import app from "./controller/app"
import PostController from "./controller/PostController"
import UserController from "./controller/UserController"
import PostData from "./data/PostData"
import UserData from "./data/UserData"
import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/IdGenerator"

const userController = new UserController(
    new UserBunisses(
        new UserData(),
        new IdGenerator(),
        new HashManager,
        new Authenticator()
    )
)

const postController = new PostController(
    new PostBusiness(
        new PostData(),
        new IdGenerator(),
        new Authenticator()
    )
)

app.post('/user/signup', userController.signup)

app.get('/user', userController.login)

app.post("/user/post", postController.insertPost)

app.get("/user/post/:id", postController.getPostById)