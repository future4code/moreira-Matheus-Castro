import { USER_ROLES } from "../types/typeEnum";

export default class Post {
    constructor(
        id: string,
        photo: string,
        description: string,
        type: USER_ROLES,
        created_at: Date,
        author_id: string,
    ){}
}

 