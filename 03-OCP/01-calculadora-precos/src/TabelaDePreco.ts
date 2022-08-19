export class TabelaDePreco {
  desconto(valor: number): number {
    if (valor > 500) return 0.5
    else if (valor > 200) return 0.2
    return 0
  }
}
