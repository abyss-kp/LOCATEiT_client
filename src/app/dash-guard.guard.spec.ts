import { TestBed, async, inject } from '@angular/core/testing';

import { DashGuardGuard } from './dash-guard.guard';

describe('DashGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashGuardGuard]
    });
  });

  it('should ...', inject([DashGuardGuard], (guard: DashGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
