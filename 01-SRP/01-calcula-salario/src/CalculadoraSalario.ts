import Funcionario from './Funcionario'

class CalculadoraSalario {

  public calcula(funcionario: Funcionario): number {
    if (funcionario.getCargo === 'gerente') {
      return 23
    } else if (funcionario.getCargo === 'vendedor' || 
      funcionario.getCargo === 'atendente') {
        return 2
    }

    throw new Error('Funcionario invalido')
  }
}

export default CalculadoraSalario
