import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { Request, Response } from "express";
import { generateToken } from "../../services/generateToken";
import { hashManager } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { createUser } from "./createUserFunction";


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
        role: req.body.role, // adiciona
      };
  
      const id = generateId();

      const hashPassword = await hashManager(userData.password); // adiciona 
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
        role: userData.role, // adiciona
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

