import { ISalario } from './ISalario'

export class Gerente implements ISalario {
  constructor(private salario: number) {}

  calcula(): number {
    return this.salario + 100
  }

  bonus(): number {
    return this.salario * 1.5
  }
}
