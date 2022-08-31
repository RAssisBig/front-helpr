import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoDetailsComponent } from './chamado-details.component';

describe('ChamadoDetailsComponent', () => {
  let component: ChamadoDetailsComponent;
  let fixture: ComponentFixture<ChamadoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
