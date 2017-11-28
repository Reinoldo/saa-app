import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  pesquisar: FormGroup;
  achou: boolean;
  pesquisou = [];
  numeros = [1,2,3]
  private dados = [{ cpf: '036' }, { login: 'reinoldo' }]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pesquisar = this.formBuilder.group({
      cpf: [null],
      login: [null]
    })


  }

  getDados() {
    return this.dados;
  }

  onSubmit() {
    this.pesquisou = this.pesquisar.value;

  
  }
}
