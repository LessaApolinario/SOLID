import { Usuario } from '../Usuario'
import { AcoesAposGeraUsuario } from './AcoesAposGeraUsuario'

export class GeradorDeUsuario {
  constructor(private acoes: AcoesAposGeraUsuario<Usuario>[]) {}

  async gera(usuario: Usuario) {
    for (const acao of this.acoes) {
      const usuarioPromise = await acao.executa(usuario)
      console.log(`usuario`, usuarioPromise)
    }
  }
}
