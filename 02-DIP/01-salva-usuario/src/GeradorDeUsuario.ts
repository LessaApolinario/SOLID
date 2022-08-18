import { Usuario } from './Usuario'
import { UsuarioDAO } from './UsuarioDAO'

export class GeradorDeUsuario {
  private usuarioDAO: UsuarioDAO

  constructor(
    usuarioDAO: UsuarioDAO
  ) {
    this.usuarioDAO = usuarioDAO
  }

  salva(usuario: Usuario) {
    return this.usuarioDAO.salva(usuario)
  }
}
