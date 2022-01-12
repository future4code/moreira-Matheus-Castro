// 1

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) */

  // É impresso 3 arrays, um para cada item, contendo todas informações dos itens
  // e também o indice dos mesmos

  // 2

 /*  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */

// É impresso apenas os nomes de: Amanda Range, Lais Petra e Leticia Chijo

// 3

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)  */

  // Só vai imprimir os itens que NÃO possuem o apelido de CHIJO

  // ------------------------------------

  // 1 
  // a
/*   const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 */
/* function retornaNomes(item){
    return item.nome
}

const retornaNomePets = pets.map(retornaNomes)
console.log(retornaNomePets) */

// b 

/* function retornaApenasSalsicha(tipo){
    return tipo.raca === "Salsicha"
}

const imprimeApenasSalsicha = pets.filter(retornaApenasSalsicha)
console.log(imprimeApenasSalsicha) */

// c

/* function ApenasParapoodles(item){
    return item.raca === "Poodle"
}
function imprimeDesconto(item){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
}

const imprimeParaPoodles = pets.filter(ApenasParapoodles)
const imprimindoMensagemDesconto = imprimeParaPoodles.map(imprimeDesconto)
console.log(imprimindoMensagemDesconto) */

// 2
// a
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/*  function apenasNomes(item){
     return item.nome
 }

 const imprimeApenasNomes = produtos.map(apenasNomes)
    console.log(imprimeApenasNomes) */

    // b

 /*   function nomeEPrecos(item){
       return `Nome: ${item.nome}, preço: ${item.preco * 0.95 }`
   }


   const imprimeNomeEPreco = produtos.map(nomeEPrecos)

   console.log(imprimeNomeEPreco) */

   // c

/*    function apenasBebidas(item, indice, array){
       return item.categoria === "Bebidas"
   }

   const imprimeBebidas = produtos.filter(apenasBebidas)
   console.log(imprimeBebidas) */

   // d

   /* function queContenhaYpe(item, indice, array){
       if (item.nome.includes("Ypê"))
       return item.nome
   }

   const imprimeComYpe = produtos.filter(queContenhaYpe)
   console.log(imprimeComYpe) */

   // e

    function retornaYpe(item, indice, array){
        return item.nome.includes("Ypê")
    }

    function criaFrase(item, indice, array){
        return `Compre ${item.nome} por ${item.preco}`
    }

const ype = produtos.filter(retornaYpe).map(criaFrase)
console.log(imprimeFraseYpe)
   