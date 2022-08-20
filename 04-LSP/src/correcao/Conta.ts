import { ManipuladorDeSaldo } from './ManipuladorDeSaldo'

export class Conta {
  private manipulador: ManipuladorDeSaldo

  constructor() {
    this.manipulador = new ManipuladorDeSaldo()
  }

  saca(valor: number) {
    this.manipulador.adiciona(valor)
  }

  rende() {
    this.manipulador.juros(1.2)
  }

  mostraSaldo(): number {
    return this.manipulador.getSaldo
  }
}
