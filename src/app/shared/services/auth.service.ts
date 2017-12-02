import { Injectable } from '@angular/core';
import { Usuario } from '../../login/usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  

  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' && usuario.senha === '1234'){
      this.usuarioAutenticado = true;

      this.router.navigate(['/pesquisar']);
    }
    else {
      this.usuarioAutenticado = false;
    }
  }

}
