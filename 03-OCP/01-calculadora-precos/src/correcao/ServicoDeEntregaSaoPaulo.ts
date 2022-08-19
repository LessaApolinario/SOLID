import { IServicoDeEntrega } from './IServicoDeEntrega'

export class ServicoDeEntregaSaoPaulo implements IServicoDeEntrega {
  para(cidade: string): number {
    if (cidade.toUpperCase() === 'SAO PAULO') {
      return 10
    }

    return 20
  }
}
