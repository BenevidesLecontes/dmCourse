import { TestBed, inject } from '@angular/core/testing';

import { PontosService } from './pontos.service';

describe('PontospontosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PontosService]
    });
  });

  it('should be created', inject([PontosService], (service: PontosService) => {
    expect(service).toBeTruthy();
  }));
});
