import { TestBed } from '@angular/core/testing';

import { StyleMasterService } from './style-master.service';

describe('StyleMasterService', () => {
  let service: StyleMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
