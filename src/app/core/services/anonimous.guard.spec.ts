import { TestBed, async, inject } from '@angular/core/testing';

import { AnonimousGuard } from './anonimous.guard';

describe('AnonimousGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonimousGuard]
    });
  });

  it('should ...', inject([AnonimousGuard], (guard: AnonimousGuard) => {
    expect(guard).toBeTruthy();
  }));
});
