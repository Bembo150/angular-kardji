import { TestBed } from '@angular/core/testing';

import { KardsService } from './kards.service';

describe('KardsService', () => {
  let service: KardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
