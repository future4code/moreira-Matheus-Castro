import app from "./data/app"
import createUser from "./endpoint/CreateUser/createUser"
import GetMyProfile from "./endpoint/GetMyProfile/GetMyProfile"
import getUserByEmail from "./endpoint/Login/getUserByEmail"



app.post('/user/signup', createUser)
app.get('/user/login', getUserByEmail)
app.get('/user/token', GetMyProfile)