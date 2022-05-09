import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import Post from "../model/Post";
import { PostInputDTO } from "../types/postInputDTO";

export default class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }

    insertPost = async (req: Request, res: Response) => {
        const { photo, description, type } = req.body

        const token = req.headers.authorization as string

        const input: PostInputDTO = {
            photo,
            description,
            type,
        }

        try {
            await this.postBusiness.createPost(input, token);

            res.status(200).send("Sucess!");
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Erro tente novamente");
        }
    };

    getPostById = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const post: Post = await this.postBusiness.getPostById(id);

            res.status(200).send(post);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Erro  tente novamente.");
        }
    };
}