type caracteristicas = {
    nome:string,
    idade:number,
    corFavorita: Role
}

enum Role{
    branco = "branco",
    azul = "azul"
}

function pessoa(parameter:caracteristicas){
    console.log(parameter.nome, parameter.idade, parameter.corFavorita)

}



pessoa({nome:"Matheus", idade: 24, corFavorita: Role.azul})

