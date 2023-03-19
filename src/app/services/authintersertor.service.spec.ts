import { TestBed } from '@angular/core/testing';

import { AuthintersertorService } from './authintersertor.service';

describe('AuthintersertorService', () => {
  let service: AuthintersertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthintersertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
