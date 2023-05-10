export function CalcularComprimentoDaEstrutura(totalDePlacas,larguraDaPlaca,ComprimentoDaPlaca) {
    const ComprimentoDaEstrutura= (larguraDaPlaca >ComprimentoDaPlaca ? 
        totalDePlacas*larguraDaPlaca*2 :
        totalDePlacas*ComprimentoDaPlaca*2 
    )
    
     return (ComprimentoDaEstrutura)
}