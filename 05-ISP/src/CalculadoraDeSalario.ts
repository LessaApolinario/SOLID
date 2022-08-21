import { ISalario } from './ISalario'

export class CalculadoraDeSalario {
  constructor(private salario: ISalario) {}

  calcula(): number | undefined {
    const salario = this.salario.calcula()

    try {
      const bonus = this.salario.bonus()
      return salario + bonus
    } catch (error: any) {
      console.error(error.message)
    }
  }
}
