import { Peca } from './peca';

export class PecaEspecial extends Peca {
  constructor(
    id: number,
    nome: string,
    preco: number,
    public descricaoEspecial: string
  ) {
    super(id, nome, preco);
  }

  // Adicionando o modificador 'override'
  override descricao(): string {
    return `Peça Especial: ${this.nome} - Descrição: ${this.descricaoEspecial} - Preço: R$${this.preco}`;
  }
}
