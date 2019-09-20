import { TestBed } from '@angular/core/testing';

import { BackOfficeApiService } from './back-office-api.service';

describe('BackOfficeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackOfficeApiService = TestBed.get(BackOfficeApiService);
    expect(service).toBeTruthy();
  });
});
