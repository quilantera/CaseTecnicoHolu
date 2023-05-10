export function CalcularTotalDePlacas(potenciaTotalDisponivel,potenciaPorPlaca){
  
    var totalDePlacas= parseInt(potenciaTotalDisponivel/potenciaPorPlaca);
    /*
        Na física Elétrica,
        a a potência deve ser MAIOR OU IGUAL a da fonte original
        ou seja, o consumo total das placas deverá ser menor ou igual a 45000W
     */
    return(totalDePlacas);
}