import { TestBed } from '@angular/core/testing';

import { ProductShareService } from './product-share.service';

describe('ProductShareService', () => {
  let service: ProductShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
