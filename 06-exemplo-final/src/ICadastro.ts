export interface ICadastro<T> {
  cadastrar(data: T): Promise<void>
}
