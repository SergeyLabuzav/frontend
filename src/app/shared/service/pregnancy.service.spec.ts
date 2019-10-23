import { TestBed } from '@angular/core/testing';

import { PregnancyService } from './pregnancy.service';

describe('PregnancyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PregnancyService = TestBed.get(PregnancyService);
    expect(service).toBeTruthy();
  });
});
