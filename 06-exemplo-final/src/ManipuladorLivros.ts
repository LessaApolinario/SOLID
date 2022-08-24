import { ICadastro } from './ICadastro'
import { Livro } from './Livro'

export class ManipuladorLivros implements ICadastro<Livro> {
  constructor(private cadastrador: ICadastro<Livro>) {}
  
  async cadastrar(livro: Livro): Promise<void> {
    await this.cadastrador.cadastrar(livro)
  }
}
