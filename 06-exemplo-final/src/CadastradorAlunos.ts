import { Aluno } from './Aluno'
import { ICadastro } from './ICadastro'

export class CadastradorAlunos implements ICadastro<Aluno> {
  private alunos: Aluno[] = []

  async cadastrar(aluno: Aluno): Promise<void> {
    this.alunos.push(aluno)
    console.log('Aluno cadastrado:', aluno)
  }
}
