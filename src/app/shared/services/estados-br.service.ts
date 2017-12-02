import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EstadosBrService {
  

  constructor(private http: Http) { }

  getEstadosCidadesBr() {
    return this.http.get('assets/dados/estados-cidades.json')
      .map((res: Response) => res.json());
  }
}
