function calculaPrecoTotal(quantidade) {
    if(quantidade < 12){
      preco = 1.30
    } if(quantidade >= 12){
      preco = 1.00
    }
    let precoTotal = (quantidade * preco)
   
    return precoTotal
}