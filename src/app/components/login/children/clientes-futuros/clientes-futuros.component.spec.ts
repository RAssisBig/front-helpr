import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFuturosComponent } from './clientes-futuros.component';

describe('ClientesFuturosComponent', () => {
  let component: ClientesFuturosComponent;
  let fixture: ComponentFixture<ClientesFuturosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesFuturosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesFuturosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
