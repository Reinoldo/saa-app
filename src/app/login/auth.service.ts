import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router/';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.login === 'usuario@email.com' && usuario.senha === '1234'){

      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/pesquisar']);
    } 
    else{
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
