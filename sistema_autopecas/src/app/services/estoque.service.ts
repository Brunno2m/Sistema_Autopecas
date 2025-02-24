import { Injectable } from '@angular/core';
import { Estoque } from '../models/estoque';
import { Peca } from '../models/peca';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private estoque = new Estoque();

  adicionarPeca(peca: Peca): void {
    this.estoque.adicionarPeca(peca);
  }

  listarPecas(): Peca[] {
    return this.estoque.listarPecas();
  }
}
