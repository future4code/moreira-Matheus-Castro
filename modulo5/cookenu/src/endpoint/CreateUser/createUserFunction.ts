import connection from "../../data/connection"

export const createUser =async (
    id: string,
    name: string, 
	email: string, 
	password: string) => {
    await connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into("COOKENU_USERS")
}