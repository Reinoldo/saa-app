import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../../login/usuario';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.login=== 'usuario@email.com' && usuario.senha === '1234'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/pesquisar']);
    }
    else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

}
