import { Frete } from './Frete'
import { Produto } from './Produto'
import { TabelaDePreco } from './TabelaDePreco'

export class CalculadoraDePrecos {
  calcula(produto: Produto): number {
    const tabela = new TabelaDePreco()
    const correios = new Frete()

    const desconto = tabela.desconto(produto.getValor)
    const frete = correios.para(produto.getCidade)

    return produto.getValor * (1 - desconto) + frete
  }
}
