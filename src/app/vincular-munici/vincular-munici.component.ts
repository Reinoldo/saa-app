import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vincular-munici',
  templateUrl: './vincular-munici.component.html',
  styleUrls: ['./vincular-munici.component.css']
})
export class VincularMuniciComponent implements OnInit {

  formularioGS: FormGroup;
  formularioDAP: FormGroup;
  url: string = 'https://httpbin.org/post';
  private anos: string[] = []
  private municipio: string[] = []
  private estados = [{ nome: 'Acre', uf: 'AC' }, { nome: 'Alagoas', uf: 'AL' }, { nome: 'Amapá', uf: 'AP' },
  { nome: 'Amazonas', uf: 'AM' }, { nome: 'Bahia', uf: 'BA' }, { nome: 'Ceará', uf: 'CE' },
  { nome: 'Distrito Federal', uf: 'DF' }, { nome: 'Espirito Santo', uf: 'ES' }, { nome: 'Goiás', uf: 'GO' }, { nome: 'Maranhão', uf: 'MA' },
  { nome: 'Mato Grosso do Sul', uf: 'MS' }, { nome: 'Mato Grosso', uf: 'MT' }, { nome: 'Minas Gerais', uf: 'MG' }, { nome: 'Pará', uf: 'PA' },
  { nome: 'Paraíba', uf: 'PB' }, { nome: 'Paraná', uf: 'PR' }, { nome: 'Pernambuco', uf: 'PE' }, { nome: 'Piauí', uf: 'PI' },
  { nome: 'Rio de Janeiro', uf: 'RJ' }, { nome: 'Rio Grande do Norte', uf: 'RN' }, { nome: 'Rio Grande do Sul', uf: 'RS' }, { nome: 'Rondônia', uf: 'RO' },
  { nome: 'Roraima', uf: 'RR' }, { nome: 'Santa Catarina', uf: 'SC' }, { nome: 'São Paulo', uf: 'SP' }, { nome: 'Sergipe', uf: 'SE' }, { nome: 'Tocantins', uf: 'TO' }
  ];



  constructor(
    private formBuilder: FormBuilder, private http: Http

  ) {
    this.anos = ["2007/2008", "2009/2010", "2011/2012", "2013/2014", "2015/2016"];
    this.municipio = ['Luziânia', 'Brasília', 'Porto Alegre'];
  }

  public getAnos() {
    return this.anos;
  }

  public getMunicipio() {
    return this.municipio;
  }
  public getEstado(){
    return this.estados;
  }

  ngOnInit() {

    this.formularioGS = this.formBuilder.group({
      anoPrograma: [null, Validators.required],
      uf: [null, Validators.required],
      municipio: [null, Validators.required],
      status: ['Ativado', Validators.required]
    });

    this.formularioDAP = this.formBuilder.group({
      anoPrograma: [null, Validators.required],
      uf: [null, Validators.required],
      municipio: [null, Validators.required],
      status: ['Ativado', Validators.required]
    });
  }

  onSubmitGS() {
    console.log(this.formularioGS);

    this.http.post(this.url, JSON.stringify(this.formularioGS.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.formularioGS.reset();
      },
      (error: any) => alert('erro'));


  }
  onSubmitDAP() {
    console.log(this.formularioDAP);

    this.http.post(this.url, JSON.stringify(this.formularioDAP.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.formularioDAP.reset();
      },
      (error: any) => alert('erro'))

  };

  /*  recebeDados(){
     this.http.get(this.url)
     .map(res => res.json());
     console.log();
   } */


  verificaValidTouchedGS(campo) {

    return !this.formularioGS.get(campo).valid && this.formularioGS.get(campo).touched;

  }

  verificaValidTouchedDAP(campo) {

    return !this.formularioDAP.get(campo).valid && this.formularioDAP.get(campo).touched;

  }

  aplicaCssErroGS(campo) {
    return {
      'has-error': this.verificaValidTouchedGS(campo),
      'has-feedback': this.verificaValidTouchedGS(campo)
    }
  }

  aplicaCssErroDAP(campo) {
    return {
      'has-error': this.verificaValidTouchedDAP(campo),
      'has-feedback': this.verificaValidTouchedDAP(campo)
    }
  }
}



