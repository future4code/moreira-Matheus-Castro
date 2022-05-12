import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { generateToken } from "../../services/generateToken";
import { getUserByEmail } from "./getUserByEmailFunction";



export default async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(  // adiciona 
      userData.password,
      user.password
    );

    if (!compareResult) {                 // adiciona 
      throw new Error("Invalid password");
    }
    
    const token = generateToken({
      id: user.id,
      role: user.role, // adiciona
    });

    res.status(200).send({token, 
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
};
