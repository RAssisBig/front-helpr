import { TestBed } from '@angular/core/testing';

import { ClientesGuard } from './clientes.guard';

describe('ClientesGuard', () => {
  let guard: ClientesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
