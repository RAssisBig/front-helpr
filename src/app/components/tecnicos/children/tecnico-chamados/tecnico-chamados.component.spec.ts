import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoChamadosComponent } from './tecnico-chamados.component';

describe('TecnicoChamadosComponent', () => {
  let component: TecnicoChamadosComponent;
  let fixture: ComponentFixture<TecnicoChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoChamadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
