import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDashboardComponent } from './tecnicodashboard.component';

describe('TecnicoDashboardComponent', () => {
  let component: TecnicoDashboardComponent;
  let fixture: ComponentFixture<TecnicoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
