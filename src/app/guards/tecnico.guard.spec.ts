import { TestBed } from '@angular/core/testing';

import { TecnicoGuard } from './tecnico.guard';

describe('TecnicoGuard', () => {
  let guard: TecnicoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TecnicoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
