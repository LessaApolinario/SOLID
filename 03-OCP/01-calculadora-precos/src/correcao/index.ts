import { CalculadoraDePrecos } from './CalculadoraDePrecos'
import { Produto } from '../Produto'
import { TabelaPreco20Porcento } from './TabelaPreco20Porcento'
import { ServicoDeEntregaSaoPaulo } from './ServicoDeEntregaSaoPaulo'
import { TabelaPreco50Porcento } from './TabelaPreco50Porcento'

const produto1 = new Produto('SAO PAULO', 200)
const produto2 = new Produto('SAO PAULO', 300)
const produto3 = new Produto('SAO PAULO', 600)

// classes que não estão acopladas à classe CalculadoraDePrecos
// elas satisfazem o comportamento definido pela interface
// logo, podem ser passadas no constrtuor
const tabelaPreco20Porcento = new TabelaPreco20Porcento()
const tabelaPreco50Porcento = new TabelaPreco50Porcento()
const servicoDeEntregaSaoPaulo = new ServicoDeEntregaSaoPaulo()

// cidade de São paulo e desconto de 20%
const calculadoraDePrecos20 = new CalculadoraDePrecos(
  tabelaPreco20Porcento, servicoDeEntregaSaoPaulo
)

// cidade de São paulo e desconto de 50%
const calculadoraDePrecos50 = new CalculadoraDePrecos(
  tabelaPreco50Porcento, servicoDeEntregaSaoPaulo
)

// cidade de São paulo e desconto variando por valor da compra
const semDesconto = calculadoraDePrecos20.calcula(produto1)
const desconto20 = calculadoraDePrecos20.calcula(produto2)
const desconto50 = calculadoraDePrecos50.calcula(produto3)

console.log('Observacoes:\n')

// o mesmo resultado da variável semDesconto
const semDescontoRegra50 = calculadoraDePrecos50.calcula(produto1)
console.log('Sem desconto com regra de 50%', semDescontoRegra50)

// o resutado do  desconto de 50% com a regra de 20% é incorreto
// para isso devemos passar o produto com o preço que não satisfaz a regra
const desconto50ComRegra20 = calculadoraDePrecos20.calcula(produto3)
console.log('Desconto de 50% com regra de 20%', desconto50ComRegra20)

console.log('\nFim observacoes\n')

console.log('Resultados:')
console.log(`
  Sem desconto: ${semDesconto} \n
  20% de desconto: ${desconto20} \n
  50% de desconto: ${desconto50}
`)
