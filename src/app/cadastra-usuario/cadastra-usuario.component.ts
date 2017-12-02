import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  formularioUSER: FormGroup;
  formularioCONTATO: FormGroup;
  formularioENDERECO: FormGroup;
  estado_civil: String[];
  cadastros: string[] = [];
  cadastroCON: string[] = [];
  cadastroEND: string[] = [];
  tipo_endereco: string[] = [];
  private estados = [{ nome: 'Acre', uf: 'AC' }, { nome: 'Alagoas', uf: 'AL' }, { nome: 'Amapá', uf: 'AP' },
  { nome: 'Amazonas', uf: 'AM' }, { nome: 'Bahia', uf: 'BA' }, { nome: 'Ceará', uf: 'CE' },
  { nome: 'Distrito Federal', uf: 'DF' }, { nome: 'Espirito Santo', uf: 'ES' }, { nome: 'Goiás', uf: 'GO' }, { nome: 'Maranhão', uf: 'MA' },
  { nome: 'Mato Grosso do Sul', uf: 'MS' }, { nome: 'Mato Grosso', uf: 'MT' }, { nome: 'Minas Gerais', uf: 'MG' }, { nome: 'Pará', uf: 'PA' },
  { nome: 'Paraíba', uf: 'PB' }, { nome: 'Paraná', uf: 'PR' }, { nome: 'Pernambuco', uf: 'PE' }, { nome: 'Piauí', uf: 'PI' },
  { nome: 'Rio de Janeiro', uf: 'RJ' }, { nome: 'Rio Grande do Norte', uf: 'RN' }, { nome: 'Rio Grande do Sul', uf: 'RS' }, { nome: 'Rondônia', uf: 'RO' },
  { nome: 'Roraima', uf: 'RR' }, { nome: 'Santa Catarina', uf: 'SC' }, { nome: 'São Paulo', uf: 'SP' }, { nome: 'Sergipe', uf: 'SE' }, { nome: 'Tocantins', uf: 'TO' }
  ];



  naturalidade: String[];

  constructor(private formBuilder: FormBuilder, private http: Http) {

    this.estado_civil = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Amasiado(a)"];

    this.naturalidade = ["Ceilândia", "Pará", "Taguatinga"]; 

    this.tipo_endereco = ["Residencial", "Comercial"];

     
  
  }

  public getEstado(){
    return this.estados;
  }
  public getTipo_endereco(){
    return this.tipo_endereco;
  }

  public setCadastros(dados) {
 } 

  public getCadastros() {
    return this.cadastros;
  }

  public setCadastroCON(dados){
    dados.id = this.cadastroCON.length +1;
    this.cadastroCON.push(dados);
  }

  public getCadastroCON(){    
    return this.cadastroCON;
  }

  public setCadastroEND(dados){
    dados.id = this.cadastroCON.length +1;
    this.cadastroEND.push(dados);
  }
  public getCadastroEND(){
    return this.cadastroEND;
  }

  public Excluir(index : number) {
    this.cadastros.splice(index, 1);
    console.log(this.cadastros);
}
  public ExcluirCON(index : number){
    this.cadastroCON.splice(index, 1);
    console.log(this.cadastroCON);
}

  public ExcluirEND(index : number){
    this.cadastroEND.splice(index, 1);
    console.log(this.cadastroEND);
}

  ngOnInit() {

    this.formularioUSER = this.formBuilder.group({

      cpf: [null,Validators.required],
      nis: [null,Validators.required],
      usuario: [null,Validators.required],
      apelido: [null,Validators.required],
      sexo: [null,Validators.required],
      ec: [null,Validators.required], //Estado Civil
      rg: [null,Validators.required],
      emissor: [null,Validators.required],
      estado_emissor: [null,Validators.required],
      nasc: [null,Validators.required], //data de nascimento
      estado_nasc: [null,Validators.required],
      naturalidade: [null,Validators.required],
      nome_mae: [null,Validators.required]

    });

    this.formularioCONTATO = this.formBuilder.group({
      email: [null,Validators.required],
      numero: [null,Validators.required]
    });

    this.formularioENDERECO = this.formBuilder.group({
      tipo_endereco: [null,Validators.required],
      endereco: [null,Validators.required]
    });
  }

  onSubmitUSER() {
    //this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioENDERECO.value)) //formularioUSER ou ENDERECO
      //.map(res => res)
     // .subscribe(dados => {
        this.setCadastros(this.formularioENDERECO.value);
        console.log(this.getCadastros());
        //this.setCadastros(dados.json());
       // console.log(this.cadastros);
        //this.formularioUSER.reset();
      }
     // (error: any) => alert('erro'));
 onSubmitCONTATO(){
        this.setCadastroCON(this.formularioCONTATO.value);
        console.log(this.getCadastroCON());
 }
 onSubmitENDERECO(){
        this.setCadastroEND(this.formularioENDERECO.value);
        console.log(this.getCadastroEND());

 }      
        
  verificaValidTouchedUSER(campo) {

    return !this.formularioUSER.get(campo).valid && this.formularioUSER.get(campo).touched;

  }      

  aplicaCssErroUSER(campo) {
    return {
      'has-error': this.verificaValidTouchedUSER(campo),
      'has-feedback': this.verificaValidTouchedUSER(campo)
    }
  }

  
}
