import { TestBed } from '@angular/core/testing';

import { ArgumentServiceService } from './argument-service.service';

describe('ArgumentServiceService', () => {
  let service: ArgumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
