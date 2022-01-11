ˋˋˋ 
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

let arrayModificado = animais.map((apenasNomes)=>{
    return apenasNomes.nome
})
return(arrayModificado)

}
ˋˋˋ 