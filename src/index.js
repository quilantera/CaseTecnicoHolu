import {
    CalcularAreaTotalDoPainel,
    CalcularComprimentoDaEstrutura,
    CalcularPotenciaTotalDoPainel,
    CalcularTotalDeMicroInversores,
    CalcularTotalDePlacas
} from './funcoes/index.js';

const potenciaTotalDisponivel = 4500  
const potenciaPorPlaca = 550;
const dimencoesDaPlaca = [1.95,1.1]//[comprimento ,largura]


const totalDePlacas = CalcularTotalDePlacas(potenciaTotalDisponivel,potenciaPorPlaca);
const potenciaTotalDoPainel = CalcularPotenciaTotalDoPainel(totalDePlacas,potenciaPorPlaca);
const areaTotal =  CalcularAreaTotalDoPainel(totalDePlacas,dimencoesDaPlaca[0],dimencoesDaPlaca[1]);
const comprimentoDaEstrutura =  CalcularComprimentoDaEstrutura(totalDePlacas,dimencoesDaPlaca[0],dimencoesDaPlaca[1]);
const totalMicroInversores = CalcularTotalDeMicroInversores(totalDePlacas);

console.log('Potencia Disponível: '+potenciaTotalDisponivel+'W');
console.log('Potencia total do painel: '+ potenciaTotalDoPainel+ 'W');
console.log('Quantidade de placas: ',totalDePlacas);
console.log('Quantidade de MicroInversores: ',totalMicroInversores);
console.log('area Total: '+areaTotal+ 'm2');
console.log('comprimento da estrutura:'+comprimentoDaEstrutura+ 'm');







