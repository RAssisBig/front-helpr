import { TestBed } from '@angular/core/testing';

import { LogpessoaService } from './logpessoa.service';

describe('LogpessoaService', () => {
  let service: LogpessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogpessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
