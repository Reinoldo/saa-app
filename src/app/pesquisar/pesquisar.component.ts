import { DadosLoginService } from './../shared/services/dados-login.service';
import { PesquisaLogin } from './../shared/models/pesquisaLogin';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css'],
  
})
export class PesquisarComponent implements OnInit {

  pesquisar: FormGroup;
  dados = [];
  
  dadosLogin: PesquisaLogin[];


  constructor(private pesquisaUser: FormBuilder, private login: DadosLoginService) {



  }

  ngOnInit() {
    this.pesquisar = this.pesquisaUser.group({
      cpf: [null],
      login: [null]
    })

    this.login.getLoginECpf()
      .subscribe(dados => { this.dadosLogin = dados; })

 
  

  }
  setPesquisa(dados) {
    for (let v of this.dadosLogin) {
      //console.log(v);
      if (dados.login == v.login) {
        this.dados.push(v);
        //console.log(this.dados)
      }
      if (dados.cpf == v.cpf) {
        this.dados.push(v);
        //console.log(this.dados)
      }
    }

  }

  public getDados() {
    return this.dados;
  }

  onSubmit() {

    if (this.dados.length == 0) {
      this.setPesquisa(this.pesquisar.value);
      console.log(this.getDados())
    }
    else {
      this.dados.slice(length+1);
    
      this.setPesquisa(this.pesquisar.value);
      console.log(this.getDados())
    }


  }

  comparacaoBase() {
    if (!this.pesquisar == null) {


      //   else
      //     alert("Não existe esse CPF ou login cadastrado");
      // }
    }

  }
}