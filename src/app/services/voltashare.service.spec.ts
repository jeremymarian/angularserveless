import { TestBed } from '@angular/core/testing';

import { VoltashareService } from './voltashare.service';

describe('VoltashareService', () => {
  let service: VoltashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoltashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
