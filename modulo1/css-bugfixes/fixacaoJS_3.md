´´´ function calculaNota(ex, p1, p2) {
    p1 = p1 * 2 
    p2 = p2 * 3
    
     mediaTotal = ((p1 + p2 + ex) / 6)

     if(mediaTotal > 9){
       conceito = "A"
     }
     if(mediaTotal < 9 && mediaTotal >= 7.5){
        conceito = "B"
     }
     if(mediaTotal < 7.5 && mediaTotal >= 6){
        conceito = "C"
     } if(mediaTotal < 6){
        conceito = "D"
     }
     
     console.log(conceito)

     return conceito
  } ´´´