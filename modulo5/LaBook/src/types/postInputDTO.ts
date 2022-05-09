import { USER_ROLES } from "./typeEnum"

export type PostInputDTO = {
    photo:string,
    description:string,
    type:USER_ROLES
} 