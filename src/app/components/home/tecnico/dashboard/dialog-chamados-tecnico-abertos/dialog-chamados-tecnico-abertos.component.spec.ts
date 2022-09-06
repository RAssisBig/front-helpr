import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChamadosTecnicoAbertosComponent } from './dialog-chamados-tecnico-abertos.component';

describe('DialogChamadosTecnicoAbertosComponent', () => {
  let component: DialogChamadosTecnicoAbertosComponent;
  let fixture: ComponentFixture<DialogChamadosTecnicoAbertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChamadosTecnicoAbertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChamadosTecnicoAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
