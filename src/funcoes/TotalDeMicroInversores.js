export function CalcularTotalDeMicroInversores(totalDePlacas){
    //cada micro inversor pode operar até 4 placas
    var totalMicroInversores = (
        totalDePlacas%4 == 0 ? totalDePlacas/4: (totalDePlacas/4)+1
    )
    return (totalMicroInversores);
}