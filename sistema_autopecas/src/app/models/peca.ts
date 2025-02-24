export class Peca {
  constructor(
    public id: number,
    public nome: string,
    public preco: number
  ) {}

  descricao(): string {
    return `Peça: ${this.nome} - Preço: R$${this.preco}`;
  }
}
