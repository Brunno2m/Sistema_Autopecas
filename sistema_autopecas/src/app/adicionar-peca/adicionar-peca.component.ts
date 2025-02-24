import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PecaService } from '../services/peca.service';
import { Peca } from '../models/peca';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-adicionar-peca',
  templateUrl: './adicionar-peca.component.html'
})
export class AdicionarPecaComponent implements OnInit {
  pecaForm: FormGroup;
  catalogoPecas: any[] = [];
  mostrarCatalogo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private pecaService: PecaService,
    private catalogoService: CatalogoService
  ) {
    this.pecaForm = this.fb.group({
      nome: ['', Validators.required],
      aplicacao: ['', Validators.required],
      ano: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      preco: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  ngOnInit(): void {}

  carregarCatalogo(): void {
    this.catalogoService.getCatalogoPecas().subscribe(data => {
      this.catalogoPecas = data;
      this.mostrarCatalogo = true;
    });
  }

  onSubmit(): void {
    if (this.pecaForm.valid) {
      const { nome, aplicacao, ano, modelo, marca, preco } = this.pecaForm.value;
      const novaPeca = new Peca(Date.now(), nome, parseFloat(preco));
      // Adicione mais campos à classe Peca conforme necessário
      this.pecaService.adicionarPeca(novaPeca);
      this.pecaForm.reset();
    }
  }
}
