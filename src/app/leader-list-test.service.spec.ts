import { TestBed } from '@angular/core/testing';

import { LeaderListTestService } from './leader-list-test.service';

describe('LeaderListTestService', () => {
  let service: LeaderListTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderListTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
