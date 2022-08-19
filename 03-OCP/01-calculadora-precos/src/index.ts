import { CalculadoraDePrecos } from './CalculadoraDePrecos'
import { Produto } from './Produto'

const produto1 = new Produto('SAO PAULO', 200)
const produto2 = new Produto('SAO PAULO', 300)
const produto3 = new Produto('SAO PAULO', 600)

const calculadoraDePrecos = new CalculadoraDePrecos()
console.log('preco sem desconto', calculadoraDePrecos.calcula(produto1))
console.log('preco com 20% de desconto', calculadoraDePrecos.calcula(produto2))
console.log('preco com 50% de desconto', calculadoraDePrecos.calcula(produto3))
