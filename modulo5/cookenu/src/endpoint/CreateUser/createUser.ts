import { Request, Response } from "express";
import { generateToken } from "../../services/generateToken";
import { hashManager } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { createUser } from "./createUserFunction";

export default async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }

          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Password must be at least 6 characters long");
          } 

          const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          }

          const id = generateId();

          const hashPassword = await hashManager(userData.password);

          await createUser(id, userData.name, userData.email, hashPassword);

          const token = generateToken({
              id
          })

          res.status(200).send({
              token
          })
    } catch (err: any) {
        res.status(400).send({
          message: err.message,
        });
    }
}