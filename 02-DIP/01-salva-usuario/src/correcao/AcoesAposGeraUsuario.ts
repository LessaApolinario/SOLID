export interface AcoesAposGeraUsuario<T> {
  executa(data: T): Promise<T>
}
