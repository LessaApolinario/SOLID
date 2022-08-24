import { Aluno } from './Aluno';
import { ICadastro } from './ICadastro'
import { IMedia } from './IMedia';

export class ManipuladorAlunos implements ICadastro<Aluno>, IMedia {
  constructor(
    private cadastrador: ICadastro<Aluno>,
    private calculadora: IMedia
  ) {}
  
  async cadastrar(aluno: Aluno): Promise<void> {
    await this.cadastrador.cadastrar(aluno)
  }
  
  calcula(lista: number[]): number {
    return this.calculadora.calcula(lista)
  }
}
