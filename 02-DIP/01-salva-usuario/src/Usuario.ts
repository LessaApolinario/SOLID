export class Usuario {
  constructor(
    private nome: string, 
    private email: string, 
    private senha: string
  ) {}

  get getNome(): string {
    return this.nome
  }

  get getEmail(): string {
    return this.email
  }

  get getSenha(): string {
    return this.senha
  }

  set setSenha(senha: string) {
    this.senha = senha
  }
}
