import { TestBed } from '@angular/core/testing';

import { TecnicocFuturosService } from './tecnicosfuturos.service';

describe('TecnicosfuturosService', () => {
  let service: TecnicocFuturosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicocFuturosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
