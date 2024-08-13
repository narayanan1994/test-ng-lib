import { TestBed } from '@angular/core/testing';

import { TestNgLibService } from './test-ng-lib.service';

describe('TestNgLibService', () => {
  let service: TestNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
