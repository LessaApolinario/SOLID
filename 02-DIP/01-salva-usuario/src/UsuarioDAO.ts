import { GeradorDeSenha } from './GeradorDeSenha'
import { Usuario } from './Usuario'

export class UsuarioDAO {
  salva(usuario: Usuario) {
    const geradorDeSenha = new GeradorDeSenha()
    const senha  = geradorDeSenha.gerar()
    
    usuario = new Usuario('user', 'user@example.com', senha)
    return usuario
  }
}
