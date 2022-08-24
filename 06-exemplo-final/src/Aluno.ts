export class Aluno {
  constructor(
    private nome: string,
    private turma: number,
    private notas: number[]
  ) {}


  get getNome(): string {
    return this.nome
  }

  get getTurma(): number {
    return this.turma
  }

  get getNotas(): number[] {
    return this.notas
  }
}
