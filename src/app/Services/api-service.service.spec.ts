import { TestBed } from '@angular/core/testing';

import { APiServiceService } from './api-service.service';

describe('APiServiceService', () => {
  let service: APiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
