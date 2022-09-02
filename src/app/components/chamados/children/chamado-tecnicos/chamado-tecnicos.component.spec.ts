import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoTecnicosComponent } from './chamado-tecnicos.component';

describe('ChamadoTecnicosComponent', () => {
  let component: ChamadoTecnicosComponent;
  let fixture: ComponentFixture<ChamadoTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoTecnicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadoTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
