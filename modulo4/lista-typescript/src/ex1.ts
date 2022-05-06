function nomeIdade(nome: string, nascimento: string): string{
    const result: string[] = nascimento.split("/")
    const resposta: string = `Olá me chamo ${nome}, nasci no dia ${result[0]} do mês de ${result[1]} do ano de ${result[2]}` 
    return resposta
}

console.log(nomeIdade("Matheus", "28/08/1997"))