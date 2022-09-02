import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheConoscoFormComponent } from './trabalhe-conosco-form.component';

describe('TrabalheConoscoFormComponent', () => {
  let component: TrabalheConoscoFormComponent;
  let fixture: ComponentFixture<TrabalheConoscoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalheConoscoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalheConoscoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
