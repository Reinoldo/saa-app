import { EstadoBr } from './../shared/models/estado-br.model';
import { EstadosBrService } from './../shared/services/estados-br.service';
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

  mostrarTabelaGS: boolean = false;
  mostrarTabelaDAP: boolean = false;

  url: string = 'https://httpbin.org/post';
  private anos: string[] = []
  private cadastrosGS = []
  private cadastrosDAP = []
  private municipio: string[] = []

  private estados: EstadoBr[];


  constructor(private listaEstados: EstadosBrService, private formBuilder: FormBuilder) {
    this.anos = ["2007/2008", "2009/2010", "2011/2012", "2013/2014", "2015/2016"];
    this.municipio = ['Luziânia', 'Brasília', 'Porto Alegre'];



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

    this.listaEstados.getEstadosCidadesBr()
      .subscribe(dados => this.estados = dados);




  }

  public getAnos() {
    return this.anos;
  }

  public setCadastrosGS(dados) {


    this.cadastrosGS.push(dados);
  }

  public setCadastrosDAP(dados) {

    this.cadastrosDAP.push(dados);
  }

  public getCadastrosGS() {
    return this.cadastrosGS;
  }
  public getCadastrosDAP() {
    return this.cadastrosDAP;
  }

  ngOnChange(){}
  public getMunicipio(sigla: string) {
    for (let s of this.getEstado()) {
      if (s.sigla == sigla) {
        return s.cidades;
      }
      
    }
    
  }
  public getEstado() {

    return this.estados;

  }

  excluirGS(index: number) {


    this.cadastrosGS.splice(index, 1);
    //this.cadastrosGS.sort()

    //this.cadastrosGS.sort();
    console.log(this.cadastrosGS)
  }
  excluirDAP(index: number) {
    this.cadastrosDAP.splice(index, 1);
    console.log(this.cadastrosDAP)
  }
  onSubmitGS() {
    // console.log(this.formularioGS);

    // this.http.post(this.url, JSON.stringify(this.formularioGS.value))
    //   .map(res => res)
    //   .subscribe(dados => {
    this.setCadastrosGS(this.formularioGS.value);
    console.log(this.getCadastrosGS());
    this.mostrarTabelaGS = true;

    this.formularioGS.reset()
    //this.formularioGS.reset();
    // },
    // (error: any) => alert('erro'));


  }
  onSubmitDAP() {
    //console.log(this.formularioDAP);

    // this.http.post(this.url, JSON.stringify(this.formularioDAP.value))

    //   .map(res => res)
    //   .subscribe(dados => {

    this.setCadastrosDAP(this.formularioDAP.value);
    console.log(this.getCadastrosDAP());

    this.mostrarTabelaDAP = true;
    this.formularioDAP.reset()
    //   this.formularioDAP.reset();
    // },
    // (error: any) => alert('erro'))

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



