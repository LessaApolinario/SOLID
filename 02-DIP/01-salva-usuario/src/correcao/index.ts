import { GeradorDeUsuario } from './GeradorDeUsuario'
import { Usuario } from '../Usuario'
import { UsuarioDAO } from './UsuarioDAO'

const usuario = new Usuario('user1', 'user1@email.com', '')
const usuarioDAO = new UsuarioDAO()
const geradorDeUsuario = new GeradorDeUsuario([usuarioDAO])
geradorDeUsuario.gera(usuario)