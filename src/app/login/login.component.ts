import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Login } from './login';
import { AuthService } from '../shared/services/auth.service';

=======
>>>>>>> e9bac587dc74f6c100890e74e371e2708fd348b8
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
<<<<<<< HEAD
  
=======

>>>>>>> e9bac587dc74f6c100890e74e371e2708fd348b8
  constructor(private auth: AuthService) { }

  ngOnInit() {
   
  }

  fazerLogin(){
    this.auth.fazerLogin(this.usuario);
  }

  fazerLogin(){
    this.auth.fazerLogin(this.usuario);
  }
  

}
