export class Conta {
  private saldo: number

  constructor() {
    this.saldo = 0
  }

  deposita(valor: number) {
    if (valor <= 0) throw new Error('Valor inválido')

    this.saldo += valor
  }

  get getSaldo() {
    return this.saldo
  }

  rende() {
    this.saldo *= 1.2
  }
}