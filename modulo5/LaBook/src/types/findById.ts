import { USER_ROLES } from "./typeEnum";

export type FindByIdResponse = {
    id: string,
    photo: string,
    description: string,
    type: USER_ROLES,
    created_at: Date,
    author_id: string,
}[]
