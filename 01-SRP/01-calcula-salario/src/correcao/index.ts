import Funcionario from '../Funcionario'
import CalculaSalarioAtendente from './CalculaSalarioAtendente'
import CalculaSalarioGerente from './CalculaSalarioGerente'
import CalculaSalarioVendedor from './CalculaSalarioVendedor'

const vendedor = new Funcionario(1000, 'vendedor')
const atendente = new Funcionario(1000, 'atendente')
const gerente = new Funcionario(1000, 'gerente')

const calculaSalarioVendedor = new CalculaSalarioVendedor()
const salarioVendedor = calculaSalarioVendedor.calcula(vendedor)

const calculaSalarioAtendente = new CalculaSalarioAtendente()
const salarioAtendente = calculaSalarioAtendente.calcula(atendente)

const calculaSalarioGerente = new CalculaSalarioGerente()
const salarioGerente = calculaSalarioGerente.calcula(gerente)

console.log(`
  Salario vendedor: ${salarioVendedor} \n
  Salario atendente: ${salarioAtendente} \n
  Salario gerente: ${salarioGerente}
`)
