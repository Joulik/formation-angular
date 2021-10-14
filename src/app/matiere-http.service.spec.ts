import { TestBed } from '@angular/core/testing';

import { MatiereHttpService } from './matieres/matiere-http.service';

describe('MatiereHttpService', () => {
  let service: MatiereHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiereHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
