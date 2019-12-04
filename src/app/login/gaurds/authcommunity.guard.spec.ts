import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCommunityGaurd } from './authcommunity.guard';

describe('AuthcommunityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCommunityGaurd]
    });
  });

  it('should ...', inject([AuthCommunityGaurd], (guard: AuthCommunityGaurd) => {
    expect(guard).toBeTruthy();
  }));
});
