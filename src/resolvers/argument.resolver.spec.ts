import { TestBed } from '@angular/core/testing';

import { ArgumentResolver } from './argument.resolver';

describe('ArgumentResolver', () => {
  let resolver: ArgumentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArgumentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
