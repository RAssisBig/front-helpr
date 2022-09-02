import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoClientsComponent } from './chamado-clients.component';

describe('ChamadoClientsComponent', () => {
  let component: ChamadoClientsComponent;
  let fixture: ComponentFixture<ChamadoClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadoClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
