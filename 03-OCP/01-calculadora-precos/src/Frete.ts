export class Frete {
  para(cidade: string): number {
    if (cidade.toUpperCase() === 'SAO PAULO') {
      return 10
    }

    return 20
  }
}
