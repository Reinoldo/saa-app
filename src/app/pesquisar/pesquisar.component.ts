import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  pesquisar: FormBuilder;

  private dados = [{cpf: "036.598.311-07", login: "reinoldo"},{cpf: "036.598.311-08", login: "marco"},
  {cpf: "036.598.311-09", login: "ygor"} ];

  constructor() { }

  ngOnInit() {

   
  }

  getDados(){
    return this.dados;
  }
}
