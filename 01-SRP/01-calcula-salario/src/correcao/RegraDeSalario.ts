import Funcionario from '../Funcionario'

interface RegraDeSalario {
  calcula(funcionario: Funcionario): number
}

export default RegraDeSalario
