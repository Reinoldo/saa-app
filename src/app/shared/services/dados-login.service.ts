import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DadosLoginService {

  constructor(private http: Http) { }

 
  getLoginECpf() {
    return this.http.get('assets/dados/dados.json')
      .map((res: Response) => res.json());
  }

}
