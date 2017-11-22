import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'form-municipio',
  templateUrl: './form-municipio.component.html',
  styleUrls: ['./form-municipio.component.css']
})
@Injectable()
export class FormMunicipioComponent implements OnInit {

  @Input() form: FormGroup;
  private cadastro = [];
  private anos: string[] = ["2007/2008", "2009/2010", "2011/2012", "2013/2014", "2015/2016"];
  private municipio: string[] = ['Luziânia', 'Brasília', 'Porto Alegre'];
  private status: string[] = ['Ativado', 'Desativado'];

  private estados = [{ nome: 'Acre', uf: 'AC' }, { nome: 'Alagoas', uf: 'AL' }, { nome: 'Amapá', uf: 'AP' },
  { nome: 'Amazonas', uf: 'AM' }, { nome: 'Bahia', uf: 'BA' }, { nome: 'Ceará', uf: 'CE' },
  { nome: 'Distrito Federal', uf: 'DF' }, { nome: 'Espirito Santo', uf: 'ES' }, { nome: 'Goiás', uf: 'GO' }, { nome: 'Maranhão', uf: 'MA' },
  { nome: 'Mato Grosso do Sul', uf: 'MS' }, { nome: 'Mato Grosso', uf: 'MT' }, { nome: 'Minas Gerais', uf: 'MG' }, { nome: 'Pará', uf: 'PA' },
  { nome: 'Paraíba', uf: 'PB' }, { nome: 'Paraná', uf: 'PR' }, { nome: 'Pernambuco', uf: 'PE' }, { nome: 'Piauí', uf: 'PI' },
  { nome: 'Rio de Janeiro', uf: 'RJ' }, { nome: 'Rio Grande do Norte', uf: 'RN' }, { nome: 'Rio Grande do Sul', uf: 'RS' }, { nome: 'Rondônia', uf: 'RO' },
  { nome: 'Roraima', uf: 'RR' }, { nome: 'Santa Catarina', uf: 'SC' }, { nome: 'São Paulo', uf: 'SP' }, { nome: 'Sergipe', uf: 'SE' }, { nome: 'Tocantins', uf: 'TO' }
  ];

  constructor(private formBuilder: FormBuilder) {


  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      anoPrograma: [null, Validators.required],
      uf: [null, Validators.required],
      municipio: [null, Validators.required],
      status: ['Ativado', Validators.required]
    });
  }

  public getAnos() {
    return this.anos;
  }

  public getMunicipio() {
    return this.municipio;
  }

  public getEstado() {
    return this.estados;
  }

  public setCadastrar(dado) {
    this.cadastro.push(dado);
  }

  public getCadastros() {
    return this.cadastro;
  }

  onSubmit() {

    this.setCadastrar(this.form.value);
    console.log(this.cadastro);
    //console.log(this.form);
  }

  verificaValidTouched(campo) {

    return !this.form.get(campo).valid && this.form.get(campo).touched;

  }


  aplicaCssErroGS(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }



}