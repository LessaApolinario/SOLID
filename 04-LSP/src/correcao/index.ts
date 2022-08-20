import { Conta } from './Conta'
import { ContaEstudante } from './ContaEstudante'

const conta = new Conta()
conta.saca(100)
conta.rende()

console.log('Saldo conta comum: ', conta.mostraSaldo())

const contaEstudante = new ContaEstudante()
contaEstudante.saca(100)

console.log('Saldo conta estudante: ', contaEstudante.mostraSaldo())
