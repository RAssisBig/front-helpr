import { TestBed } from '@angular/core/testing';

import { ChamadoUrgenteService } from './chamado-urgente.service';

describe('ChamadoUrgenteService', () => {
  let service: ChamadoUrgenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamadoUrgenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
