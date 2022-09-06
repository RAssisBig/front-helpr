import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChamadosAbertosComponent } from './dialog-chamados-abertos.component';

describe('DialogChamadosAbertosComponent', () => {
  let component: DialogChamadosAbertosComponent;
  let fixture: ComponentFixture<DialogChamadosAbertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChamadosAbertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChamadosAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
