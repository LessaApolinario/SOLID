import { ICalculaSalario } from './ICalculaSalario'

export class CalculadoraSalarioFuncionario {
  constructor(private salario: ICalculaSalario) {}
  
  calcula() {
    return this.salario.calcula()
  }
}
