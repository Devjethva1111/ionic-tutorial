import { TestBed } from '@angular/core/testing';

import { GlobFunService } from './glob-fun.service';

describe('GlobFunService', () => {
  let service: GlobFunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobFunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
