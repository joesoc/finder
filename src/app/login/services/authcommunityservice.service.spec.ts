import { TestBed } from '@angular/core/testing';

import { AuthCommunityService } from './authcommunityservice.service';

describe('AuthcommunityserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCommunityService = TestBed.get(AuthCommunityService);
    expect(service).toBeTruthy();
  });
});
