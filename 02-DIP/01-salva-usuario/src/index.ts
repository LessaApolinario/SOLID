import { GeradorDeUsuario } from './GeradorDeUsuario'
import { Usuario } from './Usuario'
import { UsuarioDAO } from './UsuarioDAO'

const usuario = new Usuario('', '', '')
const usuarioDAO = new UsuarioDAO()
const geradorDeUsuario = new GeradorDeUsuario(usuarioDAO)
console.log('usuario gerado:', geradorDeUsuario.salva(usuario))
