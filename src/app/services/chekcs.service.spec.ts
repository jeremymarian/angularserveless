import { TestBed } from '@angular/core/testing';

import { ChekcsService } from './chekcs.service';

describe('ChekcsService', () => {
  let service: ChekcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChekcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
