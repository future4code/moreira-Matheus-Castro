/**
 * Teste 1: Erro que deve retornar quando o nome está vazio
 * Teste 2: Erro que deve retornar quando o email é inválido
 * Teste 3: Erro que deve retornar quando a senha é inválida
 * Teste 4: Erro que deve retornar quando o tipo de usuário é inválido
 * Teste 5: Sucesso no cadastro e verificação do token de acesso 
 */


 import { UserBusiness } from "../src/business/UserBusiness"
 import { CustomError } from "../src/errors/CustomError"
 import idGenerator from "../src/services/idGenerator"
 import { HashGeneratorMock } from "./mocks/hashGeneratorMock"
 import { IdGeneratorMock } from "./mocks/idGeneratorMock"
 import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock"
 import { UserDatabaseMock } from "./mocks/userDataBaseMock"
 
 const userBusinessMock = new UserBusiness(
     new UserDatabaseMock() as any,
     new IdGeneratorMock(),
     new TokenGeneratorMock(),
     new HashGeneratorMock()
 )
 
 describe("getUserById", () => {
 
    test("retorna erro caso usuário não esteja cadastrado.", async () => {
     expect.assertions
 
     try {
       await userBusinessMock.getUserById("idNaoMockado ")
     } catch (error) {
         if (error instanceof CustomError) {
             expect(error.message).toEqual("User not found")
             expect(error.statusCode).toEqual(404)
         } else {
             console.log(error)
         }
     }
   })
 
 
     test("retorna o usuário cadastrado no respectivo id", async () => {
         expect.assertions
 
         try {
         /* const getUserById = jest.fn(
             (id: string) => userBusinessMock.getUserById(id)
         ) */
 
         const result = await userBusinessMock.getUserById("id_mockado")
         const id =  new IdGeneratorMock
 
 
         expect(id.generate()).toBe("id_mockado")
         expect(result).toEqual({
             id: "id_mockado",
             name: "matheus",
             email: "matheus@teste.com",
             role: "NORMAL",
         })
         } catch (error) {
         console.log(error)
         }
     })
 })