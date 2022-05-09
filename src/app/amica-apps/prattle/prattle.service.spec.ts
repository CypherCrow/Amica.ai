import { TestBed } from '@angular/core/testing';

import { PrattleService } from './prattle.service';

describe('PrattleService', () => {
  let service: PrattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrattleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
