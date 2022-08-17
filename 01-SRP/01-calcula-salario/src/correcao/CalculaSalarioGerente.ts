import Funcionario from '../Funcionario'
import RegraDeSalario from './RegraDeSalario'

class CalculaSalarioGerente implements RegraDeSalario {
  calcula(funcionario: Funcionario): number {
    return funcionario.getSalario + 400
  }
}

export default CalculaSalarioGerente
