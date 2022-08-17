class Funcionario {
  private salario: number
  private cargo: string

  constructor(salario: number, cargo: string) {
    this.salario = salario
    this.cargo = cargo
  }

  get getSalario() {
    return this.salario
  }

  get getCargo() {
    return this.cargo
  }
}

export default Funcionario
