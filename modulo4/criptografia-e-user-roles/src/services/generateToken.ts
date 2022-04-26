import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

  export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id, 
        role: input.role, // adiciona
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1min"
      }
    );
    return token;
  }
