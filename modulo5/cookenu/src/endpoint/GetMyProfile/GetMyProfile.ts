import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { generateToken } from "../../services/generateToken";
import { VerifyToken } from "../../services/VerifyToken";
import { GetMyProfile } from "./GetMyProfileFunction";

export default async (req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization as string

        const authenticationData = VerifyToken(token);

        const user = await GetMyProfile(authenticationData.id);

        res.status(200).send({
            user
        })

    } catch (err: any) {
        res.status(400).send({
          message: err.message,
        });
    }
}