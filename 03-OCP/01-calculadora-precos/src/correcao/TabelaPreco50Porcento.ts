import { ITabelaPreco } from './ITabelaPreco'

export class TabelaPreco50Porcento implements ITabelaPreco {
  desconto(valor: number): number {
    if (valor > 500) return 0.5
    return 0
  }
}