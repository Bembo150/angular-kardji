import { TestBed } from '@angular/core/testing';

import { UtilizaService } from './utiliza.service';

describe('UtilizaService', () => {
  let service: UtilizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
