import { GeradorDeSenha } from '../GeradorDeSenha'
import { Usuario } from '../Usuario'
import { AcoesAposGeraUsuario } from './AcoesAposGeraUsuario'

export class UsuarioDAO implements AcoesAposGeraUsuario<Usuario> {
  async executa(usuario: Usuario): Promise<Usuario> {
    const geradorDeSenha = new GeradorDeSenha()
    const senha = geradorDeSenha.gerar()
    
    usuario = new Usuario('usuario', 'usuario@example.com', senha)
    return usuario
  }
}
