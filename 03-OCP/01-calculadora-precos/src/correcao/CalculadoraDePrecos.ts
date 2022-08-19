import { Produto } from '../Produto';
import { IServicoDeEntrega } from './IServicoDeEntrega';
import { ITabelaPreco } from './ITabelaPreco'

export class  CalculadoraDePrecos {
  constructor(
    private tabela: ITabelaPreco,
    private entrega: IServicoDeEntrega
  ) {}

  calcula(produto: Produto) {
    const desconto = this.tabela.desconto(produto.getValor)
    const frete = this.entrega.para(produto.getCidade)

    return produto.getValor * (1 - desconto) + frete
  }
}
