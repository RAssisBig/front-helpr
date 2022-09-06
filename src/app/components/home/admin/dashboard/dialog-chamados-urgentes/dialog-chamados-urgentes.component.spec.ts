import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChamadosUrgentesComponent } from './dialog-chamados-urgentes.component';

describe('DialogChamadosUrgentesComponent', () => {
  let component: DialogChamadosUrgentesComponent;
  let fixture: ComponentFixture<DialogChamadosUrgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChamadosUrgentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChamadosUrgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
