import { Request, Response } from "express";
import { getData } from "../../services/getData";
import { getUserById } from "./getUserByIdFunction";


export default async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const authenticationData = getData(token);
  
      if (authenticationData.role !== "normal") {
        throw new Error("Esse usuário não posssui autorização");
      }
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };