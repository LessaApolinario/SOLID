export class Livro {
  constructor(
    private titulo: string,
    private autor: string,
    private ano: string
  ) {}

  get getTitulo(): string {
    return this.titulo
  }

  get getAutor(): string {
    return this.autor
  }

  get getAno(): string {
    return this.ano
  }
}
