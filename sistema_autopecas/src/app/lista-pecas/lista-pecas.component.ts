import { Component, OnInit } from '@angular/core';
import { PecaService } from '../services/peca.service';
import { Peca } from '../models/peca';

@Component({
  selector: 'app-lista-pecas',
  templateUrl: './lista-pecas.component.html'
})
export class ListaPecasComponent implements OnInit {
  pecas: Peca[] = [];

  constructor(private pecaService: PecaService) {}

  ngOnInit(): void {
    this.pecas = this.pecaService.listarPecas();
  }
}
