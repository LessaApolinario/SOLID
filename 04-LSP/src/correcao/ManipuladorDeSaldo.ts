export class ManipuladorDeSaldo {
  private saldo: number
  
  constructor() {
    this.saldo = 0
  }

  adiciona(valor: number) {
    this.saldo += valor
  }

  retira(valor: number) {
    this.saldo -= valor
  }

  juros(taxa: number) {
    this.saldo *= taxa
  }

  get getSaldo(): number {
    return this.saldo
  }
}
