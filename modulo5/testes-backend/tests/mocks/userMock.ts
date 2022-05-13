import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id_mockado",
    "matheus",
    "matheus@teste.com",
    "1234567",
    USER_ROLES.NORMAL
)