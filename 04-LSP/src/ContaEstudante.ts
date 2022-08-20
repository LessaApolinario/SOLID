import { Conta } from './Conta'

export class ContaEstudante extends Conta {
  rende(): void {
    throw new Error('Conta do tipo estudante não rende')
  }
}
