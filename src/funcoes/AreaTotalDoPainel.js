export function CalcularAreaTotalDoPainel(totalDePlacas, larguraDaPlaca, comprimentoDaPlaca){ 
    const areaPorPlaca = larguraDaPlaca * comprimentoDaPlaca;
    const areaTotalCoberta = totalDePlacas * areaPorPlaca;
    return (areaTotalCoberta);
}