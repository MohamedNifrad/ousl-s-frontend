import { TestBed } from '@angular/core/testing';

import { OrderMasterService } from './order-master.service';

describe('OrderMasterService', () => {
  let service: OrderMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
