import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/postInputDTO";

export default class PostBusiness {

  constructor(
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) { }

  createPost = async (token: string, input: PostInputDTO) => {
    const { photo, description, type } = input;

    if (!photo || !description || !type) {
      throw new Error("Preencha todos os campos")
    }

    const tokenData = this.authenticator.getTokenData(token)
    if (!tokenData) {
      throw new Error("Token inválido")
    }

    const id = this.idGenerator.generateId()

    const created_at = new Date()

    const author_id = tokenData.id

    const post = new Post(
      id,
      photo,
      description,
      type,
      created_at,
      author_id
    )
    
    await this.postData.insert(post)

  }

  getPostById = async (id: string) => {
    const post: Post = await this.postData.findById(id);

    return post;
  }
}