import { Aluno } from './Aluno'
import { CadastradorAlunos } from './CadastradorAlunos'
import { CadastradorLivros } from './CadastradorLivros'
import { CalculadoraMedia } from './CalculadoraMedia'
import { Livro } from './Livro'
import { ManipuladorAlunos } from './ManipuladorAlunos'
import { ManipuladorLivros } from './ManipuladorLivros'

async function main() {
  const cadastradorAlunos = new CadastradorAlunos()
  const calculadoraMedia = new CalculadoraMedia()

  // espera interfaces, ou seja, depende de abstrações
  // qualquer objeto que implemente as interfaces será aceito
  const manipuladorAlunos = new ManipuladorAlunos(
    cadastradorAlunos,
    calculadoraMedia
  )

  const aluno = new Aluno('Lucas', 912, [6, 7, 8, 9])
  await manipuladorAlunos.cadastrar(aluno)

  const media = manipuladorAlunos.calcula(aluno.getNotas)
  console.log('Média do aluno: ', media)

  const cadastradorLivros = new CadastradorLivros()

  // espera um objeto que implemente a interface esperada
  const manipuladorLivros = new ManipuladorLivros(
    cadastradorLivros
  )

  const livro = new Livro('Livro teste', 'Autor teste', '2000')

  await manipuladorLivros.cadastrar(livro)
}

main()
