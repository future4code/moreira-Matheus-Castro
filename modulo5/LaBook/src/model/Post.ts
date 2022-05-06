// CREATE TABLE IF NOT EXISTS labook_posts(
//     id VARCHAR(255) PRIMARY KEY,
//     photo VARCHAR(255) NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     type ENUM("normal","event") DEFAULT "normal",
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     author_id VARCHAR(255),
//     FOREIGN KEY (author_id) REFERENCES labook_users (id)
//  )

export default class Post {
    constructor(
        id: string,
        photo: string,
        description: string,
        type: ENUM.TYPE,
        created_at: string,
        author_id: string,
    ){}
}


export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
 }
 
/*  export type authenticationData = {
    id: string,
    role: USER_ROLES
 }
 
 export type user = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
 } */