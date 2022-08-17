import CalculadoraSalario from "./CalculadoraSalario";
import Funcionario from "./Funcionario";

const calculadoraSalario = new CalculadoraSalario()

const salarioVendedor = calculadoraSalario
  .calcula(new Funcionario(650, 'vendedor'))

const salarioAtendente = calculadoraSalario
  .calcula(new Funcionario(650, 'atendente'))

const salarioGerente = calculadoraSalario
  .calcula(new Funcionario(650, 'gerente'))

console.log('salarioVendedor', salarioVendedor)
console.log('salarioAtendente', salarioAtendente)
console.log('salarioGerente', salarioGerente);
