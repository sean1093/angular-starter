import { TestBed, inject } from '@angular/core/testing';

import { DataProcessService } from './data-process.service';

describe('DataProcessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProcessService]
    });
  });

  it('should be created', inject([DataProcessService], (service: DataProcessService) => {
    expect(service).toBeTruthy();
  }));
});
