import { User } from "../../src/model/User";
import { userMock } from "./userMock";

export class UserDatabaseMock {
    public async createUser(user: User): Promise<void> { }

    public async getUserById(id: string): Promise<User | undefined> {
        if (id === 'id_mockado') {
            return userMock
        } else {
            undefined
        }
    }
    public async getUserByEmail(email: string): Promise<User | undefined> {
        if (email === "matheus@teste.com") {
            return userMock
        } else {
            undefined
        }
    }
    public async getAllUsers(): Promise<User[]> {
        return [userMock]
    }
} 