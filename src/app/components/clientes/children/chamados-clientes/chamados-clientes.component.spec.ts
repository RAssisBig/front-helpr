import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosClientesComponent } from './chamados-clientes.component';

describe('ChamadosClientesComponent', () => {
  let component: ChamadosClientesComponent;
  let fixture: ComponentFixture<ChamadosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
