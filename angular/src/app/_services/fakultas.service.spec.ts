import { TestBed, inject } from '@angular/core/testing';

import { FakultasService } from './fakultas.service';

describe('FakultasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakultasService]
    });
  });

  it('should be created', inject([FakultasService], (service: FakultasService) => {
    expect(service).toBeTruthy();
  }));
});
