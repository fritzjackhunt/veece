import { TestBed } from '@angular/core/testing';

import { BvnVerificationService } from './bvn-verification.service';

describe('BvnVerificationService', () => {
  let service: BvnVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BvnVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
