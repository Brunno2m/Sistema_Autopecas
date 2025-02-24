import { Injectable } from '@angular/core';
import { Peca } from '../models/peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private pecas: Peca[] = [];

  adicionarPeca(peca: Peca): void {
    this.pecas.push(peca);
  }

  listarPecas(): Peca[] {
    return this.pecas;
  }
}
