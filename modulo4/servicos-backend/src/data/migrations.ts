import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula_webservices_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS aula_users_address (
         id VARCHAR(255) PRIMARY KEY,
         cep VARCHAR(255) NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL,
         user_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(user_id) REFERENCES aula_webservices_users(id)
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula_webservices_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)
const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)