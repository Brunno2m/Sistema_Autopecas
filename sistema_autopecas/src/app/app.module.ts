import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaPecasComponent } from './lista-pecas/lista-pecas.component';
import { AdicionarPecaComponent } from './adicionar-peca/adicionar-peca.component';
import { PecaService } from './services/peca.service';
import { CatalogoService } from './catalogo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPecasComponent,
    AdicionarPecaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PecaService,
    CatalogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
