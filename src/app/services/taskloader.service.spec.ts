import { TestBed } from '@angular/core/testing';

import { TaskloaderService } from './taskloader.service';

describe('TaskloaderService', () => {
  let service: TaskloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
