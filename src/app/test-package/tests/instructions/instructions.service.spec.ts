import { TestBed } from '@angular/core/testing';

import { InstructionsService } from './instructions.service';

describe('InstructionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstructionsService = TestBed.get(InstructionsService);
    expect(service).toBeTruthy();
  });
});
