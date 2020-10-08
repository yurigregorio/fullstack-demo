import { TestBed } from '@angular/core/testing';

import { HttpConfigInterceptorService } from './http-config-interceptor.service';

describe('HttpConfigInterceptorService', () => {
  let service: HttpConfigInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConfigInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
