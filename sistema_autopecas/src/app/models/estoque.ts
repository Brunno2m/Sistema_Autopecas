import { Peca } from './peca';

export class Estoque {
  private pecas: Peca[] = [];

  adicionarPeca(peca: Peca): void {
    this.pecas.push(peca);
  }

  listarPecas(): Peca[] {
    return this.pecas;
  }
}
