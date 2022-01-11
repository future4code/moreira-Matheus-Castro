// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
   return array.sort((a, b) => a - b)
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
/*   const numPar = []
  for(let num of array){
    if(num % 2 === 0)
    numPar.push(num)
  }
  return numPar */
 const filtered =
 array.filter((value)=>{
   return (value % 2 === 0)
 })
 return filtered
  
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
  const numPar = []
  for(let num of array){
    if(num % 2 === 0)
    numPar.push(num**2)
  }
  return numPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

 return Math.max(...array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  
    const numeros = {
      maiorNumero:(num1 > num2 ? num1 : num2), 
      maiorDivisivelPorMenor: (num1%num2 === 0 || num2%num1===0 ? true : false),
      diferenca: (num1 > num2 ? num1-num2 : num2-num1)
       }
       
       return numeros 
        

  
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 === 0) {
          numerosPares.push(i)
      }
  }
  return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  tipoTriangulo = "Equilátero" || "Isósceles" || "Escaleno"
  if(ladoA === ladoB && ladoA === ladoC){
    tipoTriangulo = "Equilátero"
  } 
  else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    tipoTriangulo = "Isósceles"
  } else{
    tipoTriangulo = "Escaleno"
  }
  return tipoTriangulo
  
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
      filme = {
    
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 
 novasPessoasAnonimas = {
   ...pessoa,
   nome:"ANÔNIMO"
 }


  return novasPessoasAnonimas
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  pessoasAutorizadas = []
  for(let info of pessoas){
    
    if(info.idade > 14 && info.altura > 1.5 && info.idade < 60){
      pessoasAutorizadas.push(info)
    }
    
  }
    return pessoasAutorizadas
  }
   

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  pessoasNaoAutorizadas = []
 /*  for(let info of pessoas){
    
    if(info.idade > 14 && info.altura > 1.5 && info.idade < 60){
      
    } else {
      pessoasNaoAutorizadas.push(info)
    }
     
  }
  return pessoasNaoAutorizadas */

  for(let info of pessoas){
    if(info.idade <= 14 || info.altura <= 1.5 || info.idade >= 60){
      pessoasNaoAutorizadas.push(info)
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

  
  contas.forEach((item) =>{
    let totalGasto = 0
    item.compras.forEach((comprasTotal) =>{
      totalGasto += comprasTotal
    })
    item.saldoTotal -= totalGasto
    item.compras = []
  })
  return contas

  // essa foi um colega que me passou, não estava conseguindo resolver
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (x, y) {
	
    return (x.nome > y.nome) ? 1 : ((y.nome > x.nome) ? -1 : 0)
  })
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}