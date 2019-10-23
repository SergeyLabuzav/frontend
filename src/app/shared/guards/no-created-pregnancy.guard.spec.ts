import { TestBed, async, inject } from '@angular/core/testing';

import { NoCreatedPregnancyGuard } from './no-created-pregnancy.guard';

describe('NoCreatedPregnancyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoCreatedPregnancyGuard]
    });
  });

  it('should ...', inject([NoCreatedPregnancyGuard], (guard: NoCreatedPregnancyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
