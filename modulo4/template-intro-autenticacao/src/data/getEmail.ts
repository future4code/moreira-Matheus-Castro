import connection from "../connection";


export const getEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User")
      .where({ email });
 
    return result[0];
   }