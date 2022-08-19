import { ITabelaPreco } from './ITabelaPreco'

export class TabelaPreco20Porcento implements ITabelaPreco {
  desconto(valor: number): number {
    if (valor > 200) return 0.2
    return 0
  }
}
