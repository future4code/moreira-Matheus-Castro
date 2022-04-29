import connection from "../../data/connection"

export const GetMyProfile = async (
   token:string) : Promise<any> => {
       const result = await connection
       .select("id", "name", "email")
       .from("COOKENU_USERS")
       .where({id: token as string})

       return result
}