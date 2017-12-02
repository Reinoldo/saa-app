
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private auth: AuthService) { }

  ngOnInit() {
   
  }

  fazerLogin(){
    this.auth.fazerLogin(this.usuario);
  }


  

}
