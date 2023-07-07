import { TestBed } from '@angular/core/testing';

import { TokenIInterceptorService } from './token-iinterceptor.service';

describe('TokenIInterceptorService', () => {
  let service: TokenIInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
