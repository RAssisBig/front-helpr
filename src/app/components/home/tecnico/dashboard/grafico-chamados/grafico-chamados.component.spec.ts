import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoChamadosComponent } from './grafico-chamados.component';

describe('GraficoChamadosComponent', () => {
  let component: GraficoChamadosComponent;
  let fixture: ComponentFixture<GraficoChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoChamadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
