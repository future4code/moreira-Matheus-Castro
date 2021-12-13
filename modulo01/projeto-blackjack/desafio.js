/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    
      


    console.log("Boas vindas ao jogo Blackjack!")

   if(confirm("Quer iniciar uma nova rodada?")){

      carta1usuario = comprarCarta()
      carta2usuario = comprarCarta()
      carta3usuario = comprarCarta()
      carta4usuario = comprarCarta()
      carta1computador = comprarCarta()
      carta2computador = comprarCarta()
      carta3computador = comprarCarta()
      carta4computador = comprarCarta()
      
      valorUsuario1 = carta1usuario + carta2usuario
      valorUsuario2 = carta1usuario + carta2usuario + carta3usuario
      valorUsuario2 = carta1usuario + carta2usuario + carta3usuario + carta4usuario

      valorcomputador1 = carta1computador + carta2computador
      valorcomputador2 = carta1computador + carta2computador + carta3computador    
      valorcomputador3 = carta1computador + carta2computador + carta3computador + carta4computador


      primeiraRodada = (`Suas cartas são ${carta1usuario.texto} ${carta2usuario.texto}. A carta revelada pelo computador é ${carta1computador.texto}`)


      if(confirm(`${primeiraRodada} Deseja comprar mais uma carta?`)){

      } else {
         
       
      alert(`Usuário - Cartas: ${comprarCarta()} ${comprarCarta()} - Pontuação `
         `Computadaor - Cartas: ${comprarCarta()} ${comprarCarta()} - Pontuação `)}
            
   }

   
      
   










/*    console.log("Boas vindas ao jogo Blackjack!")

   if(confirm("Quer iniciar uma nova rodada?")){

       carta1 = comprarCarta()
       carta2 = comprarCarta()
       carta3 = comprarCarta()
       carta4 = comprarCarta()

      valor1 = carta1.valor + carta2.valor
      valor2 = carta3.valor + carta4.valor

      console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${valor1}`)
      console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${valor2}`)

      if(valor1 > valor2){
         console.log("O usuário ganhou!")
      } if(valor1 < valor2){
         console.log("O computador ganhou!")
      } if(valor1 === valor2){
         console.log("Empate!")
      }
      


         } else {
      console.log("O jogo acabou")
   }
  */ 
