export class TabelaDePreco {
  desconto(valor: number): number {
    if (valor > 200) return 0.2
    if (valor > 500) return 0.5
    return 0
  }
}
