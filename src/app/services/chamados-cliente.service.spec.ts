import { TestBed } from '@angular/core/testing';

import { ChamadosClienteService } from './chamados-cliente.service';

describe('ChamadosClienteService', () => {
  let service: ChamadosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamadosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
