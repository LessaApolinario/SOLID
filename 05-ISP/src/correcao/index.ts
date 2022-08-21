import { CalculadoraSalarioFuncionario } from './CalculadoraSalarioFuncionario'
import { CalculadoraSalarioGerente } from './CalculadoraSalarioGerente'
import { Funcionario } from './Funcionario'
import { Gerente } from './Gerente'

const gerente = new Gerente(100)
const funcionario = new Funcionario(100)

const calculadoraSalarioGerente = new CalculadoraSalarioGerente(
  gerente,
  gerente
)

const calculadoraSalarioFuncionario =
  new CalculadoraSalarioFuncionario(funcionario)


const salarioGerenteFinal = calculadoraSalarioGerente.calcula()
const salarioFuncionarioFinal = calculadoraSalarioFuncionario.calcula()

console.log('Salario gerente: ', salarioGerenteFinal)
console.log('Salario funcionario: ', salarioFuncionarioFinal)
