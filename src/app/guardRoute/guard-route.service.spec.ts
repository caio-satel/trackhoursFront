import { TestBed } from '@angular/core/testing';

import { GuardRouteService } from './guard-route.service';

describe('GuardRouteService', () => {
  let service: GuardRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
