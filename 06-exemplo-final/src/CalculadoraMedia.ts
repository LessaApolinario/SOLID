import { IMedia } from './IMedia'

export class CalculadoraMedia implements IMedia {
  calcula(lista: number[]): number {
    const soma = lista.reduce((acc, item) => acc + item, 0)
    return soma / lista.length
  }
}
