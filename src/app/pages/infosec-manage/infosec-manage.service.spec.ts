import { TestBed } from '@angular/core/testing';

import { InfosecManageService } from './infosec-manage.service';

describe('InfosecManageService', () => {
  let service: InfosecManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosecManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
