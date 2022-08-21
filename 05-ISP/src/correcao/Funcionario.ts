import { ICalculaSalario } from './ICalculaSalario'

export class Funcionario implements ICalculaSalario {
  constructor(private salario: number) {}

  calcula(): number {
    return this.salario + 50
  }
}
