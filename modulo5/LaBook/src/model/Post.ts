import { USER_ROLES } from "../types/typeEnum";

export default class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: USER_ROLES,
        private created_at: Date,
        private author_id: string,
    ){}
}

 