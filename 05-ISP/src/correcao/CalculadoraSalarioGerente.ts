import { ICalculaBonus } from './ICalculaBonus'
import { ICalculaSalario } from './ICalculaSalario'

export class CalculadoraSalarioGerente {
  constructor(
    private salario: ICalculaSalario,
    private bonus: ICalculaBonus
  ) {}

  calcula() {
    const salario = this.salario.calcula()
    const bonus = this.bonus.bonus()

    return salario + bonus
  }
}
