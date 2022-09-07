import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPerfisComponent } from './log-perfis.component';

describe('LogPerfisComponent', () => {
  let component: LogPerfisComponent;
  let fixture: ComponentFixture<LogPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogPerfisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
