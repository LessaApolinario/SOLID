import { CalculadoraDeSalario } from './CalculadoraDeSalario'
import { Funcionario } from './Funcionario'
import { Gerente } from './Gerente'

const funcionario = new Funcionario(100)
const gerente = new Gerente(100)

const calculadoraDeSalarioGerente = new CalculadoraDeSalario(gerente)
const calculadoraDeSalarioFuncionario = new CalculadoraDeSalario(funcionario)

const salarioGerenteFinal = calculadoraDeSalarioGerente.calcula()
const salarioFuncionarioFinal = calculadoraDeSalarioFuncionario.calcula()

console.log(`Salario gerente ${salarioGerenteFinal}`)
console.log(`Salario funcionario ${salarioFuncionarioFinal}`) // undefined
