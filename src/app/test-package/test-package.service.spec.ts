import { TestBed } from '@angular/core/testing';

import { TestPackageService } from './test-package.service';

describe('TestPackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestPackageService = TestBed.get(TestPackageService);
    expect(service).toBeTruthy();
  });
});
