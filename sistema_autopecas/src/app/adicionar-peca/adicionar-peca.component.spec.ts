import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPecaComponent } from './adicionar-peca.component';

describe('AdicionarPecaComponent', () => {
  let component: AdicionarPecaComponent;
  let fixture: ComponentFixture<AdicionarPecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarPecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
