import app from "./app"
import createUser from "./endpoints/createUser/createUser"
import getUserByEmail from "./endpoints/getUserByEmail/getUserByEmail"
import GetUserById from "./endpoints/getUserById/GetUserById"

app.post('/user/signup', createUser)
app.post('/user/login', getUserByEmail)
app.get('/user/profile', GetUserById)