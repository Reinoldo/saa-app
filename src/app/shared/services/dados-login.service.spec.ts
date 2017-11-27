import { TestBed, inject } from '@angular/core/testing';

import { DadosLoginService } from './dados-login.service';

describe('DadosLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosLoginService]
    });
  });

  it('should be created', inject([DadosLoginService], (service: DadosLoginService) => {
    expect(service).toBeTruthy();
  }));
});
