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
  formularioENDERECO: FormGroup;
  estado_civil: String[];
  cadastros: string[] = [];
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
  
    

     
  
  }

  public getEstado(){
    return this.estados;
  }

  public setCadastros(dados) {
    this.cadastros.push(dados.data);
 } 

 public getCadastros() {
   return this.cadastros;
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

    this.formularioENDERECO = this.formBuilder.group({
      tipo_endereco: [null,Validators.required],
      endereco: [null,Validators.required]
    });
  }

  onSubmitUSER() {
    console.log(this.formularioENDERECO);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioENDERECO.value)) //formularioUSER ou ENDERECO
      .map(res => res)
      .subscribe(dados => {
        this.setCadastros(dados.json());
        console.log(this.cadastros);
        this.formularioUSER.reset();
      },
      (error: any) => alert('erro'));

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
