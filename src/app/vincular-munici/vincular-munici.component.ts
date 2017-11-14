import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vincular-munici',
  templateUrl: './vincular-munici.component.html',
  styleUrls: ['./vincular-munici.component.css']
})
export class VincularMuniciComponent implements OnInit {

  formularioGS: FormGroup;
  formularioDAP: FormGroup;
  
  private anos: string[] = ["2007/2008", "2009/2010", "2011/2012", "2013/2014", "2015/2016"]

  public getAnos() {
    return this.anos;
  }

  constructor(
    private formBuilder: FormBuilder, private http: Http

  ) {

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

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioGS.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.formularioGS.reset();
      },
      (error: any) => alert('erro'));


  }
  onSubmitDAP() {
    console.log(this.formularioDAP);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioDAP.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.formularioDAP.reset();
      },
      (error: any) => alert('erro'))

  };

  verificaValidTouchedGS(campo){
      
      return !this.formularioGS.get(campo).valid && this.formularioGS.get(campo).touched;
      
  }

  verificaValidTouchedDAP(campo){
    
          return !this.formularioDAP.get(campo).valid && this.formularioDAP.get(campo).touched;
          
      }

  aplicaCssErroGS(campo){
      return {
        'has-error': this.verificaValidTouchedGS(campo),
        'has-feedback': this.verificaValidTouchedGS(campo)
      }
  }

  aplicaCssErroDAP(campo){
    return {
      'has-error': this.verificaValidTouchedDAP(campo),
      'has-feedback': this.verificaValidTouchedDAP(campo)
    }
}
}



