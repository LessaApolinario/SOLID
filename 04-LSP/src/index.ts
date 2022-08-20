import { Conta } from './Conta'
import { ContaEstudante } from './ContaEstudante'

const conta = new Conta()

try {
  conta.deposita(0)
} catch (error: any) {
  console.error(error.message)
}

try {
  conta.deposita(200)
  console.log('Depositou', conta.getSaldo)
} catch (error: any) {
  console.error(error.message)
}

console.log('Saldo: ', conta.getSaldo)

conta.rende()

console.log('Saldo após render: ', conta.getSaldo)

const contaEstudante = new ContaEstudante()

try {
  contaEstudante.deposita(200)
  console.log('Depositou em conta de estudante', contaEstudante.getSaldo)
} catch (error: any) {
  console.error(error.message)
}

try {
  contaEstudante.rende()
} catch (error: any) {
  console.error(error.message)
}

console.log('Saldo após render em estudante: ', contaEstudante.getSaldo)
