import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChamadosTecnicoUrgentesComponent } from './dialog-chamados-tecnico-urgentes.component';

describe('DialogChamadosTecnicoUrgentesComponent', () => {
  let component: DialogChamadosTecnicoUrgentesComponent;
  let fixture: ComponentFixture<DialogChamadosTecnicoUrgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChamadosTecnicoUrgentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChamadosTecnicoUrgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
