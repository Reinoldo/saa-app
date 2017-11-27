import { EstadoBr } from './../shared/models/estado-br.model';
import { EstadosBrService } from './../shared/services/estados-br.service';
import { Http } from '@angular/http';
import { Component, OnInit} from '@angular/core';
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

  id: number = 0;

  private cadastrar: Object[] = []
  private anos: string[] = []
  private cadastrosGS = []
  private cadastrosDAP = []
  private municipio: string[] = []
<<<<<<< HEAD
 
  private estados: EstadoBr[];
=======

  private estados = [{ nome: 'Acre', uf: 'AC' }, { nome: 'Alagoas', uf: 'AL' }, { nome: 'Amapá', uf: 'AP' },
  { nome: 'Amazonas', uf: 'AM' }, { nome: 'Bahia', uf: 'BA' }, { nome: 'Ceará', uf: 'CE' },
  { nome: 'Distrito Federal', uf: 'DF' }, { nome: 'Espirito Santo', uf: 'ES' }, { nome: 'Goiás', uf: 'GO' }, { nome: 'Maranhão', uf: 'MA' },
  { nome: 'Mato Grosso do Sul', uf: 'MS' }, { nome: 'Mato Grosso', uf: 'MT' }, { nome: 'Minas Gerais', uf: 'MG' }, { nome: 'Pará', uf: 'PA' },
  { nome: 'Paraíba', uf: 'PB' }, { nome: 'Paraná', uf: 'PR' }, { nome: 'Pernambuco', uf: 'PE' }, { nome: 'Piauí', uf: 'PI' },
  { nome: 'Rio de Janeiro', uf: 'RJ' }, { nome: 'Rio Grande do Norte', uf: 'RN' }, { nome: 'Rio Grande do Sul', uf: 'RS' }, { nome: 'Rondônia', uf: 'RO' },
  { nome: 'Roraima', uf: 'RR' }, { nome: 'Santa Catarina', uf: 'SC' }, { nome: 'São Paulo', uf: 'SP' }, { nome: 'Sergipe', uf: 'SE' }, { nome: 'Tocantins', uf: 'TO' }
  ];
>>>>>>> 70cf47d1da2a5fee0471f96988638dcb04520142


  constructor(private listaEstados: EstadosBrService, private formBuilder: FormBuilder) {
    this.anos = ["2007/2008", "2009/2010", "2011/2012", "2013/2014", "2015/2016"];
    this.municipio = ['Luziânia', 'Brasília', 'Porto Alegre'];
    
  

<<<<<<< HEAD
=======
  public setCadastrar(dado){

    this.cadastrar.push(dado);
    
  }
  public retira(): void{
    
  }

  public getCadastrar(){
    return this.cadastrar;
  }
  public getAnos() {
    return this.anos;
>>>>>>> 70cf47d1da2a5fee0471f96988638dcb04520142
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
    
    this.listaEstados.getEstadosBr()
    .subscribe(dados => {this.estados = dados});
  }

  public getAnos() {
    return this.anos;
  }

  public setCadastrosGS(dados) {
    
    dados.id = this.cadastrosGS.length +1;
     this.cadastrosGS.push(dados);
  } 

  public setCadastrosDAP(dados) {
    dados.id = this.cadastrosDAP.length +1;
    this.cadastrosDAP.push(dados);
 } 

  public getCadastrosGS() {
    return this.cadastrosGS;
 }
 public getCadastrosDAP() {
  return this.cadastrosDAP;
}

  public getMunicipio() {
    return this.municipio;
  }
  public getEstado(){
    return this.estados;
  
  }

  excluirGS(){  

    this.cadastrosGS.slice(1);
    this.cadastrosGS.sort();
    
  }
  excluirDAP(){

   
    
    
  }
  onSubmitGS() {
    // console.log(this.formularioGS);
<<<<<<< HEAD

    // this.http.post(this.url, JSON.stringify(this.formularioGS.value))
    //   .map(res => res)
    //   .subscribe(dados => {
        this.setCadastrosGS(this.formularioGS.value);
        console.log(this.getCadastrosGS());
        //this.formularioGS.reset();
      // },
      // (error: any) => alert('erro'));

=======
   
    // this.http.post(this.url, JSON.stringify(this.formularioGS.value))
    //   .map(res => res)
    //   .subscribe(dados => {
    //     console.log(dados);
    //     this.formularioGS.reset();
    //   },
    //   (error: any) => alert('erro'));
    this.setCadastrar(this.formularioGS.value);
    
>>>>>>> 70cf47d1da2a5fee0471f96988638dcb04520142

  }
  onSubmitDAP() {
    //console.log(this.formularioDAP);
<<<<<<< HEAD

    // this.http.post(this.url, JSON.stringify(this.formularioDAP.value))
    
    //   .map(res => res)
    //   .subscribe(dados => {
        
        this.setCadastrosDAP(this.formularioDAP.value);
        console.log(this.getCadastrosDAP());
        
      //   this.formularioDAP.reset();
      // },
      // (error: any) => alert('erro'))

=======
    
    // this.http.post(this.url, JSON.stringify(this.formularioDAP.value))
    //   .map(res => res)
    //   .subscribe(dados => {
    //     console.log(dados);
    //     this.formularioDAP.reset();
    //   },
    //   (error: any) => alert('erro'))

    this.setCadastrar(this.formularioDAP.value);
    console.log(this.cadastrar);
       // this.formularioDAP.reset();
>>>>>>> 70cf47d1da2a5fee0471f96988638dcb04520142
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



