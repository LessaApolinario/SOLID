import { ICadastro } from './ICadastro'
import { Livro } from './Livro'

export class CadastradorLivros implements ICadastro<Livro> {
  private livros: Livro[] = []

  async cadastrar(livro: Livro): Promise<void> {
    this.livros.push(livro)
    console.log('Livro cadastrado:', livro)
  }
}
