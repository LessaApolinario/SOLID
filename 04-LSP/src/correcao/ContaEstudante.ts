import { ManipuladorDeSaldo } from './ManipuladorDeSaldo'

export class ContaEstudante {
  private manipulador: ManipuladorDeSaldo

  constructor() {
    this.manipulador = new ManipuladorDeSaldo()
  }

  saca(valor: number) {
    this.manipulador.adiciona(valor)
  }

  mostraSaldo(): number {
    return this.manipulador.getSaldo
  }
}
