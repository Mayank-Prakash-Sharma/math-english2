import { TestBed } from '@angular/core/testing';

import { VideoPackageService } from './video-package.service';

describe('VideoPackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoPackageService = TestBed.get(VideoPackageService);
    expect(service).toBeTruthy();
  });
});
