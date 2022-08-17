import Funcionario from '../Funcionario'
import RegraDeSalario from './RegraDeSalario'

class CalculaSalarioAtendente implements RegraDeSalario {
  calcula(funcionario: Funcionario): number {
    return funcionario.getSalario + 100
  }
}

export default CalculaSalarioAtendente
