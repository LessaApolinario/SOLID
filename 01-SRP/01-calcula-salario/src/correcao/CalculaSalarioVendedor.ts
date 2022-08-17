import Funcionario from '../Funcionario'
import RegraDeSalario from './RegraDeSalario'

class CalculaSalarioVendedor implements RegraDeSalario {
  calcula(funcionario: Funcionario): number {
    return funcionario.getSalario + 80
  }
}

export default CalculaSalarioVendedor
