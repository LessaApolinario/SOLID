import { ICalculaBonus } from './ICalculaBonus';
import { ICalculaSalario } from './ICalculaSalario'

export class Gerente implements ICalculaSalario, ICalculaBonus {
  constructor(private salario: number) {}
  
  calcula(): number {
    return this.salario + 100
  }

  bonus(): number {
    return this.salario * 1.5
  }
}
