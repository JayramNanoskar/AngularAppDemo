import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('InvestigationService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
