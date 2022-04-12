import { app } from "./app";
import  selectAllUsers  from "./endpoints/selectAllUsers";

app.get("/users", selectAllUsers)