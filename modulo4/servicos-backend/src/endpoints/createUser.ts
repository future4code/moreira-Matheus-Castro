import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const {zipcode} = req.body
      const addressInfo = await getAddressInfo(zipcode)
      res.send("teste executado")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}