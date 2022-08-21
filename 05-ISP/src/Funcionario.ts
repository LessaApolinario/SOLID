import { ISalario } from './ISalario'

export class Funcionario implements ISalario {
  constructor(private salario: number) {}

  calcula(): number {
    return this.salario + 50
  }

  bonus(): number {
    throw new Error('Funcionario comum não tem bonus')
  }
}
