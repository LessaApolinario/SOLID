export class Produto {
  constructor(private cidade: string, private valor: number) {}

  get getValor(): number {
    return this.valor
  }

  get getCidade(): string {
    return this.cidade
  }
}
