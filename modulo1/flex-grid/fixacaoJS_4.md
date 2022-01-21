``function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const repeat =(arrayDeNumeros.filter((resultado)=>(
     resultado === numeroEscolhido  
     )))
        return repeat.length>0 ? `O número ${numeroEscolhido} aparece ${repeat.length}x`:
        `Número não encontrado`
}``