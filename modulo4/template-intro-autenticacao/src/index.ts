import app from "./app"
import createUser from './endpoints/createUser'
import getEmail from "./endpoints/getEmail"
import GetUserById from "./endpoints/GetUserById"

app.post('/user/signup', createUser)
app.post('/user/login', getEmail)
app.get('/user/profile', GetUserById)