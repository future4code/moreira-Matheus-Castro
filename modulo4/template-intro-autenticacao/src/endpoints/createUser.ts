import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/idGenerator";

export default async (req: Request, res: Response) => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = generateId();
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };