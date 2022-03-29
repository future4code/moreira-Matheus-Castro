enum Nivel {
    ADMIN = "admin",
    USER = "user"
}

type Usuarios = {
    name: string, 
    email: string,
    role: string,
}[]

const usuarios: Usuarios = [
	{name: "Rogério", email: "roger@email.com", role: Nivel.USER},
	{name: "Ademir", email: "ademir@email.com", role: Nivel.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Nivel.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Nivel.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Nivel.USER},  
	{name: "Carina", email: "carina@email.com", role: Nivel.ADMIN}      
]

function roleUsuario(user: Usuarios): string[] {
    const nivelFiltro = user.filter((user) => {
        return user.role === Nivel.ADMIN
    })

    const emailFiltro = nivelFiltro.map((user) => {
        return user.email
    })

    return emailFiltro
}

console.log(roleUsuario(usuarios))