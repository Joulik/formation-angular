import { TestBed } from '@angular/core/testing';

import { CursusHttpService } from './cursus-http.service';

describe('CursusHttpService', () => {
  let service: CursusHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursusHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
