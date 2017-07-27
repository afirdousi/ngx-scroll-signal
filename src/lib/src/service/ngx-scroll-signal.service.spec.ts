import { TestBed, inject } from '@angular/core/testing';

import { NgxScrollSignalService } from './ngx-scroll-signal.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxScrollSignalService]
    });
  });

  it('should create service', inject([NgxScrollSignalService], (service: NgxScrollSignalService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([NgxScrollSignalService], (service: NgxScrollSignalService) => {
    expect(service.getMeaning()).toBe(42);
  }));
});
