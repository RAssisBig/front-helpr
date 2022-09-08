import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPrioridadeComponent } from './log-prioridade.component';

describe('LogPrioridadeComponent', () => {
  let component: LogPrioridadeComponent;
  let fixture: ComponentFixture<LogPrioridadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogPrioridadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogPrioridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
