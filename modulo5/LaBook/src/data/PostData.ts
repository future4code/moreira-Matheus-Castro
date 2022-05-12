import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";


export default class PostData extends BaseDatabase {
    protected TABLE_NAME = "labook_posts";

    insert = async (post: Post) => {
        try {
            console.log(post)
            await this.connection
                .into(this.TABLE_NAME)
                .insert(post)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro do banco");
            }
        }
    }

    findById = async (id: string): Promise<Post> => {
        try {
            const result = await this.connection
                .select("*")
                .from(this.TABLE_NAME)
                .where({ id: id })

            return result[0]
        } catch (error) {
            throw new Error("Post não encontrado");

        }
    }
}