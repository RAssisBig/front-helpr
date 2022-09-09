import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoUrgenteComponent } from './chamado-urgente.component';

describe('ChamadoUrgenteComponent', () => {
  let component: ChamadoUrgenteComponent;
  let fixture: ComponentFixture<ChamadoUrgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoUrgenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadoUrgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
