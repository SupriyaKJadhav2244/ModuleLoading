import { TestBed } from '@angular/core/testing';

import { PreloadserviceService } from './preloadservice.service';

describe('PreloadserviceService', () => {
  let service: PreloadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
